"use client";

import { useTransition } from "react";
import Loading from "../Loading";
import { deleteCategory } from "@/actions/category/delete";

interface ICategoryDeleteProps {
    id: string;
}

export default function CategoryDelete({ id }: ICategoryDeleteProps) {
    const [pending, start] = useTransition();

    return (
        <button
            type="button"
            onClick={() =>
                start(() => {
                    deleteCategory(id);
                })
            }
            className="py-2 px-4 border rounded-md font-medium bg-red-500 text-white w-full flex justify-center"
        >
            {pending ? <Loading /> : "ลบหมวดหมู่นี้"}
        </button>
    );
}
