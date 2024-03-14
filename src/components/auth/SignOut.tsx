"use client";

import { signOut } from "@/actions/auth/sign-out";
import { useTransition } from "react";
import Loading from "../Loading";

export default function SignOut() {
    const [pending, start] = useTransition();

    return (
        <button
            disabled={pending}
            onClick={() =>
                start(() => {
                    signOut();
                })
            }
            className="w-full md:w-32 p-2 rounded-full font-medium bg-black text-white flex justify-center"
        >
            {pending ? <Loading /> : "ออกจากระบบ"}
        </button>
    );
}
