"use client";

import { useStore } from "@/store";

interface IAuthProps {
    member: any;
    children: React.ReactNode;
}

export default function Auth({ member, children }: IAuthProps) {
    useStore.setState({ member });

    return children;
}
