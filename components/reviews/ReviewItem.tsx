import { Star } from "lucide-react";

interface ReviewItemProps {
  name: string;
  rating: number;
  date: string;
  comment: string;
}

export default function ReviewItem({
  name,
  rating,
  date,
  comment,
}: ReviewItemProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="flex items-start justify-between p-5 bg-white border border-gray-100 shadow-sm rounded-xl">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex items-center justify-center w-10 h-10 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full">
          {initials}
        </div>

        {/* Review content */}
        <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-gray-900">{name}</p>
            <div className="flex items-center gap-1 text-[#B89029]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < rating ? "fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500">
              ({rating.toFixed(1)}) {date}
            </p>
          </div>

          <p className="mt-1 text-sm text-gray-500">{comment}</p>
        </div>
      </div>
    </div>
  );
}
