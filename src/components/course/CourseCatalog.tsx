"use client";

import CourseCard from "./CourseCard";

interface ICourseCatalogProps {
    courses: any[];
    isManager?: boolean;
    watched?: any[];
}

export default function CourseCatalog({ courses, isManager, watched }: ICourseCatalogProps) {
    if (courses.length == 0) return <p className="text-gray-500">ไม่มีสินค้า</p>;

    const isPassCheck = (id: string, episodes: any[]): boolean => {
        const watched_length = watched?.map((w) => w.course_id === id).length;
        const episodes_length = episodes.length;

        if (watched_length === episodes_length) {
            return true;
        }

        return false;
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
            {courses.map((c, i) => (
                <CourseCard
                    isManager={isManager}
                    isPass={isPassCheck(c.id, c.episodes)}
                    key={i}
                    course={c}
                />
            ))}
        </div>
    );
}
