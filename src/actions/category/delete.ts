"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteeCategory(id: string) {
    try {
        await prisma.category.delete({ where: { id } });
    } catch (error) {
        return { error: "something went wrong" };
    }

    revalidatePath("/");
    redirect("/");
}
