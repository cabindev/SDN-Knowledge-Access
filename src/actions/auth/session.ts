"use server";

import { Session, sessionOptions } from "@/types";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export const getSession = async () => {
    const session = await getIronSession<Session>(cookies(), sessionOptions);
    return session;
};
