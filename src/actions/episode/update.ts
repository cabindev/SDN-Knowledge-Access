"use server";

import * as yup from "yup";
import prisma from "@/utils/prisma";
import { FormState } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { validate } from "@/utils/validate";

const schema = yup.object().shape({
    id: yup.string().required(),
    order: yup.number().required(),
    name: yup.string().required(),
    youtube_link: yup.string().required(),
});

export async function updateEpisode(prevState: FormState, formData: FormData): Promise<FormState> {
    const data = {
        id: formData.get("id") as string,
        order: parseInt(formData.get("order") as string),
        name: formData.get("name") as string,
        youtube_link: formData.get("youtube_link") as string,
    };

    const { errors } = await validate(schema, data);
    if (errors) return { error: errors };

    try {
        await prisma.episode.update({ where: { id: data.id }, data });
    } catch (err) {
        return { error: ["something went wrong"] };
    }

    revalidatePath("/");
    redirect("/");
}
