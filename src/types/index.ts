import type { Role } from "@prisma/client";

export interface FormState {
    error?: string[] | null;
}

export interface Session {
    id: string;
    role: Role;
}
