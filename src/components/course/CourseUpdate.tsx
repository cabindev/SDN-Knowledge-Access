import { updateCourse } from "@/actions/course/update";
import Form from "../Form";
import Jumbotron from "../Jumbotron";
import Input from "../Input";

interface ICourseUpdateProps {
    course: any;
    categories: any[];
}

export default function CourseUpdate({ course, categories }: ICourseUpdateProps) {
    return (
        <Form action={updateCourse}>
            <Jumbotron primary="อัพเดทคอร์ส" secondary="กรอกข้อมูลเพื่ออัพเดทคอร์ส" />
            <Input type="hidden" name="id" defaultValue={course.id} />
            <Input type="text" name="name" placeholder="name" defaultValue={course.name} />
            <Input
                type="text"
                name="image_link"
                placeholder="image link"
                defaultValue={course.image_link}
            />

            <textarea
                rows={5}
                name="description"
                placeholder="description"
                className="py-2 px-4 border rounded-md w-full"
                defaultValue={course.description}
            />

            <select
                name="category_id"
                defaultValue={course.category_id}
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
