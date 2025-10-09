import { Medal, Gift, Wallet, Award } from "lucide-react";

export default function MembershipCard() {
    return (
        <section className="flex flex-wrap items-center justify-center gap-5 px-10 py-10 text-white md:justify-between bg-brand-gold rounded-2xl">
            {/* Left Section */}
            <div className="flex flex-col items-start">
                <div className="flex items-start gap-4 mb-6">
                    {/* Icon container */}
                    <div className="flex items-center justify-center w-16 h-16 bg-white shadow-md rounded-xl">
                        <Medal className="w-8 h-8 text-[#C49A3C]" />
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold leading-tight">Gold Member</h3>
                        <p className="text-sm leading-snug opacity-90">
                            Earn points and unlock exclusive rewards
                        </p>
                    </div>
                </div>

                <button className="px-6 py-2 text-sm font-medium transition border rounded-full border-white/70 hover:bg-white/10">
                    850 Points
                </button>
            </div>

            {/* Right: stat "cards" */}
            <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
                {[
                    { label: "Total earned", value: "1500", Icon: Award },
                    { label: "Total Redeemed", value: "650", Icon: Gift },
                    { label: "Available Balance", value: "850", Icon: Wallet },
                ].map(({ label, value, Icon }, i) => (
                    <div
                        key={i}
                        className="
                            text-center rounded-xl
                            ring-1 ring-white/10
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]
                            px-8 py-6
                            flex flex-col items-center justify-center gap-4
                            min-w-[180px]
                            backdrop-blur-[2px]
                            "
                        style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                    >
                        <Icon className="w-10 h-10 mb-4 text-white opacity-90" aria-hidden="true" />
                        <div>
                        <p className="text-4xl font-bold leading-none text-white">{value}</p>
                        <p className="mt-3 text-sm text-white/90">{label}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
