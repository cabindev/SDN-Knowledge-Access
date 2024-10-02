import "./globals.css";
import Header from "@/components/Header";
import { getSession } from "@/utils/session";
import type { Metadata } from "next";
import localFont from 'next/font/local';

// กำหนดฟอนต์ Seppuri
const seppuri = localFont({
  src: [
    {
      path: '../../public/fonts/seppuri-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/seppuri-medium-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/seppuri-bold-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
    // เพิ่มแบบอื่นๆ ตามที่คุณมี
  ],
  variable: '--font-seppuri',
});

export const metadata: Metadata = {
    title: "SDN Knowledge",
    description: "SDN Knowledge",
    icons: {
        icon: "/brand.svg",
    },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const session = await getSession();

    return (
        <html lang="th" className={seppuri.variable}>
            <body className="font-sans">
                <Header session={session?.member} />
                {children}
            </body>
        </html>
    );
}