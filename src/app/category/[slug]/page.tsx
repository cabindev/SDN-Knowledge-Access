import { getSession } from "@/actions/auth/session";
import Wrapper from "@/components/Wrapper";
import CourseCatalog from "@/components/course/CourseCatalog";
import prisma from "@/utils/prisma";

interface IPageProps {
    params: { slug: string };
}

export default async function page({ params: { slug } }: IPageProps) {
    const courses = await prisma.course.findMany({
        where: { category_id: slug },
        include: { episodes: true },
    });

    const session = await getSession();

    return (
        <Wrapper>
            <CourseCatalog courses={courses} watched={session.watched} />
        </Wrapper>
    );
}
