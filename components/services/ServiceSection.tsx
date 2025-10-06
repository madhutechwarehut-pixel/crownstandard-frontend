"use client";

import { useState } from "react";
import { Filter, Plus } from "lucide-react";
import CreateServiceModal from "@/components/modals/CreateServiceModal";
import Link from "next/link";
import {
    DUMMY_SERVICE,
    NormalizedService,
    normalizeService,
    formatMoney,
    formatPriceUnit,
} from "@/types/service";

export default function ServiceSection() {
    const [open, setOpen] = useState(false);

    const [services] = useState<NormalizedService[]>([
        normalizeService(DUMMY_SERVICE),
        // You can add more dummy entries here for testing
    ]);

    return (
        <div className="mt-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">Your Services</h2>
                    <p className="text-sm text-gray-500">
                        Manage your cleaning service offerings
                    </p>
                </div>

                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50">
                        <Filter className="w-4 h-4" /> Filter By
                    </button>
                    <button
                        onClick={() => setOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50">
                        <Plus className="w-4 h-4" /> Add Service
                    </button>
                    <CreateServiceModal
                        open={open}
                        onClose={() => setOpen(false)}
                        onSubmit={(data) => console.log("New Service Data:", data)}
                    />
                    <Link
                        href="/provider/dashboard/manage-service"
                        className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800"
                    >
                        View All
                    </Link>
                </div>
            </div>

            {/* Services List / Empty State */}
            <div className="p-6 bg-[#F6F4EF] rounded-3xl min-h-[250px]">
                {services.length > 0 ? (
                    <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="flex items-center justify-between p-4 transition-shadow bg-white shadow-sm rounded-2xl hover:shadow-md"
                            >
                                {/* Left: Image + Details */}
                                <div className="flex items-center gap-4">
                                    <div className="relative w-16 h-16 overflow-hidden rounded-md ring-1 ring-gray-200">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={service.coverImageUrl}
                                            alt={service.name}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-gray-900">{service.name}</p>
                                        <p className="text-sm text-gray-500">
                                            {service.badge ?? service.category}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {service.location || "—"}
                                        </p>
                                    </div>
                                </div>

                                {/* Right: Price */}
                                <div className="text-base font-semibold text-gray-900 whitespace-nowrap">
                                    {formatMoney(service.pricing.amount, service.pricing.currency)}{" "}
                                    <span className="text-xs text-gray-500">
                                        {formatPriceUnit(service.pricing.unit)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <h3 className="text-lg font-medium text-gray-700">
                            No services created yet
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Create your first cleaning service to start receiving bookings
                        </p>
                        <button className="mt-5 px-6 py-2 text-sm font-medium text-white bg-[#B28B32] rounded-full hover:bg-[#9A7629]">
                            Create Your First Service
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
