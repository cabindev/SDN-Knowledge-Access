"use server";

import { getSession } from "./session";
import { revalidatePath } from "next/cache";

export async function signOut() {
    const session = await getSession();
    session.destroy();
    revalidatePath("/");
}
