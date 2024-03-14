import { createCourse } from "@/actions/course/create";
import Form from "../Form";
import Jumbotron from "../Jumbotron";
import Input from "../Input";

interface ICourseCreateProps {
    categories: any[];
}

export default function CourseCreate({ categories }: ICourseCreateProps) {
    return (
        <Form action={createCourse}>
            <Jumbotron primary="สร้างคอร์ส" secondary="กรอกข้อมูลเพื่อสร้างคอร์ส" />
            <Input type="text" name="name" placeholder="name" />
            <Input type="text" name="image_link" placeholder="image link" />

            <textarea
                rows={5}
                name="description"
                placeholder="description"
                className="py-2 px-4 border rounded-md w-full outline-none"
            />

            <select
                name="category_id"
                className="py-2 px-4 border rounded-md outline-none appearance-none w-full"
            >
                {categories.map((c, i) => (
                    <option key={i} value={c.id}>
                        {c.name}
                    </option>
                ))}
            </select>
        </Form>
    );
}
