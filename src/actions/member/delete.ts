"use server";

import prisma from "@/utils/prisma";
import { getSession } from "@/utils/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteMember(id: string) {
    const session = await getSession();
    if (!session || session.member.role !== "manager") {
        return { error: ["forbidden"] };
    }

    try {
        await prisma.member.delete({ where: { id } });
    } catch (error) {
        return { error: ["something went wrong"] };
    }

    revalidatePath("/manager/member/");
    redirect("/manager/member/");
}
