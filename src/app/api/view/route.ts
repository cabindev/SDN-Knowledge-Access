"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
    try {
        const { episode_id, member_id } = await req.json();
        //checking exist
        const exist = await prisma.episodeOnMember.findFirst({ where: { episode_id, member_id } });
        if (exist) return new Response("already watched this video", { status: 400 });

        //create data
        await prisma.episodeOnMember.create({ data: { episode_id, member_id } });

        // revalidate data
        const referer = req.headers.get("referer");
        if (referer) {
            const url = new URL(referer);
            revalidatePath(url.pathname + url.search);
        }
        return new Response("the video was ended", { status: 200 });
    } catch (error) {
        return new Response("somthing went wrong", { status: 400 });
    }
}
