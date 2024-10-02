import prisma from "@/utils/prisma";
import { unseal } from "@/utils/session";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const session = request.cookies.get("session")?.value;
    if (!session) return Response.json({ data: "unauthorized" }, { status: 401 });

    const { member } = await unseal(session);

    const newMember = await prisma.member.findUnique({ where: { id: member.id } });
    if (!newMember) return Response.json({ data: "unauthorized" }, { status: 401 });

    const { password, ...memberData } = newMember;

    return Response.json({ data: memberData }, { status: 200 });
}