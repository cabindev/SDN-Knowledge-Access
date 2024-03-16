import Form from "../Form";
import Jumbotron from "../Jumbotron";
import Input from "../Input";
import { updateMember } from "@/actions/member/update";
import MemberDelete from "./MemberDelete";

interface IMemberUpdateProps {
    member: any;
}

export default function MemberUpdate({ member }: IMemberUpdateProps) {
    return (
        <Form action={updateMember}>
            <Jumbotron primary="อัพเดทผู้ใช้" secondary="กรอกข้อมูลเพื่ออัพเดทผู้ใช้" />
            <Input type="hidden" name="id" defaultValue={member.id} />
            <Input type="email" name="email" placeholder="email" defaultValue={member.email} />

            <select
                name="role"
                defaultValue={member.role}
                className="py-2 px-4 border rounded-md outline-none appearance-none w-full"
            >
                {["normal", "manager"].map((c, i) => (
                    <option key={i} value={c}>
                        {c}
                    </option>
                ))}
            </select>

            <MemberDelete id={member.id} />
        </Form>
    );
}
