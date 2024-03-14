"use client";

import { useState } from "react";
import Wrapper from "./Wrapper";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const routes = [
    { href: "/", label: "คอร์สทั้งหมด" },
    { href: "/manager/course", label: "จัดการคอร์ส" },
    { href: "/manager/category", label: "จัดการหมวดหมู่" },
    { href: "/", label: "เข้าสู่ระบบ" },
    { href: "/", label: "สมัครสมาชิก" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-transparent mb-4 border">
            <Wrapper>
                <div className="flex justify-between items-center">
                    <img className="w-10" src="/brand.svg" />
                    <div className="hidden md:flex justify-center items-center p-4 gap-6">
                        {routes.map((r, i) => (
                            <Link key={i} href={r.href} onClick={() => setIsOpen(!isOpen)}>
                                {r.label}
                            </Link>
                        ))}
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="p-4 md:hidden block">
                        {isOpen ? (
                            <XMarkIcon className="h-5 w-5" />
                        ) : (
                            <Bars2Icon className="h-5 w-5" />
                        )}
                    </button>
                </div>
                <div className={`${isOpen ? "md:hidden flex flex-col" : "hidden"}  divide-y py-2`}>
                    {routes.map((r, i) => (
                        <Link
                            key={i}
                            href={r.href}
                            onClick={() => setIsOpen(!isOpen)}
                            className="px-4 py-2 text-gray-700"
                        >
                            {r.label}
                        </Link>
                    ))}
                </div>
            </Wrapper>
        </header>
    );
}
