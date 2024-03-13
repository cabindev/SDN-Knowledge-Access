import { updateCourse } from "@/actions/course/update";
import Form from "@/components/Form";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Wrapper from "@/components/Wrapper";

export default function page() {
    return (
        <Wrapper className="max-w-xl">
            <Form action={updateCourse}>
                <Heading primary="อัพเดทคอร์ส" secondary="กรอกข้อมูลเพื่ออัพเดทคอร์ส" />
                <Input type="hidden" name="id" defaultValue="id" />
                <Input type="text" name="name" placeholder="name" />
                <Input type="text" name="image_link" placeholder="image link" />
            </Form>
        </Wrapper>
    );
}
