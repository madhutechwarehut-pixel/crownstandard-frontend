"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Calendar,
    Star,
    DollarSign,
    Heart,
    ArrowRight,
    Settings,
    MessagesSquare,
    ClipboardList,
} from "lucide-react";
import StatCard from "@/components/dashboard/StatCard"
import ActionCard from "@/components/dashboard/ActionCard"

type TabKey =
    | "overview"
    | "bookings"
    | "services"
    | "availability"
    | "rates"
    | "earnings"
    | "gps";

const TABS: { key: TabKey; label: string; icon?: React.ReactNode }[] = [
    { key: "overview", label: "Overview" },
    { key: "bookings", label: "Bookings" },
    { key: "services", label: "Services" },
    { key: "availability", label: "Availability" },
    { key: "rates", label: "Rates" },
    { key: "earnings", label: "Earnings" },
    { key: "gps", label: "GPS Tracking" },
];

type Booking = {
    id: string;
    title: string;
    type: string;
    location: string;
    datetime: string;
    price: string;
    image: string;
};

const bookings: Booking[] = [
    {
        id: "1",
        title: "Deluxe Apartment Cleaning",
        type: "Residential",
        location: "New York, NY",
        datetime: "20.05.2025 , 4:00p.m - 6:00p.m",
        price: "$30",
        image: "/ServiceCleaning.png", // place an image in /public/ServiceCleaning.png
    },
    {
        id: "2",
        title: "Deluxe Apartment Cleaning",
        type: "Residential",
        location: "New York, NY",
        datetime: "20.05.2025 , 4:00p.m - 6:00p.m",
        price: "$30",
        image: "/ServiceCleaning.png", // place an image in /public/ServiceCleaning.png
    },
];

export default function ProviderDashboard() {
    const [tab, setTab] = useState<TabKey>("overview");

    return (
        <main className="relative min-h-screen bg-white">
            <div className="relative z-10 px-6 py-8 mx-auto max-w-7xl lg:px-8">
                {/* Header */}
                <header className="mb-6">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Provider Dashboard
                    </h1>
                    <p className="text-gray-500">Manage your cleaning business</p>
                </header>

                {/* Tabs */}
                <nav className="flex flex-wrap justify-between gap-3 mb-8">
                    {TABS.map((t) => {
                        const active = tab === t.key;
                        return (
                            <button
                                key={t.key}
                                onClick={() => setTab(t.key)}
                                className={[
                                    "px-5 py-2 md:px-10 rounded-md text-sm font-medium border transition",
                                    active
                                        ? "bg-gray-900 text-white border-gray-900 shadow-sm"
                                        : "bg-amber-600/80 text-white hover:bg-amber-700",
                                ].join(" ")}
                            >
                                {t.label}
                            </button>
                        );
                    })}
                </nav>

                {/* Content */}
                {tab === "overview" && <OverviewTab />}

                {tab === "bookings" && (
                    <Placeholder title="Bookings">
                        Filters, list/table of booking requests, status chips, actions
                        (Confirm / Complete / Message).
                    </Placeholder>
                )}
                {tab === "services" && (
                    <Placeholder title="Services">
                        Grid/list of services, Add/Edit, set rates, toggle active.
                    </Placeholder>
                )}
                {tab === "availability" && (
                    <Placeholder title="Availability">
                        Weekly calendar, timeslots, exceptions/blackout dates.
                    </Placeholder>
                )}
                {tab === "rates" && (
                    <Placeholder title="Rates">
                        Hourly/base rates, add-ons, discounts, promo codes.
                    </Placeholder>
                )}
                {tab === "earnings" && (
                    <Placeholder title="Earnings">
                        Monthly earnings summary, payouts, charts, downloadable statements.
                    </Placeholder>
                )}
                {tab === "gps" && (
                    <Placeholder title="GPS Tracking">
                        Map with last-known location, route history, on-the-way status.
                    </Placeholder>
                )}
            </div>

            <div className="absolute bottom-0 w-full h-64 bg-gray-900" />
        </main>
    );
}

