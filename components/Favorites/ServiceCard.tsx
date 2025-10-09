import { MapPin, Clock, DollarSign } from "lucide-react";

interface ServiceCardProps {
  title: string;
  type: string;
  rate: string;
  min: string;
  location: string;
}

export default function ServiceCard({ title, type, rate, min, location }: ServiceCardProps) {
  return (
    <div className="border border-[#EADFC2] bg-[#FFF9ED] rounded-xl px-5 py-4 space-y-3">
      {/* Header */}
      <div className="flex items-start justify-between">
        <h5 className="text-sm font-semibold text-gray-900">{title}</h5>
        <span className="px-2 py-[2px] text-xs font-medium text-white rounded-md bg-brand-gold">
          {type}
        </span>
      </div>

      {/* Details */}
      <div className="space-y-1 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <DollarSign size={14} className="text-brand-gold" />
          <span>{rate}</span>
          <span className="mx-1 text-gray-400">•</span>
          <Clock size={14} className="text-brand-gold" />
          <span>{min}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={14} className="text-brand-gold" />
          <span>{location}</span>
        </div>
      </div>

      {/* CTA */}
      <button
        type="button"
        className="w-full py-2 mt-2 text-sm font-medium text-[#1D2432] border border-[#B89029]/40 rounded-full hover:bg-brand-gold/10 transition"
      >
        Book Now
      </button>
    </div>
  );
}
