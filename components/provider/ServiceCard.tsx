import { Clock, MapPin, CalendarDays, ChevronDown } from "lucide-react";
import { formatMoney, formatPriceUnit, type Service } from "@/types/service";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="relative p-5 overflow-hidden transition-all bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md">
      {/* top-right badge */}
      <span className="absolute top-4 right-4 rounded-full bg-amber-100 px-3 py-0.5 text-xs font-medium text-amber-800">
        Hair
      </span>

      {/* title & subtext */}
      <h3 className="text-[15px] font-bold text-gray-900">{service.name}</h3>
      <p className="mt-1 text-xs text-gray-500">
        See what customers and other users have said about your services
      </p>

      {/* hourly rate */}
      <div className="px-4 py-3 mt-4 text-white bg-gray-900 rounded-md">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wide text-brand-gold">Hourly Rate</span>
          <span className="text-sm font-semibold">
            {formatMoney(service.pricing.amount, service.pricing.currency)}
            {formatPriceUnit(service.pricing.unit)}
          </span>
        </div>
      </div>

      {/* details section */}
      <ul className="mt-3 space-y-2 text-[13px] text-gray-800">
        <li className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          1h minimum
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          Greater Los Angeles
        </li>
        <li className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-gray-500" />
          <div className="flex gap-1">
            {["Mon", "Wed", "Fri"].map((day) => (
              <span
                key={day}
                className="rounded-full border border-gray-300 px-2 py-0.5 text-[11px] text-gray-700"
              >
                {day}
              </span>
            ))}
          </div>
        </li>
      </ul>

      {/* book button */}
      <button className="mt-4 w-full rounded-full bg-brand-gold text-white py-2 text-sm font-medium hover:bg-[#B18F40] transition">
        Book This Service
      </button>

    </div>
  );
}
