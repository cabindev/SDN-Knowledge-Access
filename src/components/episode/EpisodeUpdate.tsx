import { updateEpisode } from "@/actions/episode/update";
import Form from "../Form";
import Jumbotron from "../Jumbotron";
import Input from "../Input";

interface IEpisodeUpdateProps {
    episode: any;
    course_id: string;
}

export default function EpisodeUpdate({ episode, course_id }: IEpisodeUpdateProps) {
    return (
        <Form action={updateEpisode}>
            <Jumbotron primary="อัพเดทตอน" secondary="กรอกข้อมูลเพื่ออัพเดทตอน" />
            <Input type="hidden" name="id" defaultValue={episode.id} />
            <Input type="number" name="order" placeholder="order" defaultValue={episode.order} />
            <Input type="text" name="name" placeholder="name" defaultValue={episode.name} />
            <Input
                type="text"
                name="youtube_link"
                placeholder="youtube link"
                defaultValue={episode.youtube_link}
            />
            <Input type="hidden" name="course_id" defaultValue={course_id} />
        </Form>
    );
}
