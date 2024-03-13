import prisma from "@/utils/prisma";

interface IPageProps {
    params: { slug: string };
}

export default async function page({ params: { slug } }: IPageProps) {
    const courses = await prisma.course.findMany({ where: { category_id: slug } });

    return (
        <div>
            <h2>courses</h2>
            <pre>{JSON.stringify(courses, null, 2)}</pre>
        </div>
    );
}
