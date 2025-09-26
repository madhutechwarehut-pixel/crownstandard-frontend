// components/ServiceCard.tsx
import Image from "next/image";
import { renderStars } from "@/utils/renderStars";

type Service = {
    id: number;
    title: string;
    description: string;
    price: number;
    duration: string;
    location: string;
    rating: number;
    reviews: number;
    imageUrl: string;
    badge: string;
    provider: string;
};

export default function ServiceCard({ service }: { service: Service }) {
    return (
        <article className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
            {/* Image */}
            <div className="relative">
                <Image
                    src={service.imageUrl}
                    alt={service.title}
                    width={640}
                    height={500}
                    className="object-cover w-full sm:object-contain md:object-cover h-60"
                    priority={service.id === 1}
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#C9A254] px-3 py-1 text-xs font-semibold text-white">
                    {service.badge}
                </span>
            </div>

            {/* Middle content */}
            <div className="p-4">
                <div className="flex flex-wrap items-center gap-2 mb-2 text-xs">
                    <button className="px-4 py-1 rounded-full bg-[#F4F1EC]">Profile</button>
                    <button className="px-3 py-1 rounded-full bg-[#F4F1EC]">Add to Favourites</button>
                    <button className="px-3 py-1 rounded-full bg-[#F4F1EC]">Tip</button>
                </div>

                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{service.description}</p>

                <div className="mt-5 mb-1 text-sm text-gray-800">
                    <span className="font-semibold">${service.price}/hour</span> • {service.duration}
                </div>
                <div className="text-sm text-gray-600">{service.location}</div>
            </div>

            {/* Bottom details */}
            <div className="p-4 bg-[#FFF6E2]">

                {/* Provider + Price */}
                <div className="flex items-center justify-between text-sm">
                    <div>
                        <div className="font-medium">{service.provider}</div>
                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-2">
                            {renderStars(service.rating)}
                            <span className="text-[12px] text-gray-600">
                                {service.rating} ({service.reviews} reviews)
                            </span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="font-semibold">${service.price}/h</div>
                        <div className="text-gray-600">Starting rate</div>
                    </div>
                </div>

                <button className="w-full py-2 mt-4 font-medium text-white bg-gray-900 rounded-lg hover:bg-black">
                    Book This Service
                </button>
            </div>
        </article>
    );
}
