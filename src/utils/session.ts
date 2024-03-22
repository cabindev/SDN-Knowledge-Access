import type { Role } from "@prisma/client";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

interface Session {
    id: string;
    role: Role;
}

export async function seal(payload: any): Promise<string> {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1 day")
        .sign(key);
}

export async function unseal(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
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
