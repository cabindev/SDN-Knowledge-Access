import prisma from "@/utils/prisma";
import Jumbotron from "@/components/Jumbotron";
import Wrapper from "@/components/Wrapper";
import CourseCatalog from "@/components/course/CourseCatalog";
import Link from "next/link";
import { getSession } from "@/utils/session";

export default async function page() {
    const courses = await prisma.course.findMany({ include: { episodes: true } });

    const session = await getSession();

    const member = await prisma.member.findUnique({
        where: { id: session?.member.id ?? "" },
        include: { watched: true },
    });

    return (
        <Wrapper>
            <Jumbotron primary="คอร์สทั้งหมด" secondary="จัดการคอร์สทั้งหมด" />
            <Link href="/manager/course/create">
                <button className="py-2 px-4 font-medium rounded-lg bg-black text-white mb-4">
                    สร้างคอร์ส
                </button>
            </Link>
            <CourseCatalog isManager={true} courses={courses} watched={member?.watched} />
        </Wrapper>
    );
}
