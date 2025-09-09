// app/how-to-get-started/page.tsx
import {
    ShieldCheck, Users, UserPlus, Home, Clock, FileCheck, Settings, HelpCircle,
    CheckCircle2, MapPin, CalendarDays, CreditCard, Star, ArrowRight,
    Info, Lock, Mail, Smartphone, Camera, Shield, ChevronDown
} from "lucide-react";
import Link from "next/link";
import CTAButton from "../../components/CTAButton";

export default function HowToGetStartedPage() {
    const faqs: { group: string; items: { q: string; a: string }[] }[] = [
        {
            group: "Getting Started",
            items: [
                { q: "How do I know if Crown Standard is available in my area?", a: "Enter your address on the signup or booking flow. We’ll show real-time availability of providers nearby." },
                { q: "Is it free to create an account?", a: "Yes. Creating a customer or provider account is completely free." },
                { q: "How long does verification take for service providers?", a: "Typically 2–3 business days once all documents are submitted and readable." },
            ],
        },
        {
            group: "Account & Security",
            items: [
                { q: "How secure is my personal information?", a: "We use encryption in transit and at rest. You can also enable login alerts in Settings." },
                { q: "Can I change my account type later?", a: "Yes. You can add a provider profile from your customer account or vice-versa." },
                { q: "What if I forget my password?", a: "Use the 'Forgot password' link on the login page to reset securely by email." },
            ],
        },
        {
            group: "For Customers",
            items: [
                { q: "How do I know if a provider is trustworthy?", a: "Providers are identity-verified, insured, and reviewed by customers. Look for high ratings and badges." },
                { q: "Can I book recurring cleaning?", a: "Yes—choose weekly, bi-weekly, or monthly during checkout." },
                { q: "Do I need to be home?", a: "Not required. Add secure access instructions in your booking notes." },
            ],
        },
        {
            group: "For Service Providers",
            items: [
                { q: "What insurance do I need?", a: "General liability coverage is recommended (and required in some areas)." },
                { q: "How much commission is charged?", a: "Providers keep 75% of bookings plus 100% of tips." },
                { q: "Can I bring my own team?", a: "Yes—add team members in your provider dashboard and set roles." },
            ],
        },
        {
            group: "Payments & Pricing",
            items: [
                { q: "What payment methods do you accept?", a: "Credit/debit cards and selected digital wallets." },
                { q: "When am I charged?", a: "Customers are charged after the service is completed." },
                { q: "Are there hidden fees?", a: "No hidden fees. Taxes and any extras are shown before you confirm." },
                { q: "Refunds if I’m not satisfied?", a: "Contact support within 24 hours; we’ll make it right per our policy." },
            ],
        },
        {
            group: "Technical Support",
            items: [
                { q: "Is there a mobile app?", a: "Mobile web works great; native apps are coming soon." },
                { q: "I’m having trouble with the website.", a: "Clear cache/cookies or try an incognito window. If it persists, contact support." },
                { q: "How do I update my account info?", a: "Open Settings → Profile to edit personal details, address, and preferences." },
            ],
        },
    ];

    return (
        <div className="mx-auto max-w-[80%] px-6 py-10">
            {/* Breadcrumb-ish eyebrow */}
            <p className="text-center text-xs text-muted-foreground mb-2">Getting Started Guide</p>

            {/* Title + subtitle */}
            <h1 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
                How to Get Started
            </h1>
            <p className="mt-3 text-center text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Follow our step-by-step guide to create your account and start using Crown Standard, whether
                you’re looking for cleaning services or want to provide them.
            </p>

            {/* Two main cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {/* Customers */}
                <section className="rounded-lg bg-card text-card-foreground border border-border shadow-soft p-7 md:p-8">
                    <div className="mx-auto mb-5 h-12 w-12 rounded-full bg-muted grid place-items-center">
                        <Users className="h-8 w-8 font-extrabold" />
                    </div>
                    <h2 className="text-[22px] md:text-[24px] font-extrabold tracking-tight text-primary flex items-center justify-center gap-2">
                        For Customers
                    </h2>
                    <p className="text-center text-[15px] text-muted-foreground mt-1.5 mb-7">
                        Need professional cleaning services?
                    </p>

                    <ol className="space-y-7">
                        {/* 1 */}
                        <li className="flex gap-4">
                            <span className="shrink-0 h-8 w-8 rounded-full bg-secondary text-primary grid place-items-center text-[13px] font-semibold ring-1 ring-border">1</span>
                            <div className="flex-1">
                                <h3 className="font-semibold text-primary flex items-center gap-2">
                                    <UserPlus className="h-4 w-4 text-muted-foreground" />
                                    Create Your Account
                                </h3>
                                <p className="mt-1 text-[15px] text-foreground">
                                    Sign up with your email and create a secure password
                                </p>
                                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Visit the sign-up page and choose “Customer” account type</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Enter your full name, email address, and create a strong password</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Verify your email address by clicking the link we send you</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Complete your profile with contact information and preferences</li>
                                </ul>
                                <div className="mt-3 flex justify-center text-muted-foreground"><ArrowRight className="h-4 w-4" /></div>
                            </div>
                        </li>

                        {/* 2 */}
                        <li className="flex gap-4">
                            <span className="shrink-0 h-8 w-8 rounded-full bg-secondary text-primary grid place-items-center text-[13px] font-semibold ring-1 ring-border">2</span>
                            <div className="flex-1">
                                <h3 className="font-semibold text-primary flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-muted-foreground" />
                                    Set Your Location
                                </h3>
                                <p className="mt-1 text-[15px] text-foreground">Add your address to find nearby service providers</p>
                                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Enter your home or business address in your profile</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Set your service area preferences</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Add any special access instructions for your property</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Save multiple addresses if you need services at different locations</li>
                                </ul>
                                <div className="mt-3 flex justify-center text-muted-foreground"><ArrowRight className="h-4 w-4" /></div>
                            </div>
                        </li>

                        {/* 3 */}
                        <li className="flex gap-4">
                            <span className="shrink-0 h-8 w-8 rounded-full bg-secondary text-primary grid place-items-center text-[13px] font-semibold ring-1 ring-border">3</span>
                            <div className="flex-1">
                                <h3 className="font-semibold text-primary flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                                    Browse & Book Services
                                </h3>
                                <p className="mt-1 text-[15px] text-foreground">Find the perfect cleaning service for your needs</p>
                                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Browse available professionals in your area</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Read reviews and check ratings</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Compare prices and service offerings</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Select date, time, and service duration</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Add special requests or cleaning preferences</li>
                                </ul>
                                <div className="mt-3 flex justify-center text-muted-foreground"><ArrowRight className="h-4 w-4" /></div>
                            </div>
                        </li>

                        {/* 4 */}
                        <li className="flex gap-4">
                            <span className="shrink-0 h-8 w-8 rounded-full bg-secondary text-primary grid place-items-center text-[13px] font-semibold ring-1 ring-border">4</span>
                            <div className="flex-1">
                                <h3 className="font-semibold text-primary flex items-center gap-2">
                                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                                    Secure Payment
                                </h3>
                                <p className="mt-1 text-[15px] text-foreground">Pay safely with our secure payment system</p>
                                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Add your preferred payment method</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Review booking details and total cost</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Complete payment via secure checkout</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Receive confirmation by email and in-app</li>
                                </ul>
                                <div className="mt-3 flex justify-center text-muted-foreground"><ArrowRight className="h-4 w-4" /></div>
                            </div>
                        </li>

                        {/* 5 */}
                        <li className="flex gap-4">
                            <span className="shrink-0 h-8 w-8 rounded-full bg-secondary text-primary grid place-items-center text-[13px] font-semibold ring-1 ring-border">5</span>
                            <div className="flex-1">
                                <h3 className="font-semibold text-primary flex items-center gap-2">
                                    <Star className="h-4 w-4 text-muted-foreground" />
                                    Enjoy & Review
                                </h3>
                                <p className="mt-1 text-[15px] text-foreground">
                                    Relax while professionals clean, then share your experience
                                </p>
                                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Track arrivals in real-time</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Chat in-app with providers</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Inspect work and provide feedback</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Leave a review & earn loyalty points</li>
                                </ul>
                            </div>
                        </li>
                    </ol>

                    <CTAButton size="lg" variant="primaryGradient" className="w-full mt-7">
                        Get Started as Customer
                    </CTAButton>
                </section>

                {/* Providers */}
                <section className="rounded-lg bg-card text-card-foreground border border-border shadow-soft p-7 md:p-8">
                    <div className="mx-auto mb-5 h-12 w-12 rounded-full bg-muted grid place-items-center">
                        <ShieldCheck className="h-8 w-8 font-extrabold" />
                    </div>
                    <h2 className="text-[22px] md:text-[24px] font-extrabold tracking-tight text-primary flex items-center justify-center gap-2">
                        For Service Providers
                    </h2>
                    <p className="text-center text-sm text-muted-foreground mt-1.5 mb-7">
                        Want to grow your cleaning business?
                    </p>

                    <ol className="space-y-7">
                        {/* 1 */}
                        <li className="flex gap-4">
                            <span className="shrink-0 h-8 w-8 rounded-full bg-secondary text-primary grid place-items-center text-[13px] font-semibold ring-1 ring-border">1</span>
                            <div className="flex-1">
                                <h3 className="font-semibold text-primary flex items-center gap-2">
                                    <UserPlus className="h-4 w-4 text-muted-foreground" />
                                    Create Provider Account
                                </h3>
                                <p className="mt-1 text-[15px] text-foreground">
                                    Sign up as a professional cleaning service provider
                                </p>
                                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Visit the sign-up page and choose 'Service Provider' account type</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Enter your business name, personal details, and contact information</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Create a strong password and verify your email address</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Agree to our terms of service and provider agreement</li>
                                </ul>
                                <div className="mt-3 flex justify-center text-muted-foreground"><ArrowRight className="h-4 w-4" /></div>
                            </div>
                        </li>

                        {/* 2 */}
                        <li className="flex gap-4">
                            <span className="shrink-0 h-8 w-8 rounded-full bg-secondary text-primary grid place-items-center text-[13px] font-semibold ring-1 ring-border">2</span>
                            <div className="flex-1">
                                <h3 className="font-semibold text-primary flex items-center gap-2">
                                    <FileCheck className="h-4 w-4 text-muted-foreground" />
                                    Complete Verification
                                </h3>
                                <p className="mt-1 text-[15px] text-foreground">
                                    Submit required documents for background checks
                                </p>
                                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Upload a valid government-issued photo ID</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Provide proof of business registration (if applicable)</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Submit insurance certificates (general liability required)</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Complete background check authorization form</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Wait 2–3 business days for verification approval</li>
                                </ul>
                                <div className="mt-3 flex justify-center text-muted-foreground"><ArrowRight className="h-4 w-4" /></div>
                            </div>
                        </li>

                        {/* 3 */}
                        <li className="flex gap-4">
                            <span className="shrink-0 h-8 w-8 rounded-full bg-secondary text-primary grid place-items-center text-[13px] font-semibold ring-1 ring-border">3</span>
                            <div className="flex-1">
                                <h3 className="font-semibold text-primary flex items-center gap-2">
                                    <Settings className="h-4 w-4 text-muted-foreground" />
                                    Set Up Your Profile
                                </h3>
                                <p className="mt-1 text-[15px] text-foreground">
                                    Create an attractive profile to showcase your services
                                </p>
                                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Add a professional profile photo and business logo</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Write a compelling description of your services</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> List your specialties (residential, commercial, deep cleaning, etc.)</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Set your service areas and travel radius</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Upload additional photos of your work (before/after shots)</li>
                                </ul>
                                <div className="mt-3 flex justify-center text-muted-foreground"><ArrowRight className="h-4 w-4" /></div>
                            </div>
                        </li>

                        {/* 4 */}
                        <li className="flex gap-4">
                            <span className="shrink-0 h-8 w-8 rounded-full bg-secondary text-primary grid place-items-center text-[13px] font-semibold ring-1 ring-border">4</span>
                            <div className="flex-1">
                                <h3 className="font-semibold text-primary flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                    Configure Availability
                                </h3>
                                <p className="mt-1 text-[15px] text-foreground">
                                    Set your working hours and booking preferences
                                </p>
                                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Set your weekly availability schedule</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Configure minimum and maximum booking durations</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Set your rates for different service types</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Add any seasonal availability changes</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Enable instant booking or manual approval for requests</li>
                                </ul>
                                <div className="mt-3 flex justify-center text-muted-foreground"><ArrowRight className="h-4 w-4" /></div>
                            </div>
                        </li>

                        {/* 5 */}
                        <li className="flex gap-4">
                            <span className="shrink-0 h-8 w-8 rounded-full bg-secondary text-primary grid place-items-center text-[13px] font-semibold ring-1 ring-border">5</span>
                            <div className="flex-1">
                                <h3 className="font-semibold text-primary flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                                    Start Accepting Bookings
                                </h3>
                                <p className="mt-1 text-[15px] text-foreground">
                                    Begin receiving and managing customer bookings
                                </p>
                                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Receive booking notifications via email and app</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Review customer requests and location details</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Accept or decline bookings based on your availability</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Communicate with customers about service details</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> Track your earnings and manage your business growth</li>
                                </ul>
                            </div>
                        </li>
                    </ol>

                    <CTAButton size="lg" variant="soft" className="w-full mt-7">
                        Get Started as Provider
                    </CTAButton>
                </section>
            </div>

            {/* Important info strip */}
            <section className="mt-10 rounded-xl2 border border-cs-gold/30 bg-secondary/40 text-foreground shadow-soft p-6">
                {/* Title row */}
                <div className="mb-4 flex items-center gap-2 text-[#92400e]">
                    <Info className="h-5 w-5" />
                    <h3 className="text-2xl font-semibold">Important Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Account Security */}
                    <div>
                        <h4 className="font-semibold mb-2 text-primary">Account Security</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                            <li className="flex items-start gap-2">
                                <Lock className="h-4 w-4 text-accent mt-0.5" />
                                <span>Use a strong, unique password for your account</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail className="h-4 w-4 text-accent mt-0.5" />
                                <span>Verify your email address to ensure account security</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Smartphone className="h-4 w-4 text-accent mt-0.5" />
                                <span>Enable notifications to stay updated on your bookings</span>
                            </li>
                        </ul>
                    </div>

                    {/* Verification Process */}
                    <div>
                        <h4 className="font-semibold mb-2 text-primary">Verification Process</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                            <li className="flex items-start gap-2">
                                <Clock className="h-4 w-4 text-accent mt-0.5" />
                                <span>Provider verification typically takes 2–3 business days</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Camera className="h-4 w-4 text-accent mt-0.5" />
                                <span>Ensure all uploaded documents are clear and legible</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Shield className="h-4 w-4 text-accent mt-0.5" />
                                <span>All providers must have valid insurance coverage</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <h3 className="text-center text-3xl md:text-3xl font-bold mt-14">Frequently Asked Questions</h3>
            <p className="text-center text-base text-muted-foreground mt-2 mb-6">
                Find answers to the most common questions about getting started with Crown Standard.
            </p>

            <div className="space-y-5 mx-auto w-[60%]">
                {faqs.map((group) => (
                    <div
                        key={group.group}
                        className="overflow-hidden"
                    >
                        <div className="px-4 py-2 pl-5 text-base font-semibold bg-secondary/60 text-primary">
                            {group.group}
                        </div>

                        <div className="">
                            {group.items.map(({ q, a }) => (
                                <details
                                    key={q}
                                    className="group [&_summary::-webkit-details-marker]:hidden mb-3 border"
                                >
                                    <summary className="cursor-pointer px-4 py-3 flex items-center justify-between hover:bg-secondary/30 transition">
                                        <span className="text-sm">{q}</span>
                                        <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                                    </summary>

                                    <div className="px-4 pb-4 text-sm text-muted-foreground bg-muted/30">
                                        {a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom help card */}
            <section className="mt-12 rounded-xl2 border border-border bg-gradient-to-r from-accent/20 via-cs-cream/40 to-accent/20 p-6 text-center w-[60%] mx-auto">
                <div className="mx-auto h-14 w-14 rounded-full bg-cs-gold/40 grid place-items-center text-cs-gold mb-2">
                    <HelpCircle className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold">Still Have Questions?</h4>
                <p className="text-sm text-muted-foreground max-w-xl mx-auto mt-1">
                    Our friendly support team is here to help you get started and succeed on Crown Standard.
                </p>
                <div className="mt-4 flex items-center justify-center gap-3">
                    <Link
                        href="/support"
                        className="text-sm font-semibold px-4 py-2.5 rounded-md bg-primary text-primary-foreground hover:opacity-90 shadow-sm"
                    >
                        Contact Support
                    </Link>
                    <Link href="/">
                        <CTAButton variant="soft">Back to Home</CTAButton>
                    </Link>
                </div>
            </section>
        </div>
    );
}
