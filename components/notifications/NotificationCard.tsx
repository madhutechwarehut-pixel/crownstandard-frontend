import { Bell, Check } from "lucide-react";

interface NotificationCardProps {
    title: string;
    message: string;
    type: "Booking" | "Review" | "Tip" | "System";
    time: string;
    unread?: boolean;
}

export default function NotificationCard({
    title,
    message,
    type,
    time,
    unread,
}: NotificationCardProps) {
    // Custom tag styles: tinted backgrounds & text colors
    const typeStyles: Record<
        NotificationCardProps["type"],
        string
    > = {
        Booking: "bg-emerald-50 text-emerald-700 border border-emerald-100",
        Review: "bg-[#FFF9ED] text-[#B89029] border border-[#EADFC2]",
        Tip: "bg-blue-50 text-blue-600 border border-blue-100",
        System: "bg-gray-100 text-gray-700 border border-gray-200",
    };

    return (
        <div
            className={`flex flex-col justify-between rounded-xl p-6 transition border ${unread
                    ? "bg-[#1D2432] text-white border-transparent"
                    : "bg-[#F7F5F0] border-gray-100 text-[#1D2432]"
                }`}
        >
            <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#B89029]">
                    <Bell className="w-6 h-6 text-white" />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                    <h3
                        className={`text-base font-bold ${unread ? "text-white" : "text-[#1D2432]"
                            }`}
                    >
                        {title}
                    </h3>
                    <p
                        className={`mt-1 text-sm leading-relaxed ${unread ? "text-gray-200" : "text-gray-600"
                            }`}
                    >
                        {message}
                    </p>
                </div>

                {/* Tag with subtle tinted background */}
                <span
                    className={`px-3 py-[3px] text-xs font-medium rounded-full ${typeStyles[type]}`}
                >
                    {type}
                </span>
            </div>

            {/* Footer Section */}
            <div className="flex items-center justify-between mt-4">
                <p
                    className={`text-xs ${unread ? "text-gray-300" : "text-gray-500"
                        }`}
                >
                    {time}
                </p>

                {/* Mark as Read button */}
                {unread && (
                    <button
                        className={`flex items-center gap-1 text-xs font-medium rounded-full border px-3 py-[4px] transition ${unread
                                ? "border-white/30 text-white hover:bg-white/10"
                                : "border-gray-300 text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        <Check size={14} /> Mark as Read
                    </button>
                )}
            </div>
        </div>
    );
}
