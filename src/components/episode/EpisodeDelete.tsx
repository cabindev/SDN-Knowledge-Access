"use client";

import { deleteEpisode } from "@/actions/episode/delete";
import { useTransition } from "react";
import Loading from "../Loading";

interface IEpisodeDeleteProps {
    id: string;
}

export default function EpisodeDelete({ id }: IEpisodeDeleteProps) {
    const [pending, start] = useTransition();

    return (
        <button
            type="button"
            onClick={() =>
                start(() => {
                    deleteEpisode(id);
                })
            }
            className="py-2 px-4 border rounded-md font-medium bg-red-500 text-white w-full flex justify-center"
        >
            {pending ? <Loading /> : "ลบตอนนี้"}
        </button>
    );
}
