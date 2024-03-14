import { SessionOptions } from "iron-session";

export interface FormState {
    error?: string[] | null;
}

export interface Session {
    id: string;
    email: string;
    password: string;
    role: string;
}

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY!,
    cookieName: "sdn_knowledge",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    },
};
