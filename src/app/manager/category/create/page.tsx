import Wrapper from "@/components/Wrapper";
import CategoryCreate from "@/components/category/CategoryCreate";

export default function page() {
    return (
        <Wrapper className="max-w-xl">
            <CategoryCreate />
        </Wrapper>
    );
}
