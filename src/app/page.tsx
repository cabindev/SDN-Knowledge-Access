import prisma from "@/utils/prisma";

export default async function page() {
    const courses = await prisma.course.findMany();

    return (
        <div>
            <h1>show all course</h1>
            <ul>
                {courses.map((c, i) => (
                    <li key={i}>{c.name}</li>
                ))}
            </ul>
        </div>
    );
}
