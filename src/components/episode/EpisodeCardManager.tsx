import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface IEpisodeCardManagerProps {
    episode: any;
}

export default function EpisodeCardManager({ episode }: IEpisodeCardManagerProps) {
    return (
        <div className="grid grid-cols-4">
            <div className="flex justify-center items-center">{episode.order}</div>
            <div className="col-span-2 py-4">
                <h4 className="font-medium">{episode.name}</h4>
                <p className="truncate text-[#6f6f6f] text-sm">{episode.youtube_link}</p>
            </div>
            <div className="flex justify-center items-center bg-gray-100">
                <Link href={"/manager/episode/" + episode.id}>
                    <PencilIcon className="w-5 h-5 text-green-500" />
                </Link>
            </div>
        </div>
    );
}
