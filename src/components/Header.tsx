"use client";

import { useState } from "react";
import Wrapper from "./Wrapper";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Session } from "@/types";
import SignOut from "./auth/SignOut";
import Image from "next/image";

export const routes = [
    { href: "/", label: "คอร์สทั้งหมด" },
    { href: "/manager/course", label: "จัดการคอร์ส", manager: true },
    { href: "/manager/category", label: "จัดการหมวดหมู่", manager: true },
    { href: "/manager/member", label: "จัดการผู้ใช้", manager: true },
    { href: "/auth/sign-up", label: "สมัครสมาชิก", auth: true },
    { href: "/auth/sign-in", label: "เข้าสู่ระบบ", auth: true },
];

interface IHeaderProps {
    raw?: any;
}

export default function Header({ raw }: IHeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const session = JSON.parse(raw);

    return (
        <header className="bg-transparent">
            <Wrapper>
                <div className="flex justify-between items-center">
                    <Image
                        width={100}
                        height={100}
                        src={"/brand.svg"}
                        alt={"brand"}
                        className="h-full w-10"
                    />
                    {/* <img className="w-10" src="/brand.svg" /> */}
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
                <div className={`${isOpen ? "md:hidden flex flex-col gap-2" : "hidden"} py-2`}>
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
            </Wrapper>
        </header>
    );
}
