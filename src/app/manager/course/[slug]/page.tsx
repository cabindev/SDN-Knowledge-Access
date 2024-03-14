import Wrapper from "@/components/Wrapper";
import CourseUpdate from "@/components/course/CourseUpdate";
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

    return (
        <Wrapper>
            <div className="grid grid-cols-2 items-start gap-4">
                <CourseUpdate course={course} categories={categories} />
                <EpisodeCreate course_id={course.id} />
            </div>
        </Wrapper>
    );
}
