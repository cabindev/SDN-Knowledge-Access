import CourseCard from "./CourseCard";

interface ICourseCatalogProps {
    courses: any[];
}

export default function CourseCatalog({ courses }: ICourseCatalogProps) {
    if (courses.length == 0) return <p className="text-gray-500">ไม่มีสินค้า</p>;

    return (
        <div className="grid grid-cols-4 gap-4">
            {courses.map((c, i) => (
                <CourseCard key={i} course={c} />
            ))}
        </div>
    );
}
