"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function createView(episode_id: string, member_id: string) {
    console.log("called");
    try {
        await prisma.episodeOnMember.create({ data: { episode_id, member_id } });
    } catch (error) {
        console.log(error);
        return { error: "something went wrong" };
    }

    revalidatePath("/");
}
