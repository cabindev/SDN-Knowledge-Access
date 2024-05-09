import Wrapper from "@/components/Wrapper";
import CategoryCatalog from "@/components/category/CategoryCatalog";
import CourseCatalog from "@/components/course/CourseCatalog";
import prisma from "@/utils/prisma";
import { getSession } from "@/utils/session";
import Image from "next/image";

export default async function page() {
    const courses = await prisma.course.findMany({ include: { episodes: true } });
    const categories = await prisma.category.findMany();

    const session = await getSession();

    // ตรวจสอบว่า session และ session.member มีข้อมูลที่ถูกต้อง
    let member = null;
    if (session && session.member && session.member.id) {
        member = await prisma.member.findUnique({
            where: { id: session.member.id },
            include: { watched: true },
        });
    }

    return (
        <Wrapper>
            <img src="./images/sdn course.svg" alt="course-logo"></img>
            <CategoryCatalog categories={categories} />
            <CourseCatalog courses={courses} watched={member?.watched} />
        </Wrapper>
    );
}
