import { Trash2 } from "lucide-react";
import ServiceCard from "./ServiceCard";

interface FavoriteCardProps {
  name: string;
  date: string;
  services: {
    title: string;
    type: string;
    rate: string;
    min: string;
    location: string;
  }[];
}

export default function FavoriteCard({ name, date, services }: FavoriteCardProps) {
  return (
    <div className="flex flex-col overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-lg rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#F6F2EA]">
        <div>
          <h3 className="text-[15px] font-semibold text-brand-gold">Alice Johnson</h3>
          <p className="text-xs text-gray-500">Added on 01/08/2025</p>
        </div>
        <button className="p-1 transition text-brand-gold hover:text-red-600">
          <Trash2 size={18} />
        </button>
      </div>

      {/* Services Section */}
      <div className="flex flex-col flex-1 px-6 py-5 space-y-4">
        <h4 className="text-sm font-medium text-gray-900">Available Services</h4>

        {/* Sample services */}
        {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
      </div>

      {/* Footer Button */}
      <div className="px-6 pb-5">
        <button className="w-full py-3 text-sm font-medium text-white rounded-full bg-[#1D2432] hover:bg-[#111827] transition">
          View All Services
        </button>
      </div>
    </div>
  );
}
