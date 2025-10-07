import { Clock, ShieldCheck, Headphones } from "lucide-react";
import Image from "next/image";

export default function SupportPage() {
    const featureCards = [
        {
            title: "Quick Response",
            desc: "Our support team responds to most requests within 24 hours.",
            icon: <Clock className="text-white w-7 h-7" />,
        },
        {
            title: "Secure & Private",
            desc: "All communications are encrypted and handled confidentially.",
            icon: <ShieldCheck className="text-white w-7 h-7" />,
        },
        {
            title: "24/7 Availability",
            desc: "Submit requests anytime – we’ll get back to you within business hours.",
            icon: <Headphones className="text-white w-7 h-7" />,
        },
    ];

    return (
        <div className="max-w-7xl mx-auto bg-white min-h-[95vh] flex flex-col">
            {/* ===== Header Section ===== */}
            <div className="px-16 pt-12">
                <h1 className="text-3xl font-semibold text-gray-900">Support Center</h1>
                <p className="max-w-2xl mt-2 text-gray-500">
                    Get help from our admin team for feedback, disputes, or other issues.
                </p>
            </div>

            {/* ===== Feature Cards ===== */}
            <div className="grid grid-cols-1 gap-6 px-16 mt-10 sm:grid-cols-3">
                {featureCards.map((card, idx) => (
                    <div
                        key={idx}
                        className="relative overflow-hidden border border-amber-100 rounded-lg p-6 bg-gradient-to-br from-[#FFFFFF] to-[#FFF6E2] hover:shadow-sm transition-all"
                    >
                        {/* decorative pattern (top-right) */}
                        <Image
                            src="/pattern-top-right.png"
                            alt=""
                            width={656}            // set the natural width
                            height={256}           // set the natural height
                            className="absolute top-0 right-0 object-contain pointer-events-none select-none opacity-80 mix-blend-luminosity"
                        />
                        {/* card content */}
                        <div className="relative">
                            <div className="flex items-center justify-center w-12 h-12 bg-[#C49A3F] rounded-md mb-5">
                                {card.icon}
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">{card.title}</p>
                                <p className="mt-1 text-sm leading-relaxed text-gray-600">{card.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ===== Booking Form & Contact Info ===== */}
            <div className="flex flex-wrap gap-8 px-16 py-12">
                {/* Left – Booking Details */}
                <div className="flex-1 bg-[#F3F1ED] p-8 rounded-xl border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900">Booking Details</h2>
                    <p className="mb-6 text-sm text-gray-500">
                        Fill in your preferred date, time, and location
                    </p>

                    <form className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label className="text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter full name"
                                className="w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-amber-600"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-amber-600"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Type of Request</label>
                            <select className="w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-amber-600">
                                <option>Feedback</option>
                                <option>Dispute</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Priority Level</label>
                            <select className="w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-amber-600">
                                <option>Normal</option>
                                <option>High</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Related Booking ID (Optional)
                            </label>
                            <input
                                type="text"
                                placeholder="Enter booking ID"
                                className="w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-amber-600"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                placeholder="Enter subject"
                                className="w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-amber-600"
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                placeholder="Any specific requirements or notes..."
                                rows={4}
                                className="w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-md outline-none resize-none focus:ring-1 focus:ring-amber-600"
                            ></textarea>
                        </div>

                        <div className="col-span-2">
                            <button
                                type="submit"
                                className="w-full py-3 text-sm font-medium text-white rounded-md bg-amber-600 hover:bg-amber-700"
                            >
                                Submit Support Request
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right – Contact Info */}
                <div className="w-[40%] bg-[#1D2432] text-white p-8 rounded-xl flex flex-col justify-between">
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Other Ways To Reach Us</h3>
                        <p className="mb-6 text-sm text-gray-300">
                            Need immediate assistance? Try these alternatives.
                        </p>

                        <div className="space-y-5">
                            <div>
                                <p className="text-sm font-medium">Direct Email</p>
                                <p className="mt-1 text-sm text-gray-300">
                                    For urgent matters email us directly at{" "}
                                    <span className="font-medium text-amber-400">
                                        support@crownstandard.ca
                                    </span>
                                </p>
                            </div>

                            <div>
                                <p className="text-sm font-medium">Business Hours</p>
                                <p className="mt-1 text-sm text-gray-300">
                                    Monday–Friday: 8:00 A.M – 6:00 P.M <br />
                                    Saturday: 9:00 A.M – 4:00 P.M <br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 mt-10 border-t border-gray-600">
                        <p className="text-sm font-medium">Emergency Situation</p>
                        <p className="mt-1 text-sm text-gray-300">
                            For urgent or safety concerns, please mark your request as{" "}
                            <span className="font-semibold text-amber-400">“High Priority”</span> and
                            contact us directly at the email above. We monitor high priority requests
                            throughout the day.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
