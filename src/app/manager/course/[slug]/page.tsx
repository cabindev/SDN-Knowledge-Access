import Wrapper from "@/components/Wrapper";
import CourseUpdate from "@/components/course/CourseUpdate";
import prisma from "@/utils/prisma";

interface IPageProps {
    params: { slug: string };
}

export default async function page({ params: { slug } }: IPageProps) {
    const course = await prisma.course.findUnique({ where: { id: slug } });
    const categories = await prisma.category.findMany();

    return (
        <Wrapper className="max-w-xl">
            <CourseUpdate course={course} categories={categories} />
        </Wrapper>
    );
}
