"use client";

import { useTransition } from "react";
import Loading from "../Loading";
import { deleteCourse } from "@/actions/course/delete";

interface ICourseDeleteProps {
    id: string;
}

export default function CourseDelete({ id }: ICourseDeleteProps) {
    const [pending, start] = useTransition();

    return (
        <button
            type="button"
            onClick={() =>
                start(() => {
                    deleteCourse(id);
                })
            }
            className="py-2 px-4 border rounded-md font-medium bg-red-500 text-white w-full flex justify-center"
        >
            {pending ? <Loading /> : "ลบคอร์สนี้"}
        </button>
    );
}
