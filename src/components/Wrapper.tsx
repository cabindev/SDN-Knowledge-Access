interface IWrapperProps {
    className?: string;
    children?: React.ReactNode;
    fullWidth?: boolean;
}

export default function Wrapper({ className = "max-w-5xl", children, fullWidth = false }: IWrapperProps) {
    if (fullWidth) {
        return <div className="w-full">{children}</div>;
    }
    return <section className={`mx-auto px-4 ${className}`}>{children}</section>;
}