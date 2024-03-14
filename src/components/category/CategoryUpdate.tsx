import { updateCategory } from "@/actions/category/update";
import Form from "../Form";
import Jumbotron from "../Jumbotron";
import Input from "../Input";
import CategoryDelete from "./CategoryDelete";

interface ICategoryUpdate {
    category: any;
}

export default function CategoryUpdate({ category }: ICategoryUpdate) {
    return (
        <Form action={updateCategory}>
            <Jumbotron primary="อัพเดทหมวดหมู่" secondary="กรอกข้อมูลเพื่ออัพเดทหมวดหมู่" />
            <Input type="hidden" name="id" defaultValue={category.id} />
            <Input type="text" name="name" placeholder="name" defaultValue={category.name} />

            <CategoryDelete id={category.id} />
        </Form>
    );
}
