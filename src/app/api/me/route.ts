import { getSession } from "@/actions/auth/session";
import prisma from "@/utils/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const session = await getSession();
        const renew = await prisma.member.findUnique({
            where: { id: session.id },
            // include: { watched: true },
        });

        if (!renew) {
            return new Response("unauthorized", { status: 400 });
        }

        session.id = renew.id;
        session.email = renew.email;
        session.password = renew.password;
        session.role = renew.role;
        // session.watched = renew.watched;

        await session.save();
        return new Response("authorized", { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("unauthorized", { status: 400 });
    }
}
