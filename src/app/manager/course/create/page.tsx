import { createCourse } from "@/actions/course/create";
import Form from "@/components/Form";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Wrapper from "@/components/Wrapper";

export default function page() {
    return (
        <Wrapper className="max-w-xl">
            <Form action={createCourse}>
                <Heading primary="สร้างคอร์ส" secondary="กรอกข้อมูลเพื่อสร้างคอร์ส" />
                <Input type="text" name="name" placeholder="name" />
                <Input type="text" name="image_link" placeholder="image link" />
            </Form>
        </Wrapper>
    );
}
