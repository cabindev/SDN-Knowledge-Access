import EpisodeCard from "./EpisodeCard";

interface IEpisodeCatalogProps {
    episode: any[];
}

export default function EpisodeCatalog({ episode }: IEpisodeCatalogProps) {
    return (
        <div className="border flex flex-col rounded-lg justify-start items-center overflow-hidden divide-y">
            {episode.map((e, i) => (
                <EpisodeCard key={i} episode={e} />
            ))}
        </div>
    );
}