/* ---------------- Overview Tab ---------------- */

function OverviewTab() {
    // Dummy single recent booking (remove to trigger empty state)
    const booking = {
        id: "1",
        title: "Deluxe Apartment Cleaning",
        type: "Residential",
        location: "New York, NY",
        datetime: "20.05.2025 , 4:00p.m - 6:00p.m",
        price: "$30",
        image: "/ServiceCleaning.png", // place in /public
    };

    return (
        <>
            {/* KPI Stat Cards */}
            <section className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    title="Active Services"
                    value="0"
                    subtitle="Service listings"
                    icon={<Calendar className="w-10 h-10 text-amber-700" />}
                />
                <StatCard
                    title="Active Bookings"
                    value="0"
                    subtitle="Confirmed & in progress"
                    icon={<Star className="w-10 h-10 text-amber-700" />}
                />
                <StatCard
                    title="Monthly Earnings"
                    value="$0.00"
                    subtitle="75% after platform fee + 100% of tips (paid daily)"
                    icon={<DollarSign className="w-10 h-10 text-amber-700" />}
                />
                <StatCard
                    title="Average Rate"
                    value="0"
                    subtitle="Your hourly rate"
                    icon={<Heart className="w-10 h-10 text-amber-700" />}
                />
            </section>

            {/* Quick Actions */}
            <section className="grid grid-cols-1 gap-6 mb-10 sm:grid-cols-2 xl:grid-cols-4">
                <ActionCard
                    title="Manage Services"
                    subtitle="Add, edit, your cleaning services"
                />
                <ActionCard
                    title="View Bookings"
                    subtitle="Manage appointments and booking"
                />
                <ActionCard
                    title="Messages"
                    subtitle="Chat with customers"
                />
                <ActionCard
                    title="Profile & Settings"
                    subtitle="Update your profile, settings"
                />
            </section>

            {/* Recent Bookings */}
            <section className="mb-24">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">Recent Bookings</h2>
                        <p className="text-sm text-gray-500">
                            Your latest cleaning service appointments
                        </p>
                    </div>
                    {bookings.length > 0 && (
                        <button className="px-4 py-2 text-sm text-gray-700 font-semibold bg-[#F3F1ED] rounded-full hover:bg-[#e0dad0]">
                            View All
                        </button>
                    )}
                </div>

                {/* Single booking row */}
                <div className="bg-[#F3F1ED] p-2 py-12 rounded-xl">
                    {bookings.length > 0 ? (
                        // Booking cards
                        bookings.map((booking) => (
                            <div
                                key={booking.id}
                                className="mb-2 overflow-hidden bg-white border shadow-sm rounded-2xl"
                            >
                                <div className="flex items-center gap-5 px-5 py-4">
                                    <div className="relative w-16 h-16 overflow-hidden ring-1 ring-gray-200">
                                        <Image
                                            src={booking.image}
                                            alt={booking.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="grid items-center flex-1 grid-cols-1 gap-2 md:grid-cols-5 md:gap-4">
                                        <div className="md:col-span-2">
                                            <p className="font-semibold leading-tight text-gray-900">
                                                {booking.title}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-0.5">{booking.type}</p>
                                        </div>

                                        <p className="text-sm text-gray-600">{booking.location}</p>
                                        <p className="text-sm text-gray-600">{booking.datetime}</p>
                                        <p className="font-bold text-gray-900 justify-self-end">
                                            {booking.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Empty state
                        <div className="py-12 text-center border border-gray-200 border-dashed rounded-2xl">
                            <p className="mb-4 text-gray-500">
                                No bookings yet. Ready to get started?
                            </p>
                            <button className="inline-flex items-center gap-2 px-6 py-3 font-medium text-white transition rounded-lg bg-amber-600 hover:bg-amber-700">
                                Book Your First Service
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

/* ---------------- Placeholder for other tabs ---------------- */

function Placeholder({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="p-8 text-gray-600 border border-dashed rounded-2xl bg-gray-50">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm">{children}</p>
        </section>
    );
}
