import { updateSession } from "@/utils/auth";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    return await updateSession(request);
}
