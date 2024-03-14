"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function signOut() {
    cookies().set("session", "", { expires: new Date(0) });
    revalidatePath("/");
}
