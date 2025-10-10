import { type UserType } from "@/components/auth/RoleToggle";
import LoginClient from "@/components/auth/LoginClient";

export default async function LoginPage({
    searchParams,
}: {
    searchParams: Promise<Record<string, string | string[]>>;
}) {
    const params = await searchParams;
    const raw = Array.isArray(params?.type) ? params.type[0] : params?.type;

    const type: UserType =
        raw === "provider" || raw === "customer" ? (raw as UserType) : "customer";

    const forgot = params["forgot-password"] !== undefined; 

    return <LoginClient type={type} showForgot={forgot} />;
}
