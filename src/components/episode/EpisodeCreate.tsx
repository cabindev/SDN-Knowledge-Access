import { createEpisode } from "@/actions/episode/create";
import Form from "../Form";
import Jumbotron from "../Jumbotron";
import Input from "../Input";

interface IEpisodeProps {
    course_id: string;
}

export default function EpisodeCreate({ course_id }: IEpisodeProps) {
    return (
        <Form action={createEpisode}>
            <Jumbotron primary="สร้างตอน" secondary="กรอกข้อมูลเพื่อสร้างตอน" />
            <Input type="number" name="order" placeholder="order" />
            <Input type="text" name="name" placeholder="name" />
            <Input type="text" name="youtube_link" placeholder="youtube link" />
            <Input type="hidden" name="course_id" defaultValue={course_id} />
        </Form>
    );
}
