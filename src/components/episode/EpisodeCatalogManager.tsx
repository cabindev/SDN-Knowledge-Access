import EpisodeCardManager from "./EpisodeCardManager";

interface IEpisodeCatalogManagerProps {
    episodes: any[];
}

export default function EpisodeCatalogManager({ episodes }: IEpisodeCatalogManagerProps) {
    return (
        <div className="border rounded-xl divide-y">
            {episodes.map((e, i) => (
                <EpisodeCardManager key={i} episode={e} />
            ))}
        </div>
    );
}
