"use client";

import EpisodeCard from "./EpisodeCard";

interface IEpisodeCatalogProps {
    episode: any[];
    watched?: any[];
}

export default function EpisodeCatalog({ episode, watched }: IEpisodeCatalogProps) {
    const watched_id = watched?.map((w) => w.episode_id);

    return (
        <div className="border flex flex-col rounded-lg justify-start items-center overflow-hidden divide-y">
            {episode.map((e, i) => (
                <EpisodeCard key={i} episode={e} isWatched={watched_id?.includes(e.id)} />
            ))}
        </div>
    );
}
