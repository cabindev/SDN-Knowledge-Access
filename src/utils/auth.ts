import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("24 hours from now")
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}

export async function getSession() {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    return await decrypt(session);
}

export async function getMember() {
    const session = await getSession();
    return session?.member || null;
}

export async function signSession(data: {}) {
    const expires = new Date(Date.now() + 60 * 60 * 24 * 1000);
    const session = await encrypt({ member: data, expires });
    cookies().set("session", session, { expires, httpOnly: true });
}

export async function cancelSession() {
    cookies().set("session", "", { expires: new Date(0) });
}
