"use server";

import { cancelSession } from "@/utils/auth";
import { revalidatePath } from "next/cache";

export async function signOut() {
    await cancelSession();
    revalidatePath("/");
}
