import "./globals.css";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Anuphan } from "next/font/google";
import Auth from "@/components/Auth";
import { getMember } from "@/utils/auth";
import prisma from "@/utils/prisma";

const nuphan = Anuphan({ subsets: ["thai"] });

export const metadata: Metadata = {
    title: "SDN Knowledge",
    description: "SDN Knowledge",
    icons: {
        icon: "/brand.svg",
    },
};

export default async function layout({ children }: { children: React.ReactNode }) {
    const member = await getMember();

    //create update auth function
    async function fetchMember(member: any) {
        "use server";

        if (!member) return {};

        const exist = await prisma.member.findUnique({
            where: { id: member.id },
            include: { watched: true },
        });
        if (!exist) return {};

        return exist;
    }

    const newMember = await fetchMember(member);

    return (
        <Auth member={newMember}>
            <html lang="en">
                <body className={nuphan.className}>
                    <Header session={JSON.parse(JSON.stringify(newMember))} />
                    {children}
                </body>
            </html>
        </Auth>
    );
}
