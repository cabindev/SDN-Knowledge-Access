import CategoryCard from "./CategoryCard";

interface ICategoryCatalog {
    categories: any[];
}

export default function CategoryCatalog({ categories }: ICategoryCatalog) {
    return (
        <div className="py-2 flex flex-wrap justify-start items-center gap-2">
            {categories.map((c, i) => (
                <CategoryCard key={i} category={c} />
            ))}
        </div>
    );
}
