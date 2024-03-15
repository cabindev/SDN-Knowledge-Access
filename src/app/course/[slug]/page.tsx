import Video from "@/components/Video";
import Wrapper from "@/components/Wrapper";
import EpisodeCatalog from "@/components/episode/EpisodeCatalog";
import { getMember, getSession } from "@/utils/auth";
import prisma from "@/utils/prisma";
import { notFound } from "next/navigation";

interface IPageProps {
    params: { slug: string };
    searchParams: { ep: string };
}

export default async function page({ params: { slug }, searchParams: { ep } }: IPageProps) {
    const course = await prisma.course.findUnique({
        where: { id: slug },
    });
    if (!course) notFound();

    const episode = await prisma.episode.findFirst({
        where: { course_id: course.id, order: parseInt(ep) },
    });
    if (!episode) notFound();

    const episodes = await prisma.episode.findMany({
        where: { course_id: course.id },
        orderBy: { order: "asc" },
    });

    const code = episode.youtube_link.split("https://youtu.be/")[1];

    const member = await getMember();

    return (
        <Wrapper>
            <div className="grid grid-cols-3 gap-4 items-start">
                <div className="col-span-3 md:col-span-2 gap-4">
                    <Video code={code} episode_id={episode.id} member_id={member?.id} />
                </div>
                <div className="col-span-3 md:col-span-1">
                    <EpisodeCatalog episode={episodes} />
                </div>
            </div>
        </Wrapper>
    );
}
