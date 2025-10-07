import Image from "next/image";
import Link from "next/link";

interface BannerProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  page: string;
}

export default function BannerSection({ title, subtitle, imageUrl, page }: BannerProps) {
  const Content = (
    <div className="absolute inset-0 flex items-center justify-center px-4">
      <div className="max-w-5xl text-center text-white">
        {/* breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/80">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="opacity-60">/</span>
          <span className="font-medium text-yellow-500">{page}</span>
        </nav>

        {/* title */}
        <h1 className="mt-3 text-2xl font-bold md:text-4xl lg:text-5xl drop-shadow-md">
          {title}
        </h1>

        {/* subtitle */}
        {subtitle && (
          <p className="max-w-3xl mx-auto lg:mt-4 text-sm lg:text-lg leading-relaxed text-white/85 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );

  const Overlays = (
    <>
      <div className="absolute inset-0 bg-[#D9D9D9] mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(41,48,58,0.38)] to-[#1F2937]" />
    </>
  );

  return (
    <section className="relative w-full">
      {/* Mobile: height-centric */}
      <div className="relative block md:hidden w-full h-[360px] sm:h-[420px]">
        <Image src={imageUrl} alt={title} fill priority className="object-cover" />
        {Overlays}
        {Content}
      </div>

      {/* Desktop: width-centric */}
      <div className="relative hidden w-full md:block">
        <Image
          src={imageUrl}
          alt={title}
          width={1920}
          height={600}   // baseline aspect ratio
          priority
          className="object-cover w-full h-auto"
        />
        {Overlays}
        {Content}
      </div>

      {/* gold line below */}
      <div
        className={`absolute bottom-[-48px] left-1/2 h-24 w-px -translate-x-1/2 ${page === "Services" ? "bg-white" : "bg-brand-gold"
          }`}
      />
    </section>
  );
}
