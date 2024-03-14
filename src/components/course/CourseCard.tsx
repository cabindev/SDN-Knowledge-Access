import { CheckBadgeIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ICourseCardProps {
    course: any;
    isManager?: boolean;
}

export default function CourseCard({ course, isManager = false }: ICourseCardProps) {
    const href = isManager ? "/manager/course/" + course.id : "/course/" + course.id + "?ep=1";

    return (
        <Link
            href={href}
            className="border shadow-lg rounded-lg overflow-hidden hover:translate-y-1 delay-100 transition"
        >
            <img src={course.image_link} className="w-full h-36 object-cover" />
            <div className="py-2 px-4">
                <h3 className="tracking-tight font-bold">{course.name}</h3>
                <p className="text-xs text-gray-500 truncate">{course.description}</p>

                <div className="mt-2 flex justify-between items-center">
                    <div className=" text-indigo-500">
                        <PlayCircleIcon className="w-4 h-4 inline mr-1" />
                        <span className="text-sm font-medium">
                            {course?.episodes.length ?? 0} บทเรียน
                        </span>
                    </div>

                    <div className="text-green-500">
                        <CheckBadgeIcon className="w-4 h-4 inline mr-1" />
                        <span className="text-sm font-medium">ผ่านเเล้ว</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
