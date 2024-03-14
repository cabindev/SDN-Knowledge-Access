import CourseCard from "./CourseCard";

interface ICourseCatalogProps {
    courses: any[];
    isManager?: boolean;
}

export default function CourseCatalog({ courses, isManager }: ICourseCatalogProps) {
    if (courses.length == 0) return <p className="text-gray-500">ไม่มีสินค้า</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
            {courses.map((c, i) => (
                <CourseCard isManager={isManager} key={i} course={c} />
            ))}
        </div>
    );
}
