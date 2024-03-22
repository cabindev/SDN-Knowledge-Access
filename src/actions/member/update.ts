"use server";

import * as yup from "yup";
import prisma from "@/utils/prisma";
import { FormState } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { validate } from "@/utils/validate";
import { getSession } from "@/utils/session";

const schema = yup.object().shape({
    id: yup.string().required(),
    email: yup.string().email().required(),
    role: yup.string().oneOf(["normal", "manager"]).required(),
});

export async function updateMember(prevState: FormState, formData: FormData): Promise<FormState> {
    const session = await getSession();
    if (!session || session.member.role !== "manager") {
        return { error: ["forbidden"] };
    }

    const data = {
        id: formData.get("id") as string,
        email: formData.get("email") as string,
        role: formData.get("role") as any,
    };

    const { errors } = await validate(schema, data);
    if (errors) return { error: errors };

    try {
        await prisma.member.update({ where: { id: data.id }, data });
    } catch (err) {
        return { error: ["something went wrong"] };
    }

    revalidatePath("/manager/member/");
    redirect("/manager/member/");
}
