import "./globals.css";
import Header from "@/components/Header";
import { getSession } from "@/utils/session";
import type { Metadata } from "next";
import localFont from 'next/font/local';

const seppuriSemibold = localFont({
  src: "./fonts/seppuri-semibold-webfont.woff2",
  variable: "--font-seppuri-semibold",
  weight: "600",
  display: "swap",
});

const seppuriThin = localFont({
  src: "./fonts/seppuri-thin-webfont.woff",
  variable: "--font-seppuri-thin",
  weight: "100",
  display: "swap",
});

export const metadata: Metadata = {
    title: "SDN Knowledge",
    description: "SDN Knowledge",
    icons: {
        icon: "/favicon.ico",
    },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const session = await getSession();

    return (

            <body className={`${seppuriSemibold.variable} ${seppuriThin.variable} antialiased`}>
                <Header session={session?.member} />
                {children}
            </body>

    );
}