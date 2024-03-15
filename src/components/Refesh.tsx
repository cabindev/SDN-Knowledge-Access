"use client";

import { useEffect } from "react";

interface IRefreshProps {
    children: React.ReactNode;
}

export default function Refesh({ children }: IRefreshProps) {
    useEffect(() => {
        (async () => {
            await fetch("/api/me");
        })();
    });

    return <div>{children}</div>;
}
