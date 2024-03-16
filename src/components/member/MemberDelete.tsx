"use client";

import { useTransition } from "react";
import Loading from "../Loading";
import { deleteMember } from "@/actions/member/delete";

interface IMemberDeleteProps {
    id: string;
}

export default function MemberDelete({ id }: IMemberDeleteProps) {
    const [pending, start] = useTransition();

    return (
        <button
            type="button"
            onClick={() =>
                start(() => {
                    deleteMember(id);
                })
            }
            className="py-2 px-4 border rounded-md font-medium bg-red-500 text-white w-full flex justify-center"
        >
            {pending ? <Loading /> : "ลบผู้ใช้นี้"}
        </button>
    );
}
