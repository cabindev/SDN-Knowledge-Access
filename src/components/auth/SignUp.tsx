import Form from "../Form";
import Jumbotron from "../Jumbotron";
import Input from "../Input";
import { signUp } from "@/actions/auth/sign-up";

export default function SignUp() {
    return (
        <Form action={signUp}>
            <Jumbotron primary="สมัครสมาชิก" secondary="กรอกข้อมูลเพื่อสมัครสมาชิก" />
            <Input type="email" name="email" placeholder="email" />
            <Input type="password" name="password" placeholder="password" />
        </Form>
    );
}
