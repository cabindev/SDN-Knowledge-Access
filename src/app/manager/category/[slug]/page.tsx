import Wrapper from "@/components/Wrapper";
import CategoryUpdate from "@/components/category/CategoryUpdate";
import prisma from "@/utils/prisma";

interface IPageProps {
    params: { slug: string };
}

export default async function page({ params: { slug } }: IPageProps) {
    const category = await prisma.category.findUnique({ where: { id: slug } });

    return (
        <Wrapper className="max-w-xl">
            <CategoryUpdate category={category} />
        </Wrapper>
    );
}
