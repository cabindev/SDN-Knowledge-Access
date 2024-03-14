"use client";

import { FormState } from "@/types";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import Errors from "./Errors";
import Submit from "./Submit";

interface IFormProps {
    action: (prevState: FormState, formData: FormData) => Promise<FormState>;
    children: React.ReactNode;
}

export default function Form({ children, action }: IFormProps) {
    const [formState, formAction] = useFormState(action, { error: null });
    const ref = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        if (!formState?.error) {
            ref.current?.reset();
        }
    }, [formState]);

    return (
        <form
            ref={ref}
            action={formAction}
            className="flex flex-col justify-center items-center gap-2"
        >
            {children}
            <Submit text="ตกลง" />
            {formState?.error && <Errors errors={formState.error} />}
        </form>
    );
}
