"use client";

import { useState } from "react";
import Image from "next/image";
import { Pencil, Plus } from "lucide-react";

interface ProfilePageProps {
    role: "provider" | "customer";
}

export default function ProfilePage({ role }: ProfilePageProps) {
    const [editable, setEditable] = useState(false);

    const isProvider = role === "provider";

    return (
        <main className="relative min-h-screen bg-white">
            <div className="relative z-10 max-w-6xl px-6 py-8 mx-auto lg:px-8">
                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">
                        {isProvider ? "Provider Profile" : "Customer Profile"}
                    </h1>
                    <p className="text-sm text-gray-500">
                        Manage your account information and preferences
                    </p>
                </header>

                {/* Top Form Section */}
                <section className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-3">
                    {/* Left Inputs */}
                    <div className="col-span-2 space-y-4">
                        <div className="text-xs font-semibold text-amber-600">
                            Account Type: {isProvider ? "Provider" : "Customer"}
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <InputField label="Full Name" placeholder="Enter full name..." />
                            <InputField label="Email Address" placeholder="Enter email..." />
                            <InputField label="Phone Number" placeholder="+91 9876543210" />
                        </div>

                        <InputField label="Address" placeholder="Street address..." />

                        <div className="grid grid-cols-3 gap-4">
                            <InputField label="City" placeholder="City" />
                            <InputField label="State" placeholder="State" />
                            <InputField label="Zip Code" placeholder="Zip Code" />
                        </div>
                    </div>

                    {/* Right Avatar Section */}
                    <div className="flex flex-col items-center justify-start">
                        <div className="flex items-center justify-center w-20 h-20 mb-4 overflow-hidden bg-gray-200 rounded-full ring-1 ring-gray-300">
                            <Image
                                src="/avatar-placeholder.png"
                                alt="Profile"
                                width={64}
                                height={64}
                                className="object-cover rounded-full"
                            />
                        </div>
                        <button
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-full bg-amber-600 hover:bg-amber-700"
                            onClick={() => setEditable(!editable)}
                        >
                            <Pencil className="w-4 h-4" /> Edit Profile
                        </button>
                    </div>
                </section>

                {/* Conditional Sections */}
                {isProvider ? (
                    <ProviderExtras />
                ) : (
                    <CustomerExtras />
                )}
            </div>

            {/* <div className="absolute bottom-0 w-full h-64 bg-gray-900" /> */}
        </main>
    );
}

/* ---------- Reusable Input Field ---------- */
function InputField({
    label,
    placeholder,
}: {
    label: string;
    placeholder: string;
}) {
    return (
        <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
        </div>
    );
}

/* ---------- Provider-Specific Section ---------- */
function ProviderExtras() {
    return (
        <>
            <section className="p-6 mb-8 text-white bg-gray-900 rounded-xl">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="flex items-center gap-2 text-sm font-semibold text-amber-400">
                            Hourly Rate
                        </h3>
                        <p className="text-xs text-gray-400">
                            Set your hourly cleaning rate (minimum $25.00/hour)
                        </p>
                        <p className="mt-3 text-xl font-semibold">$25.00/hour</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-800 border rounded-full hover:bg-gray-700">
                        <Pencil className="w-4 h-4" /> Edit Rate
                    </button>
                </div>
            </section>

            <div className="grid grid-cols-1 bg-[#F6F4EF] gap-6 md:grid-cols-2">
                <InfoCard title="Location Management" />
                <InfoCard title="Booking Preferences" />
            </div>
        </>
    );
}

/* ---------- Customer-Specific Section ---------- */
function CustomerExtras() {
    return (
        <>
            <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
                <InfoCard title="Location Management" />
                <div className="p-6 rounded-xl bg-gray-50">
                    <h3 className="mb-4 text-lg font-semibold text-gray-800">
                        Booking Preferences
                    </h3>

                    <div className="space-y-5 text-sm text-gray-700">
                        {/* Trusted & Verified */}
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="font-semibold text-gray-900">Trusted & Verified</p>
                                <p className="text-gray-500 text-[13px]">
                                    All service providers are background checked
                                </p>
                            </div>
                            <input
                                type="checkbox"
                                defaultChecked
                                className="mt-1 border-gray-300 rounded text-amber-600 focus:ring-amber-500"
                            />
                        </div>

                        {/* Top Rated */}
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="font-semibold text-gray-900">Top Rated</p>
                                <p className="text-gray-500 text-[13px]">
                                    4.8+ average rating from satisfied customers
                                </p>
                            </div>
                            <input
                                type="checkbox"
                                defaultChecked
                                className="mt-1 border-gray-300 rounded text-amber-600 focus:ring-amber-500"
                            />
                        </div>

                        {/* Growing Community */}
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="font-semibold text-gray-900">Growing Community</p>
                                <p className="text-gray-500 text-[13px]">
                                    Join thousands of happy customers and providers
                                </p>
                            </div>
                            <input
                                type="checkbox"
                                className="mt-1 border-gray-300 rounded text-amber-600 focus:ring-amber-500"
                            />
                        </div>
                    </div>
                </div>

            </div>

            <section className="mb-10">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Billing Information
                    </h3>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full hover:bg-gray-100">
                        <Plus className="w-4 h-4" /> Add Payment Method
                    </button>
                </div>
                <div className="p-5 text-sm bg-gray-100 rounded-xl">
                    <p className="font-medium text-gray-800">
                        Secure Payment Processing
                    </p>
                    <p className="mt-1 text-gray-500">
                        All payment information is encrypted and processed securely through
                        Stripe. We never store your complete card details on our servers.
                    </p>
                </div>
            </section>
        </>
    );
}

/* ---------- Reusable Components ---------- */
function InfoCard({ title }: { title: string }) {
    return (
        <div className="p-6 text-gray-800 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
    );
}

function Preference({
    label,
    checked = false,
}: {
    label: string;
    checked?: boolean;
}) {
    return (
        <label className="flex items-start gap-2">
            <input
                type="checkbox"
                defaultChecked={checked}
                className="mt-1 border-gray-300 rounded text-amber-600 focus:ring-amber-500"
            />
            <span>{label}</span>
        </label>
    );
}
