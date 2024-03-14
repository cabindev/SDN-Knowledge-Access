import CourseCard from "./CourseCard";

interface ICourseCatalogProps {
    courses: any[];
}

export default function CourseCatalog({ courses }: ICourseCatalogProps) {
    if (courses.length == 0) return <p className="text-gray-500">ไม่มีสินค้า</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
            {courses.map((c, i) => (
                <CourseCard key={i} course={c} />
            ))}
        </div>
    );
}
