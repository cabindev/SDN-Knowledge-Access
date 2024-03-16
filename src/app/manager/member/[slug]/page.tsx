import Wrapper from "@/components/Wrapper";
import MemberUpdate from "@/components/member/MemberUpdate";
import prisma from "@/utils/prisma";
import { notFound } from "next/navigation";

interface IPageProps {
    params: { slug: string };
}

export default async function page({ params: { slug } }: IPageProps) {
    const member = await prisma.member.findUnique({ where: { id: slug } });
    if (!member) notFound();

    return (
        <Wrapper className="max-w-xl">
            <MemberUpdate member={member} />
        </Wrapper>
    );
}
