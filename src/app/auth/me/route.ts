import { decrypt } from "@/utils/auth";
import prisma from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const session = request.cookies.get("session")?.value;

    if (!session) {
        return NextResponse.json({ message: "unauthorized" }, { status: 401 });
    }

    const parsed = await decrypt(session);
    const member = await prisma.member.findUnique({
        where: { id: parsed?.member.id },
        include: { watched: true },
    });

    if (member) {
        return NextResponse.json({ member }, { status: 200 });
    }

    return NextResponse.json({ message: "unauthorized" }, { status: 401 });
}
