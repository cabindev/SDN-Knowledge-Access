"use server";

import * as yup from "yup";
import { FormState } from "@/types";
import { validate } from "@/utils/validate";
import prisma from "@/utils/prisma";
import { redirect } from "next/navigation";
import { compare } from "bcrypt";
import { revalidatePath } from "next/cache";
import { createSession } from "@/utils/session";

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export async function signIn(prevState: FormState, formData: FormData): Promise<FormState> {
    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    const { errors } = await validate(schema, data);
    if (errors) return { error: errors };

    try {
        const member = await prisma.member.findUnique({
            where: { email: data.email.toLowerCase() },
            include: { watched: true },
        });
        if (!member) return { error: ["wrong email or password"] };

        const match = await compare(data.password, member.password);
        if (!match) return { error: ["wrong email or password"] };

        //set session
        await createSession({ id: member.id, role: member.role });
    } catch (err) {
        return { error: ["something went wrong"] };
    }

    revalidatePath("/");
    redirect("/");
}
