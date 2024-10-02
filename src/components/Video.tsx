"use client";

import { watchVideo } from "@/actions/watch";
import YouTube, { YouTubeEvent, YouTubePlayer } from "react-youtube";
import { useCallback } from 'react';

interface IVideoProps {
  code: string;
  episode_id: string;
}

export default function Video({ code, episode_id }: IVideoProps) {
  const getCurrentTime = useCallback(async (e: YouTubeEvent) => {
    const player = e.target as YouTubePlayer;
    const duration = player.getDuration();
    const currentTime = player.getCurrentTime();
    if (currentTime / duration > 0.9) {
      const { message } = await watchVideo(episode_id);
      alert(message);
    }
  }, [episode_id]);


  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      controls: 1,
      rel: 0,
      disablekb: 1,
      modestbranding: 1,
      showinfo: 0
    },
  };

  return (
    <YouTube
      videoId={code}
      opts={opts}
      className="aspect-video rounded-lg overflow-hidden"
      onStateChange={getCurrentTime}
    />
  );
}