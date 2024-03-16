import Wrapper from "@/components/Wrapper";
import CategoryCatalog from "@/components/category/CategoryCatalog";
import CourseCatalog from "@/components/course/CourseCatalog";
import prisma from "@/utils/prisma";
import { getSession } from "@/utils/session";

export default async function page() {
    const courses = await prisma.course.findMany({ include: { episodes: true } });
    const categories = await prisma.category.findMany();

    const session = await getSession();

    const member = await prisma.member.findUnique({
        where: { id: session.id ?? "" },
        include: { watched: true },
    });

    return (
        <Wrapper>
            <CategoryCatalog categories={categories} />
            <CourseCatalog courses={courses} watched={member?.watched} />
        </Wrapper>
    );
}
