import Form from "../Form";
import Jumbotron from "../Jumbotron";
import Input from "../Input";
import { signIn } from "@/actions/auth/sign-in";

export default function SignIn() {
    return (
        <Form action={signIn}>
            <Jumbotron primary="เข้าสู่ระบบ" secondary="กรอกข้อมูลเพื่อเข้าสู่ระบบ" />
            <Input type="email" name="email" placeholder="email" />
            <Input type="password" name="password" placeholder="password" />
        </Form>
    );
}
