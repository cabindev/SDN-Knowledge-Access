import Wrapper from "@/components/Wrapper";
import SignIn from "@/components/auth/SignIn";

export default function page() {
    return (
        <Wrapper className="max-w-xl">
            <SignIn />
        </Wrapper>
    );
}
