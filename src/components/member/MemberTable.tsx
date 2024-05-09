import MemberRow from "./MemberRow";

interface IMemberTableProps {
    members: any[];
    episodesLength?: number;
}

export default function MemberTable({ members, episodesLength }: IMemberTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full rounded-xl overflow-hidden">
                <thead className="bg-gray-200">
                    <tr>
                        <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            #
                        </th>
                        <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            อีเมล
                        </th>
                        <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            ประเภท
                        </th>
                        <th scope="col" className="text-sm font-medium px-6 py-4 text-center">
                            จบหลักสูตร
                        </th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {members.map((m, i) => {
                        const watched_length = m.watched?.map((w: any) => w.episode_id).length;
                        const isChecked = watched_length === episodesLength;

                        return <MemberRow key={i} member={m} checked={isChecked} />;
                    })}
                </tbody>
            </table>
        </div>
    );
}
