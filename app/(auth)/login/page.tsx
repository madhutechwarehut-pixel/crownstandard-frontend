import RoleToggle, { type UserType } from "@/components/auth/RoleToggle";
import { ShieldCheck, Star, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";

export default async function LoginPage({
    searchParams,
}: {
    searchParams: Promise<Record<string, string | string[]>>;
}) {
    const params = await searchParams;
    const raw = Array.isArray(params?.type) ? params.type[0] : params?.type;

    const type: UserType =
        raw === "provider" || raw === "customer" ? (raw as UserType) : "customer";



    return (
        <>
            {/* LEFT: marketing block */}
            <section className="flex-col justify-center hidden md:flex">
                <div className="max-w-md">
                    {/* brand */}
                    <div className="flex items-center gap-3 mb-6">
                        <Image
                            src="/logo.png"
                            alt="Crown Standard"
                            width={40}
                            height={40}
                        />
                        <div className="leading-tight">
                            <p className="font-semibold">Crown Standard</p>
                            <p className="text-sm text-[#6B7280]">Cleaning Co.</p>
                        </div>
                    </div>

                    <h1 className="text-3xl xl:text-4xl font-bold leading-snug text-[#1F2937]">
                        Professional Cleaning <br className="hidden lg:block" /> Made Simple
                    </h1>
                    <p className="mt-3 text-sm text-[#6B7280]">
                        Connect with trusted cleaning professionals or grow your cleaning
                        business. Experience the gold standard in cleaning services.
                    </p>

                    <ul className="mt-8 space-y-5">
                        <li className="flex items-start gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#F0E2C9] text-[#B8892D]">
                                <ShieldCheck className="w-5 h-5" />
                            </span>
                            <div>
                                <p className="font-medium">Trusted &amp; Verified</p>
                                <p className="text-sm text-[#6B7280]">
                                    All service providers are background checked
                                </p>
                            </div>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#F0E2C9] text-[#B8892D]">
                                <Star className="w-5 h-5" />
                            </span>
                            <div>
                                <p className="font-medium">Top Rated</p>
                                <p className="text-sm text-[#6B7280]">
                                    4.8+ average rating from satisfied customers
                                </p>
                            </div>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#F0E2C9] text-[#B8892D]">
                                <Users className="w-5 h-5" />
                            </span>
                            <div>
                                <p className="font-medium">Growing Community</p>
                                <p className="text-sm text-[#6B7280]">
                                    Join thousands of happy customers and providers
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* RIGHT: form card */}
            <section className="relative">
                <div className="relative rounded-2xl bg-white shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-[#F3F4F6] p-5 sm:p-6 lg:p-7">
                    <header className="mb-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937]">
                            Welcome Back
                        </h2>
                        <p className="mt-1 text-sm text-[#6B7280]">
                            Sign In to access your cleaning dashboard
                        </p>
                    </header>

                    {/* Role selector */}
                    <RoleToggle value={type} />

                    {/* Form */}
                    <form className="mt-4 space-y-4" action={"/api/login"} method="post">
                        <input type="hidden" name="type" value={type} />
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            aria-label="Email Address"
                            icon={
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 6h16v12H4z" stroke="#9CA3AF" />
                                    <path d="m4 7 8 6 8-6" stroke="#9CA3AF" />
                                </svg>
                            }
                        />
                        <Input
                            name="password"
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                            autoComplete="current-password"
                            icon={
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <rect x="3" y="10" width="18" height="11" rx="2" stroke="#9CA3AF" />
                                    <path
                                        d="M8 10V7a4 4 0 1 1 8 0v3"
                                        stroke="#9CA3AF"
                                    />
                                </svg>
                            }
                        />

                        <Button type="submit" variant="gold" full className="rounded-full">
                            Sign In
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#E5E7EB]" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white px-2 text-xs uppercase text-[#9CA3AF]">
                                Or
                            </span>
                        </div>
                    </div>

                    {/* Google */}
                    <Button type="button" variant="dark" full className="gap-2">
                        <svg width="18" height="18" viewBox="0 0 533.5 544.3" aria-hidden>
                            <path
                                fill="#4285F4"
                                d="M533.5 278.4c0-18.6-1.7-37.1-5.3-55H272v104h146.9c-6.3 34-25.3 63-54 82.3v68h87.4c51.2-47.2 81.2-116.8 81.2-199.3Z"
                            />
                            <path
                                fill="#34A853"
                                d="M272 544.3c73.5 0 135.2-24.3 180.2-65.9l-87.4-68c-24.2 16.3-55.2 26-92.8 26-71.2 0-131.6-47.9-153.2-112.2H28.2v70.5C72.7 487.4 166.6 544.3 272 544.3Z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M118.8 324.2c-10-29.5-10-61.5 0-91l.1-70.5H28.2C10.2 203.1 0 236.1 0 272s10.2 68.9 28.2 109.3l90.6-57.1Z"
                            />
                            <path
                                fill="#EA4335"
                                d="M272 106.7c39.9-.6 78.3 14.1 107.7 41.5l80.1-80.1C407.2 24.7 345.5 0 272 0 166.6 0 72.7 56.9 28.2 162.2l90.7 70.5C140.4 154.9 200.8 106.7 272 106.7Z"
                            />
                        </svg>
                        Continue With Google
                    </Button>

                    {/* Links */}
                    <div className="mt-4 space-y-2 text-sm text-center">
                        <a href="/forgot-password" className="text-[#6B7280] hover:underline">
                            Forgot Password?
                        </a>
                        <p className="text-[#6B7280]">
                            Don’t have an account?{" "}
                            <a
                                href={`/register?type=${type}`}
                                className="font-medium text-[#0B0B0B] hover:underline"
                            >
                                Create One
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
