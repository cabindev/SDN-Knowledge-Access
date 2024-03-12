import prisma from "@/utils/prisma";

export default function page() {
    async function createCourse(formData: FormData) {
        "use server";

        const rawFormData = {
            name: formData.get("name") as string,
            image_link: formData.get("image_link") as string,
        };

        await prisma.course.create({ data: rawFormData });
    }

    return (
        <form action={createCourse}>
            <input type="text" name="name" />
            <input type="text" name="image_link" />
            <button>submit</button>
        </form>
    );
}
