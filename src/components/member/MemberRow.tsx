import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface IMemberRowProps {
    checked?: boolean;
    member: any;
}

export default function MemberRow({ member, checked }: IMemberRowProps) {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {member.id.split("-")[0].toUpperCase()}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {member.email}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {member.role}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex justify-center items-center">
                    {checked ? (
                        <CheckIcon className="w-5 h-5 text-green-500" />
                    ) : (
                        <XMarkIcon className="w-5 h-5 text-red-500" />
                    )}
                </div>
            </td>
            <td className=" px-6 py-4 whitespace-nowrap">
                <Link href={"/manager/member/" + member.id}>
                    <PencilIcon className="w-5 h-5 text-green-500" />
                </Link>
            </td>
        </tr>
    );
}
