export default function Errors({ errors }: { errors: string[] }) {
    return (
        <div className="w-full rounded-md bg-red-50 p-4">
            <div className="text-sm text-red-700">
                <ul className="list-disc space-y-1 pl-5">
                    {errors.map((e, i) => (
                        <li key={i}>{e}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
