"use client";

import { revalidatePath } from "next/cache";
import YouTube from "react-youtube";

interface IVideoProps {
    code: string;
    episode_id: string;
    member_id: string;
}

export default function Video({ code, episode_id, member_id }: IVideoProps) {
    const getCurrentTime = async (e: any) => {
        const duration = e.target.getDuration();
        const currentTime = e.target.getCurrentTime();
        if (currentTime / duration > 0.9) {
            const result = await fetch("/api/view/", {
                method: "POST",
                body: JSON.stringify({ episode_id, member_id }),
            });
            alert(await result.text());
        }
    };

    const opts = {
        height: "100%",
        width: "100%",
        playerVars: {
            controls: 0,
            rel: 0,
            disablekb: 1,
        },
    };

    return (
        <YouTube
            videoId={code}
            opts={opts}
            className=" aspect-video rounded-lg overflow-hidden"
            onStateChange={(e) => getCurrentTime(e)}
        />
    );
}
