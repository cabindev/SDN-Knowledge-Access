"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteEpisode(id: string) {
    try {
        await prisma.episode.delete({ where: { id } });
    } catch (error) {
        return { error: ["something went wrong"] };
    }

    revalidatePath("/");
    redirect("/");
}
