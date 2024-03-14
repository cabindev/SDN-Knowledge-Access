"use client";

import { createView } from "@/actions/view/create";
import YouTube from "react-youtube";

interface IVideoProps {
    code: string;
    episode_id: string;
    member_id: string;
}

export default function Video({ code, episode_id, member_id }: IVideoProps) {
    const getCurrentTime = (e: any) => {
        const duration = e.target.getDuration();
        const currentTime = e.target.getCurrentTime();
        if (currentTime / duration > 0.9) {
            createView(episode_id, member_id)
                .then((d) => alert(d.message))
                .catch((e) => alert(e.error));
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
