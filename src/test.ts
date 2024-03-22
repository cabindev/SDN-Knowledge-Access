import { NextRequest, NextResponse } from "next/server";
import { getSession, updateSession } from "./utils/session";

export async function middleware(request: NextRequest) {
    // const session = await getSession();
    // const { pathname } = request.nextUrl;

    // //check unneed auth pages
    // const isUnNeedAuthPages = pathname.startsWith("/auth");
    // if (isUnNeedAuthPages && session?.member) {
    //     return NextResponse.redirect(new URL("/", request.url));
    // }

    // //check need auth pages
    // const isNeedAuthPages = pathname.startsWith("/course");
    // if (isNeedAuthPages && !session?.member) {
    //     return NextResponse.redirect(new URL("/auth/sign-in", request.url));
    // }

    // const isManagerPages = pathname.startsWith("/manager");
    // if (isManagerPages && session?.member.role !== "manager") {
    //     return NextResponse.redirect(new URL("/", request.url));
    // }

    return await updateSession(request);
}
