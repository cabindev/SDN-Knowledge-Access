import { Session } from "@/types";
import { SignJWT, jwtVerify } from "jose";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import prisma from "./prisma";

const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

console.log(process.env.SECRET_KEY)
export async function seal(payload: any): Promise<string> {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1 day")
        .sign(key);
}

export async function unseal(input: string): Promise<any> {
    try {
        const { payload } = await jwtVerify(input, key, {
            algorithms: ["HS256"],
        });
        return payload;
    } catch (error) {
        console.error("Failed to verify JWT: ", error);
        throw error;
    }

}

export async function getSession(): Promise<{ member: Session } | null> {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    return await unseal(session);
}

export async function createSession(member: Session) {
    const expires = new Date(Date.now() + 60 * 60 * 24 * 1000);
    const session = await seal({ member, expires });
    cookies().set("session", session, { expires, httpOnly: true });
}

export async function clearSession() {
    cookies().set("session", "", { expires: new Date(0) });
}

export async function getCurrent(request: NextRequest): Promise<Session | null> {
    try {
        const response = await fetch(request.nextUrl.origin + "/api/me", {
            headers: headers(),
            next: { revalidate: 3600 },
        });
        if (!response.ok) return null;
        const { data } = await response.json();
        return data;
    } catch (err) {
        return null;
    }
}


export async function updateSession(request: NextRequest) {
    const session = request.cookies.get("session")?.value;
    if (!session) return;

    const parsed = await unseal(session);
    if (parsed.expires) {
        const newMember = await getCurrent(request);
        if (!newMember) return;
        parsed.member = { id: newMember.id, role: newMember.role };
    }

    const response = NextResponse.next();
    response.cookies.set({
        name: "session",
        value: await seal(parsed),
        httpOnly: true,
        expires: new Date(parsed.expires),
    });

    return response;
}
