"use client";

import { useFormStatus } from "react-dom";

interface ISubmitProps {
    text: string;
}

export default function Submit({ text }: ISubmitProps) {
    const { pending } = useFormStatus();

    return (
        <button className="py-2 px-4 border rounded-md bg-black text-white w-full" type="submit">
            {pending ? "loading" : text}
        </button>
    );
}
