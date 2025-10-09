"use client";

import { useState } from "react";
import ProviderHeader from "@/components/provider/ProviderHeader";
import QuickMessage from "@/components/provider/QuickMessage";
import TabSwitcher from "@/components/provider/TabSwitcher";
import ServiceCard from "@/components/provider/ServiceCard";
import ReviewItem from "@/components/reviews/ReviewItem";


import { DUMMY_SERVICE } from "@/types/service";
import { DUMMY_REVIEWS } from "@/types/review";

export default function ProviderProfilePage() {
  const [activeTab, setActiveTab] = useState<"services" | "reviews">("services");
  const services = [DUMMY_SERVICE, { ...DUMMY_SERVICE, id: "svc_002" as any, name: "Move-out Deep Cleaning" }];
  const reviews = [
    {
      id: "1",
      name: "Marlin Doe",
      rating: 5.0,
      date: "Sep 15, 2025",
      comment: "See what customers and other users have said about your services",
    },
    {
      id: "2",
      name: "Marlin Doe",
      rating: 4.5,
      date: "Sep 15, 2025",
      comment: "See what customers and other users have said about your services",
    },
    {
      id: "3",
      name: "Marlin Doe",
      rating: 2.0,
      date: "Sep 15, 2025",
      comment: "See what customers and other users have said about your services",
    },
    {
      id: "4",
      name: "Marlin Doe",
      rating: 3.0,
      date: "Sep 15, 2025",
      comment: "See what customers and other users have said about your services",
    },
  ];

  return (
    <div className="px-6 py-8 mx-auto max-w-7xl">
      <h1 className="mb-6 text-2xl font-semibold">Provider Profile</h1>

      <ProviderHeader />
      <QuickMessage />

      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
      <hr className="mt-3" />

      {activeTab === "services" ? (
        <div className="grid gap-6 mt-8 md:grid-cols-3">
          {services.map((svc) => (
            <ServiceCard key={svc.id} service={svc} />
          ))}
        </div>
      ) : (
        <div className="bg-[#F3F1ED] p-6 mt-8 rounded-2xl">
          <div className="space-y-4">
            {reviews.map((review) => (
              <ReviewItem key={review.id} {...review} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
