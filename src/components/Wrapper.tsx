interface IWrapperProps {
    className?: string;
    children?: React.ReactNode;
}

export default function Wrapper({ className = "max-w-5xl", children }: IWrapperProps) {
    return <section className={`mx-auto px-4 ${className}`}>{children}</section>;
}
