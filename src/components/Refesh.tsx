"use client";

import { refresh } from "@/actions/refresh";
import { useEffect } from "react";

interface IRefeshProps {
    children: React.ReactNode;
}

export default function Refesh({ children }: IRefeshProps) {
    useEffect(() => {
        refresh();
    }, []);

    return children;
}
