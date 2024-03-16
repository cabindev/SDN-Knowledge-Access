import "./globals.css";
import Header from "@/components/Header";
import { getSession } from "@/utils/session";
import type { Metadata } from "next";
import { Anuphan } from "next/font/google";
import Refesh from "@/components/Refesh";

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
        <Refesh>
            <html lang="en">
                <body className={nuphan.className}>
                    <Header raw={JSON.stringify(session)} />
                    {children}
                </body>
            </html>
        </Refesh>
    );
}
