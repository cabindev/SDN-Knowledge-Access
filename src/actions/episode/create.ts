"use server";

import * as yup from "yup";
import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { FormState } from "@/types";
import { validate } from "@/utils/validate";
import { getSession } from "@/utils/session";

const schema = yup.object().shape({
    order: yup.number().required().min(1),
    name: yup.string().required(),
    youtube_link: yup.string().required(),
    course_id: yup.string().required(),
});

export async function createEpisode(prevState: FormState, formData: FormData): Promise<FormState> {
    const session = await getSession();
    if (!session || session.member.role !== "manager") {
        return { error: ["forbidden"] };
    }

    const data = {
        order: parseInt(formData.get("order") as string),
        name: formData.get("name") as string,
        youtube_link: formData.get("youtube_link") as string,
        course_id: formData.get("course_id") as string,
    };

    const { errors } = await validate(schema, data);
    if (errors) return { error: errors };

    try {
        await prisma.episode.create({ data });
    } catch (err) {
        return { error: ["something went wrong"] };
    }

    revalidatePath("/");
    redirect("/manager/course/" + data.course_id);
}
