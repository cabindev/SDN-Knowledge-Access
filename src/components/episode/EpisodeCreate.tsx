import { createEpisode } from "@/actions/episode/create";
import Form from "../Form";
import Jumbotron from "../Jumbotron";
import Input from "../Input";

export default function EpisodeCreate() {
    return (
        <Form action={createEpisode}>
            <Jumbotron primary="สร้างตอน" secondary="กรอกข้อมูลเพื่อสร้างตอน" />
            <Input type="number" name="order" placeholder="order" />
            <Input type="text" name="name" placeholder="name" />
            <Input type="text" name="youtube_link" placeholder="youtube link" />
        </Form>
    );
}
