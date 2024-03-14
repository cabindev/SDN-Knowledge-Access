import CategoryCard from "./CategoryCard";

interface ICategoryCatalog {
    categories: any[];
    isManager?: boolean;
}

export default function CategoryCatalog({ categories, isManager }: ICategoryCatalog) {
    return (
        <div className="py-2 flex flex-wrap justify-start items-center gap-2">
            {categories.map((c, i) => (
                <CategoryCard isManager={isManager} key={i} category={c} />
            ))}
        </div>
    );
}
