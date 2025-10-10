import { Clock, MapPin, CalendarDays, ChevronDown } from "lucide-react";
import { Review } from "@/types/review";
import { formatMoney, formatPriceUnit } from "@/types/service";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="relative p-5 overflow-hidden transition-all bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md">
      <span className="absolute top-4 right-4 rounded-full bg-amber-100 px-3 py-0.5 text-xs font-medium text-amber-800">
        Hair
      </span>

      <h3 className="text-[15px] font-semibold text-gray-900">{review.serviceName}</h3>
      <p className="mt-1 text-xs text-gray-500">
        {review.reviewer.name} — {review.rating.toFixed(1)}★
      </p>

      <div className="px-4 py-3 mt-4 text-white bg-gray-900 rounded-md">
        <div className="flex items-center justify-between">
          <span className="text-xs tracking-wide uppercase opacity-80">Hourly Rate</span>
          <span className="text-sm font-semibold">$85.00/hour</span>
        </div>
      </div>

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

      <button className="mt-4 w-full rounded-full bg-[#C5A04B] text-white py-2 text-sm font-medium hover:bg-[#B18F40] transition">
        Book This Service
      </button>

      <div className="relative mt-3">
        <select className="w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-full appearance-none pr-9 focus:outline-none">
          <option>Reply with quick Messages</option>
          <option>Thanks for your feedback!</option>
          <option>Glad you liked the service 😊</option>
        </select>
        <ChevronDown className="absolute w-4 h-4 text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2" />
      </div>
    </div>
  );
}
