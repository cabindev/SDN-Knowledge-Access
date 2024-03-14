import Wrapper from "@/components/Wrapper";
import CourseUpdate from "@/components/course/CourseUpdate";
import EpisodeCatalogManager from "@/components/episode/EpisodeCatalogManager";
import EpisodeCreate from "@/components/episode/EpisodeCreate";
import prisma from "@/utils/prisma";
import { notFound } from "next/navigation";

interface IPageProps {
    params: { slug: string };
}

export default async function page({ params: { slug } }: IPageProps) {
    const course = await prisma.course.findUnique({ where: { id: slug } });
    if (!course) notFound();
    const categories = await prisma.category.findMany();
    const episodes = await prisma.episode.findMany({ where: { course_id: course.id } });

    return (
        <Wrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <CourseUpdate course={course} categories={categories} />
                <div className="space-y-4">
                    <EpisodeCreate course_id={course.id} />
                    {episodes.length != 0 && <EpisodeCatalogManager episodes={episodes} />}
                </div>
            </div>
        </Wrapper>
    );
}
