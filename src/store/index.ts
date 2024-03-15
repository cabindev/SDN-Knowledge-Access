import { create } from "zustand";

interface StateStore {
    member: {
        id?: string;
        email?: string;
        password?: string;
        role?: string;
        watched?: any[];
        create_at?: string;
        update_at?: string;
    };
}

export const useStore = create<StateStore>(() => ({
    member: {},
}));
