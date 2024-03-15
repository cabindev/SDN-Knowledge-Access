import Wrapper from "@/components/Wrapper";
import CategoryCatalog from "@/components/category/CategoryCatalog";
import CourseCatalog from "@/components/course/CourseCatalog";
import prisma from "@/utils/prisma";

export default async function page() {
    const courses = await prisma.course.findMany({ include: { episodes: true } });
    const categories = await prisma.category.findMany();

    return (
        <Wrapper>
            <CategoryCatalog categories={categories} />
            <CourseCatalog courses={courses} />
        </Wrapper>
    );
}
