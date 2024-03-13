import Wrapper from "@/components/Wrapper";
import EpisodeCreate from "@/components/episode/EpisodeCreate";

export default function page() {
    return (
        <Wrapper className="max-w-xl">
            <EpisodeCreate />
        </Wrapper>
    );
}
