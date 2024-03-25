"use client";

import CourseCard from "./CourseCard";

interface ICourseCatalogProps {
    courses: any[];
    isManager?: boolean;
    watched?: any[];
}

export default function CourseCatalog({ courses, isManager, watched }: ICourseCatalogProps) {
    if (courses.length == 0) return <p className="text-gray-500">ไม่มีสินค้า</p>;

    const isPassCheck = (episodes: any[]): boolean => {
        const episodes_ids = episodes.map((e) => e.id);

        if (!watched) return false;

        const watched_ids = watched.map((w) => w.episode_id);

        for (let episode_id of episodes_ids) {
            if (!watched_ids.includes(episode_id)) {
                return false;
            }
        }

        return true;
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
            {courses.map((c, i) => (
                <CourseCard
                    isManager={isManager}
                    isPass={isPassCheck(c.episodes)}
                    key={i}
                    course={c}
                />
            ))}
        </div>
    );
}
