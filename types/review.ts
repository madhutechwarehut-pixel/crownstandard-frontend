import { ID } from "@/types/service";

// --------------- Review Types ---------------

export interface Reviewer {
  id: ID;
  name: string;
  avatarUrl?: string | null;
  city?: string | null;
}

export interface Review {
  id: ID;
  reviewer: Reviewer;
  rating: number;
  comment: string;
  serviceName: string;
  createdAt: string;
  helpfulCount?: number;
}


// --------------- Dummy Data ---------------

export const DUMMY_REVIEWS: Review[] = [
  {
    id: "rev_001" as ID,
    reviewer: {
      id: "user_001" as ID,
      name: "Emily Johnson",
      avatarUrl: "/avatars/emily.png",
      city: "Los Angeles, CA",
    },
    rating: 5,
    comment:
      "Sofia was absolutely amazing! She arrived on time, was very professional, and left my apartment spotless. Highly recommend!",
    serviceName: "Deluxe Apartment Cleaning",
    createdAt: "2025-09-18T10:15:00Z",
    helpfulCount: 12,
  },
  {
    id: "rev_002" as ID,
    reviewer: {
      id: "user_002" as ID,
      name: "Mark Patel",
      avatarUrl: "/avatars/mark.png",
      city: "Santa Monica, CA",
    },
    rating: 4.5,
    comment:
      "Great attention to detail. There were minor delays due to parking, but overall excellent service.",
    serviceName: "Office Deep Cleaning",
    createdAt: "2025-09-20T08:42:00Z",
    helpfulCount: 6,
  },
  {
    id: "rev_003" as ID,
    reviewer: {
      id: "user_003" as ID,
      name: "Laura Kim",
      avatarUrl: "/avatars/laura.png",
      city: "Burbank, CA",
    },
    rating: 4.8,
    comment:
      "Wonderful experience! My home felt brand new afterward. Definitely booking again.",
    serviceName: "Move-out Cleaning",
    createdAt: "2025-09-25T14:00:00Z",
    helpfulCount: 9,
  },
];
