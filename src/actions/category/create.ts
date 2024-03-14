"use server";

import * as yup from "yup";
import prisma from "@/utils/prisma";
import { FormState } from "@/types";
import { validate } from "@/utils/validate";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const schema = yup.object().shape({
    name: yup.string().required(),
});

export async function createCategory(prevState: FormState, formData: FormData): Promise<FormState> {
    const data = {
        name: formData.get("name") as string,
    };

    const { errors } = await validate(schema, data);
    if (errors) return { error: errors };

    try {
        await prisma.category.create({ data: data });
    } catch (err) {
        return { error: ["something went wrong"] };
    }

    revalidatePath("/");
    redirect("/manager/category");
}
