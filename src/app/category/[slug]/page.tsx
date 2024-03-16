import Wrapper from "@/components/Wrapper";
import CourseCatalog from "@/components/course/CourseCatalog";
import prisma from "@/utils/prisma";
import { getSession } from "@/utils/session";

interface IPageProps {
    params: { slug: string };
}

export default async function page({ params: { slug } }: IPageProps) {
    const courses = await prisma.course.findMany({
        where: { category_id: slug },
        include: { episodes: true },
    });

    const session = await getSession();

    const member = await prisma.member.findUnique({
        where: { id: session.id ?? "" },
        include: { watched: true },
    });

    return (
        <Wrapper>
            <CourseCatalog courses={courses} watched={member?.watched} />
        </Wrapper>
    );
}
