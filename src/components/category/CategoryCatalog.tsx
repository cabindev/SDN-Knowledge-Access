import CategoryCard from "./CategoryCard";

interface ICategoryCatalog {
    categories: any[];
    isManager?: boolean;
}

export default function CategoryCatalog({ categories, isManager }: ICategoryCatalog) {
    if (categories.length == 0) return <p className="text-gray-500">ไม่มีหมวดหมู่</p>;

    return (
        <div className="py-2 flex flex-wrap justify-start items-center gap-2">
            {categories.map((c, i) => (
                <CategoryCard isManager={isManager} key={i} category={c} />
            ))}
        </div>
    );
}
