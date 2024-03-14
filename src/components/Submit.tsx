"use client";

import { useFormStatus } from "react-dom";
import Loading from "./Loading";

interface ISubmitProps {
    text: string;
}

export default function Submit({ text }: ISubmitProps) {
    const { pending } = useFormStatus();

    return (
        <button
            className="py-2 px-4 border rounded-md font-medium bg-black text-white w-full flex justify-center"
            type="submit"
        >
            {pending ? <Loading /> : text}
        </button>
    );
}
