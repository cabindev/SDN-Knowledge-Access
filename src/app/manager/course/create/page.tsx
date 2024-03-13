import Wrapper from "@/components/Wrapper";
import CourseCreate from "@/components/course/CourseCreate";
import prisma from "@/utils/prisma";

export default async function page() {
    const categories = await prisma.category.findMany();

    return (
        <Wrapper className="max-w-xl">
            <CourseCreate categories={categories} />
        </Wrapper>
    );
}
