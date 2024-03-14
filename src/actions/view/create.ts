"use server";

import prisma from "@/utils/prisma";

export async function createView(episode_id: string, member_id: string) {
    try {
        const exist = await prisma.episodeOnMember.findFirst({
            where: { episode_id, member_id },
        });
        if (exist) throw "already watched this episode";
        await prisma.episodeOnMember.create({ data: { episode_id, member_id } });
        return { message: "video was ended" };
    } catch (error) {
        return { error: error ? error : "something went wrong" };
    }
}
