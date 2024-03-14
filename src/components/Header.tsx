"use client";

import { useState } from "react";
import Wrapper from "./Wrapper";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Session } from "@/types";
import SignOut from "./auth/SignOut";

export const routes = [
    { href: "/", label: "คอร์สทั้งหมด" },
    { href: "/manager/course", label: "จัดการคอร์ส", manager: true },
    { href: "/manager/category", label: "จัดการหมวดหมู่", manager: true },
    { href: "/auth/sign-in", label: "เข้าสู่ระบบ", auth: true },
    { href: "/auth/sign-up", label: "สมัครสมาชิก", auth: true },
];

interface IHeaderProps {
    session?: Session;
}

export default function Header({ session }: IHeaderProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-transparent mb-4">
            <Wrapper>
                <div className="flex justify-between items-center">
                    <img className="w-10" src="/brand.svg" />
                    <div className="hidden md:flex justify-center items-center p-4 gap-6">
                        {routes
                            .filter((r) => !r.manager && !r.auth)
                            .map((r, i) => (
                                <Link
                                    key={i}
                                    href={r.href}
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="p-2 font-medium"
                                >
                                    {r.label}
                                </Link>
                            ))}

                        {session?.role === "manager" &&
                            routes
                                .filter((r) => r.manager)
                                .map((r, i) => (
                                    <Link
                                        key={i}
                                        href={r.href}
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="p-2 font-medium"
                                    >
                                        {r.label}
                                    </Link>
                                ))}

                        {!session?.id ? (
                            routes
                                .filter((r) => r.auth)
                                .map((r, i) => (
                                    <Link
                                        key={i}
                                        href={r.href}
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="p-2 font-medium"
                                    >
                                        {r.label}
                                    </Link>
                                ))
                        ) : (
                            <SignOut />
                        )}
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
                    {routes
                        .filter((r) => !r.manager && !r.auth)
                        .map((r, i) => (
                            <Link
                                key={i}
                                href={r.href}
                                onClick={() => setIsOpen(!isOpen)}
                                className="px-4 py-2 font-medium"
                            >
                                {r.label}
                            </Link>
                        ))}

                    {session?.role === "manager" &&
                        routes
                            .filter((r) => r.manager)
                            .map((r, i) => (
                                <Link
                                    key={i}
                                    href={r.href}
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="px-4 py-2 font-medium"
                                >
                                    {r.label}
                                </Link>
                            ))}

                    {!session?.id ? (
                        routes
                            .filter((r) => r.auth)
                            .map((r, i) => (
                                <Link
                                    key={i}
                                    href={r.href}
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="px-4 py-2 font-medium"
                                >
                                    {r.label}
                                </Link>
                            ))
                    ) : (
                        <SignOut />
                    )}
                </div>
            </Wrapper>
        </header>
    );
}
