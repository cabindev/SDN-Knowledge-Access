import Link from "next/link";

interface ICategoryCardProps {
    category: any;
    isManager?: boolean;
}

export default function CategoryCard({ category, isManager = false }: ICategoryCardProps) {
    const href = isManager ? "/manager/category/" + category.id : "/category/" + category.id;

    return (
        <Link
            href={href}
            className="px-4 py-2 border rounded-full text-center font-medium text-sm text-gray-600"
        >
            {category.name}
        </Link>
    );
}
