interface IJumbotronProps {
    primary: string;
    secondary?: string;
}

export default function Jumbotron({ primary, secondary }: IJumbotronProps) {
    return (
        <div className="mb-2 w-full">
            <h2 className="text-2xl font-bold tracking-tight">{primary}</h2>
            {secondary && <p className=" text-sm text-gray-500">{secondary}</p>}
        </div>
    );
}
