"use server";

import * as yup from "yup";
import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { validate } from "@/utils/validate";
import { FormState } from "@/types";
import { getSession } from "@/utils/session";

const schema = yup.object().shape({
    name: yup.string().required(),
    image_link: yup.string().required(),
    description: yup.string().required(),
    category_id: yup.string().required(),
});

export async function createCourse(prevState: FormState, formData: FormData): Promise<FormState> {
    const session = await getSession();
    if (!session || session.member.role !== "manager") {
        return { error: ["forbidden"] };
    }

    const data = {
        name: formData.get("name") as string,
        image_link: formData.get("image_link") as string,
        description: formData.get("description") as string,
        category_id: formData.get("category_id") as string,
    };

    const { errors } = await validate(schema, data);
    if (errors) return { error: errors };

    try {
        await prisma.course.create({ data });
    } catch (err) {
        return { error: ["something went wrong"] };
    }

    revalidatePath("/");
    redirect("/manager/course");
}
