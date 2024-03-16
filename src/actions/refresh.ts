"use server";

import prisma from "@/utils/prisma";
import { getSession } from "@/utils/session";

export const refresh = async () => {
    const session = await getSession();
    const member = await prisma.member.findUnique({ where: { id: session.id ?? "" } });
    if (member) {
        session.id = member.id;
        session.role = member.role;
        session.email = member.email;

        await session.save();
    }
};
