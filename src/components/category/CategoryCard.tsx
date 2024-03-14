import Link from "next/link";

interface ICategoryCardProps {
    category: any;
}

export default function CategoryCard({ category }: ICategoryCardProps) {
    return (
        <Link
            href={"/category/" + category.id}
            className="px-4 py-2 border rounded-full text-center font-medium text-sm text-gray-600"
        >
            {category.name}
        </Link>
    );
}
