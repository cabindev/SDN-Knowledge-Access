import "./globals.css";
import Header from "@/components/Header";
import { getSession } from "@/utils/session";
import type { Metadata } from "next";
import { Anuphan } from "next/font/google";

const nuphan = Anuphan({ subsets: ["thai"] });

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
        <html lang="en">
            <body className={nuphan.className}>
                <Header session={session?.member} />
                {children}
            </body>
        </html>
    );
}
