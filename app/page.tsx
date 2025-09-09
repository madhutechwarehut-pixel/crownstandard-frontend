import Link from "next/link";
import CTAButton from "../components/CTAButton";
import FeatureCard from "../components/FeatureCard";
import { Calendar, ShieldCheck, ClipboardList, Home, Brush } from "lucide-react";

export default function Page() {
  const isLoggedIn=false;
  
  return (
    <div className="mx-auto max-w-[80%] px-6">
      {/* Hero */}
      <section className="text-center pt-14 pb-8">
        <h1 className="text-[44px] md:text-[56px] leading-tight font-extrabold">
          Welcome to <span className="text-cs-gold">Crown Standard</span>
        </h1>
        <p className="mt-4 text-[15px] md:text-base text-cs-sub max-w-2xl mx-auto">
          Experience premium cleaning services with trusted professionals.
          <br className="hidden md:block" />
          Book in minutes, relax for hours.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <CTAButton size="lg" variant="primaryGradient">Book Now</CTAButton>
          <CTAButton size="lg" variant="soft">My Bookings</CTAButton>
        </div>
      </section>

      {/* Row 1: three feature cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <FeatureCard
          icon={<Calendar className="h-8 w-8" aria-hidden="true" />}
          title="Quick Booking"
          desc="Book your cleaning service in just 3 steps. Select date, time, and preferences."
          ctaLabel="Start Booking"
        />
        <FeatureCard
          icon={<ShieldCheck className="h-8 w-8" aria-hidden="true" />}
          title="Trusted Professionals"
          desc="All service providers are verified, insured, and highly rated by customers."
          ctaLabel="Browse Services"
        />
        <FeatureCard
          icon={<ClipboardList className="h-8 w-8" aria-hidden="true" />}
          title="Easy Management"
          desc="Track your bookings, communicate with providers, and leave reviews."
          ctaLabel="My Bookings"
        />
      </section>

      {/* Row 2: two wide panels */}
      {isLoggedIn ? (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-10">
          <div className="rounded-xl2 bg-cs-paper shadow-soft border border-cs-border p-8">
            <div className="h-12 w-12 rounded-full bg-gray-200 grid place-items-center text-cs-charcoal/80 mb-4 mx-auto">
              <Home className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-center mb-1">Need Cleaning?</h3>
            <p className="text-sm text-cs-sub text-center mb-5">
              Get your home or office cleaned by trusted professionals
            </p>
            <ul className="text-sm text-cs-sub space-y-2 mb-6 max-w-md mx-auto">
              <li className="flex gap-2"><span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cs-charcoal/70" /> Browse verified cleaning services</li>
              <li className="flex gap-2"><span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cs-charcoal/70" /> Book instantly with flexible scheduling</li>
              <li className="flex gap-2"><span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cs-charcoal/70" /> Secure payment and satisfaction guarantee</li>
            </ul>
            <CTAButton className="w-full">Find Cleaners</CTAButton>
          </div>

          <div className="rounded-xl2 bg-cs-paper shadow-soft border border-cs-border p-8">
            <div className="h-12 w-12 rounded-full bg-gray-100 grid place-items-center text-cs-charcoal/60 mb-4 mx-auto">
              <Brush className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-center mb-1">Provider Dashboard</h3>
            <p className="text-sm text-cs-sub text-center mb-5">
              Access your provider dashboard to manage services
            </p>
            <ul className="text-sm text-cs-sub space-y-2 mb-6 max-w-md mx-auto">
              <li className="flex gap-2"><span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cs-charcoal/70" /> Manage your services and competitive rates</li>
              <li className="flex gap-2"><span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cs-charcoal/70" /> Keep 75% of bookings plus 100% of all tips</li>
              <li className="flex gap-2"><span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cs-charcoal/70" /> Build lasting customer relationships</li>
            </ul>
            <CTAButton variant="soft" className="w-full">Provider Dashboard</CTAButton>
          </div>
        </section>
      ) : (
        <section className="grid grid-cols-1 place-items-center mt-10 mb-10">
          <div className="rounded-xl2 bg-cs-paper shadow-soft border border-cs-border p-8 max-w-[640px] w-full">
            <div className="h-12 w-12 rounded-full bg-gray-200 grid place-items-center text-cs-charcoal/80 mb-4 mx-auto">
              <Home className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-center mb-1">Need Cleaning?</h3>
            <p className="text-sm text-cs-sub text-center mb-5">
              Get your home or office cleaned by trusted professionals
            </p>
            <ul className="text-sm text-cs-sub space-y-2 mb-6 max-w-md mx-auto">
              <li className="flex gap-2"><span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cs-charcoal/70" /> Browse verified cleaning services</li>
              <li className="flex gap-2"><span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cs-charcoal/70" /> Book instantly with flexible scheduling</li>
              <li className="flex gap-2"><span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cs-charcoal/70" /> Secure payment and satisfaction guarantee</li>
            </ul>
            <CTAButton className="w-full" variant="primaryGradient">Find Cleaners</CTAButton>
          </div>
        </section>
      )}
    </div>
  );
}
