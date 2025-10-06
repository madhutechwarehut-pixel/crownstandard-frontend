"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ChoosePlanPage() {
    const plans = [
        {
            name: "Basic",
            price: "9.99",
            description: [
                "Up to 5 bookings per month",
                "Basic customer support",
                "Standard cleaning services",
                "Email notifications",
            ],
            highlight: false,
        },
        {
            name: "Premium Plan",
            price: "19.99",
            description: [
                "Up to 15 bookings per month",
                "Priority customer support",
                "Premium cleaning services",
                "Loyalty points rewards",
                "Email notifications",
            ],
            highlight: true,
        },
        {
            name: "Enterprise",
            price: "49.99",
            description: [
                "Unlimited bookings",
                "Dedicated account manager",
                "Advanced analytics",
                "Custom integrations",
                "Priority support",
            ],
            highlight: false,
        },
    ];

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen px-6 py-20"
        >
            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="mb-2 text-4xl font-extrabold text-gray-800">Choose Your Plan</h1>
                <p className="mb-12 text-sm font-semibold text-gray-500 md:text-base">
                    Unlock premium features and get the most out of our service
                </p>
            </div>

            {/* Plans */}
            <div className="grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className={`relative flex flex-col justify-between p-10 rounded-xl border shadow-xl transition-all duration-300 ${plan.highlight
                                ? "bg-gradient-to-b from-gray-900 via-[#524A39] to-gray-900 text-white scale-110 border-transparent"
                                : "bg-gradient-to-b from-[#FDF8F2] to-[#F5E8CE] border-amber-200 text-gray-900"
                            }`}
                    >
                        <div>
                            <h3
                                className={`text-xl font-semibold mb-6 ${plan.highlight ? "text-white" : "text-gray-900"
                                    }`}
                            >
                                {plan.name}
                            </h3>

                            <div className="flex items-baseline mb-8">
                                <span className="text-4xl font-extrabold tracking-tight">
                                    ${plan.price}
                                </span>
                                <span
                                    className={`ml-1 text-sm font-medium ${plan.highlight ? "text-gray-300" : "text-gray-700"
                                        }`}
                                >
                                    /Month
                                </span>
                            </div>

                            <ul className="space-y-3 text-sm">
                                {plan.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle2
                                            className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? "text-amber-400" : "text-amber-600"
                                                }`}
                                        />
                                        <span
                                            className={`${plan.highlight ? "text-gray-100" : "text-gray-700"
                                                }`}
                                        >
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            className={`mt-10 w-full py-3 rounded-full font-semibold transition ${plan.highlight
                                    ? "bg-white text-gray-900 hover:bg-gray-200"
                                    : "bg-gray-900 text-white hover:bg-gray-800"
                                }`}
                        >
                            Get Started
                        </button>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-24 text-sm font-semibold text-center text-gray-500">
                <p>Sign in to subscribe to a plan and unlock premium features</p>
                <Link
                    href="/login?type=customer"
                    className="inline-block px-6 py-2 mt-4 font-medium text-white rounded-full bg-amber-600 hover:bg-amber-700"
                >
                    Sign In
                </Link>
            </div>
        </div>
    );
}
