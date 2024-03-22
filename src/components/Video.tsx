"use client";

import { watchVideo } from "@/actions/watch";
import YouTube from "react-youtube";

interface IVideoProps {
    code: string;
    episode_id: string;
}

export default function Video({ code, episode_id }: IVideoProps) {
    const getCurrentTime = async (e: any) => {
        const duration = e.target.getDuration();
        const currentTime = e.target.getCurrentTime();
        if (currentTime / duration > 0.9) {
            const { message } = await watchVideo(episode_id);
            alert(message);
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
