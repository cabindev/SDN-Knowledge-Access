import prisma from "@/utils/prisma";
import Wrapper from "@/components/Wrapper";
import CategoryCatalog from "@/components/category/CategoryCatalog";
import CategoryCreate from "@/components/category/CategoryCreate";

export default async function page() {
    const categories = await prisma.category.findMany();

    return (
        <Wrapper className="max-w-lg">
            <CategoryCreate />
            {categories.length != 0 && <CategoryCatalog isManager={true} categories={categories} />}
        </Wrapper>
    );
}
