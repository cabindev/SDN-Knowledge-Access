"use server";

import * as yup from "yup";
import { hash } from "bcrypt";
import { FormState } from "@/types";
import { validate } from "@/utils/validate";
import prisma from "@/utils/prisma";
import { redirect } from "next/navigation";

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export async function signUp(prevState: FormState, formData: FormData): Promise<FormState> {
    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    const { errors } = await validate(schema, data);
    if (errors) return { error: errors };

    try {
        const member = await prisma.member.findUnique({
            where: { email: data.email.toLowerCase() },
        });

        if (member) {
            return { error: ["already have this email"] };
        }

        await prisma.member.create({
            data: {
                email: data.email.toLowerCase(),
                password: await hash(data.password, 10),
            },
        });
    } catch (err) {
        return { error: ["something went wrong"] };
    }

    redirect("/auth/sign-in");
}
