import Jumbotron from "@/components/Jumbotron";
import Wrapper from "@/components/Wrapper";
import MemberTable from "@/components/member/MemberTable";
import prisma from "@/utils/prisma";

export default async function page() {
    const members = await prisma.member.findMany({ include: { watched: true } });
    const episodes = await prisma.episode.count();

    return (
        <Wrapper>
            <Jumbotron primary="ผู้ใช้ทั้งหมด" secondary="จัดการผู้ใช้ทั้งหมด" />
            <MemberTable members={members} episodesLength={episodes} />
        </Wrapper>
    );
}
