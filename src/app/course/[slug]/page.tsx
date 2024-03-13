import prisma from "@/utils/prisma";
import { notFound } from "next/navigation";

interface IPageProps {
    params: { slug: string };
}

export default async function page({ params: { slug } }: IPageProps) {
    const course = await prisma.course.findUnique({ where: { id: slug } });
    if (!course) notFound();

    const episodes = await prisma.episode.findMany({ where: { course_id: course.id } });

    return (
        <div>
            <h2>course</h2>
            <pre>{JSON.stringify(course, null, 2)}</pre>
            <h2>episodes</h2>
            <pre>{JSON.stringify(episodes, null, 2)}</pre>
        </div>
    );
}
