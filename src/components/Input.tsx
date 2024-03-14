interface IInputProps {
    type: "text" | "number" | "email" | "password" | "hidden";
    name?: string;
    placeholder?: string;
    defaultValue?: string;
}

export default function Input({ type, name, placeholder, defaultValue }: IInputProps) {
    return (
        <input
            type={type}
            name={name}
            className="py-2 px-4 border rounded-md outline-none w-full"
            placeholder={placeholder}
            defaultValue={defaultValue}
        />
    );
}
