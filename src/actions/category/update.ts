"use server";

import * as yup from "yup";
import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { validate } from "@/utils/validate";
import { FormState } from "@/types";

const schema = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
});

export async function updateCategory(prevState: FormState, formData: FormData): Promise<FormState> {
    const data = {
        id: formData.get("id") as string,
        name: formData.get("name") as string,
    };

    const { errors } = await validate(schema, data);
    if (errors) return { error: errors };

    try {
        await prisma.category.update({ where: { id: data.id }, data });
    } catch (err) {
        return { error: ["something went wrong"] };
    }

    revalidatePath("/");
    redirect("/");
}
