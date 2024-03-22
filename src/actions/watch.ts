"use server";

import prisma from "@/utils/prisma";
import { getSession } from "@/utils/session";
import { revalidatePath } from "next/cache";

export async function watchVideo(episode_id: string) {
    const session = await getSession();
    if (!session?.member) return { message: "unauthorized" };

    try {
        const exist = await prisma.episodeOnMember.findFirst({
            where: { episode_id, member_id: session.member.id },
        });
        if (exist) return { message: "already watched this video" };

        await prisma.episodeOnMember.create({
            data: {
                episode_id,
                member_id: session.member.id,
            },
        });

        revalidatePath("/");

        return { message: "the video was ended" };
    } catch (err) {
        return { message: "someting went wrong" };
    }
}
