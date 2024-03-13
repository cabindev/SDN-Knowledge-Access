interface IWrapperProps {
    className?: string;
    children?: React.ReactNode;
}

export default function Wrapper({ className, children }: IWrapperProps) {
    return <section className={"mx-auto sm:px-6 lg:px-8 " + className}>{children}</section>;
}
