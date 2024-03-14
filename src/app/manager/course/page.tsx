import prisma from "@/utils/prisma";
import Jumbotron from "@/components/Jumbotron";
import Wrapper from "@/components/Wrapper";
import CourseCatalog from "@/components/course/CourseCatalog";

export default async function page() {
    const courses = await prisma.course.findMany({ include: { episodes: true } });

    return (
        <Wrapper>
            <Jumbotron primary="คอร์สทั้งหมด" secondary="จัดการคอร์สทั้งหมด" />
            <CourseCatalog isManager={true} courses={courses} />
        </Wrapper>
    );
}
