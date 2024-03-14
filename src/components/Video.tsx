"use client";

import YouTube from "react-youtube";

interface IVideoProps {
    code: string;
}

export default function Video({ code }: IVideoProps) {
    const getCurrentTime = (e: any) => {
        const duration = e.target.getDuration();
        const currentTime = e.target.getCurrentTime();
        if (currentTime / duration > 0.95) {
            alert("ended");
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
