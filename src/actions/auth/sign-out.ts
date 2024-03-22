"use server";

import { clearSession } from "@/utils/session";
import { redirect } from "next/navigation";

export async function signOut() {
    await clearSession();
    redirect("/");
}
