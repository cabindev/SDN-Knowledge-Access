import { createCategory } from "@/actions/category/create";
import Form from "../Form";
import Jumbotron from "../Jumbotron";
import Input from "../Input";

export default function CategoryCreate() {
    return (
        <Form action={createCategory}>
            <Jumbotron primary="สร้างหมวดหมู่" secondary="กรอกข้อมูลเพื่อสร้างหมวดหมู่" />
            <Input type="text" name="name" placeholder="name" />
        </Form>
    );
}
