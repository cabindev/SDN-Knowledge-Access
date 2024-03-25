import { getSession } from "@/utils/session";
import { redirect } from "next/navigation";

export default async function layout({ children }: React.PropsWithChildren) {
    const session = await getSession();
    if (session?.member.role != "manager") redirect("/");

    return children;
}
