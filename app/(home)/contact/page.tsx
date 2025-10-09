import { Clock, ShieldCheck, Headphones, Mail, Contact } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            <div className="px-5 pt-12">
                <h1 className="text-3xl font-semibold text-gray-900">Support Center</h1>
                <p className="max-w-2xl mt-2 text-gray-500">
                    Get help from our admin team for feedback, disputes, or other issues.
                </p>
            </div>

            {/* ===== Feature Cards ===== */}
            <div className="grid grid-cols-1 gap-6 px-5 mt-10 sm:grid-cols-3">
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
            <div className="flex flex-wrap gap-8 px-5 py-12">
                {/* Left – Booking Details */}
                <div className="flex-1 bg-[#F3F1ED] p-8 rounded-xl border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900">Booking Details</h2>
                    <p className="mb-6 text-sm text-gray-500">
                        Fill in your preferred date, time, and location
                    </p>

                    <form className="grid grid-cols-1 gap-2 sm:grid-cols-2">
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

                        <div className="col-span-2 mb-2">
                            <label className="text-sm font-medium text-gray-700">Message</label>
                            <input
                                placeholder="Any specific requirements or notes..."
                                className="w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-amber-600"
                            ></input>
                        </div>

                        <div className="">
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
                {/* Right – Contact Info */}
                <div className="relative md:w-[50%] bg-[#1D2432] text-white p-8 rounded-2xl overflow-hidden">
                    {/* top-right decorative illustration */}
                    <Image
                        src="/Vector.png"
                        alt="Vector illustration"
                        width={272}
                        height={179}
                        className="absolute -right-[100px] -top-10 opacity-[3%] pointer-events-none select-none"
                    />

                    {/* content */}
                    <div className="relative flex flex-col justify-start h-full space-y-8">
                        <div>
                            <h3 className="flex items-center gap-2 text-lg font-semibold">
                                <Contact className="inline-block w-6 h-6 text-brand-gold" />{" "}
                                Other Ways To Reach Us
                            </h3>
                            <p className="mb-8 text-sm text-gray-300">
                                Need immediate assistance? Try these alternatives.
                            </p>

                            <div className="space-y-8">
                                {/* Direct Email */}
                                <div className="flex items-start gap-5">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#232B3A] ring-1 ring-gray-700">
                                        <Mail size={18} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Direct Email</p>
                                        <p className="mt-1 text-sm text-gray-300">
                                            For urgent matters email us directly at
                                        </p>
                                        <Link
                                            href="mailto:support@crownstandard.ca"
                                            className="text-sm font-medium text-brand-gold hover:underline"
                                        >
                                            support@crownstandard.ca
                                        </Link>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="flex items-start gap-5">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#232B3A] ring-1 ring-gray-700">
                                        <Clock size={18} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Business Hours</p>
                                        <p className="mt-1 text-sm leading-relaxed text-gray-300">
                                            Monday–Friday: 8:00 A.M – 6:00 P.M <br />
                                            Saturday: 9:00 A.M – 4:00 P.M <br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Divider + Emergency section */}
                        <div className="pt-5 border-t border-gray-700">
                            <p className="pt-3 text-sm font-medium">Emergency Situation</p>
                            <p className="mt-1 text-sm text-gray-300">
                                For urgent or safety concerns, please mark your request as{" "}
                                <span className="font-semibold text-brand-gold">“High Priority”</span> and
                                contact us directly at the email above. We monitor high-priority requests
                                throughout the day and respond as quickly as possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
