import Wrapper from "@/components/Wrapper";
import EpisodeUpdate from "@/components/episode/EpisodeUpdate";
import prisma from "@/utils/prisma";
import { notFound } from "next/navigation";

interface IPageProps {
    params: { slug: string };
}

export default async function page({ params: { slug } }: IPageProps) {
    const episode = await prisma.episode.findUnique({ where: { id: slug } });
    if (!episode) notFound();

    return (
        <Wrapper className="max-w-xl">
            <EpisodeUpdate episode={episode} course_id={episode.course_id ?? ""} />
        </Wrapper>
    );
}
