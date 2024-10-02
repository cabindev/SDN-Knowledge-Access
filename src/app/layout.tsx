import "./globals.css";
import Header from "@/components/Header";
import { getSession } from "@/utils/session";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SDN Knowledge",
    description: "SDN Knowledge",
    icons: {
        icon: "/brand.svg",
    },
};

export default async function layout({ children }: { children: React.ReactNode }) {
    const session = await getSession();

    return (
        <html lang="th">
            <body>
                <Header session={session?.member} />
                {children}
            </body>
        </html>
    );
}