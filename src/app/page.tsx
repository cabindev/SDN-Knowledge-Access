import prisma from "@/utils/prisma";
import Link from "next/link";

export default async function page() {
    const courses = await prisma.course.findMany();

    return (
        <div>
            <h1>show all course</h1>
            <ul>
                {courses.map((c, i) => (
                    <li key={i}>
                        <Link href={"/course/" + c.id}>{c.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
