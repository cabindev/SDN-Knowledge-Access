import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface IEpisodeCardProps {
    episode: any;
    isWatched?: boolean;
}

export default function EpisodeCard({ episode, isWatched = false }: IEpisodeCardProps) {
    return (
        <Link
            href={"/course/" + episode.course_id + "?ep=" + episode.order}
            className={`w-full py-4 px-6 grid grid-cols-5 gap-2 border-l-4 ${
                isWatched ? "hover:border-l-green-500" : "hover:border-l-muted-foreground"
            }  transition`}
        >
            <p className="col-span-4">{episode.name}</p>
            <div className="flex justify-center items-center">
                {isWatched ? (
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                ) : (
                    <XCircleIcon className="w-5 h-5 text-gray-500" />
                )}
            </div>
        </Link>
    );
}
