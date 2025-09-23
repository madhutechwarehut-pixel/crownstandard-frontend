import BannerSection from "@/components/BannerSection";
import MissionSection from "@/components/MissionSection";
import AboutTwoCards from "@/components/AboutTwoCards";
import WhyChooseGrid from "@/components/WhyChooseGrid";
import WhyChooseStats from "@/components/WhyChooseStats";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <>
      <BannerSection
        title="Redefining Professional Cleaning Services"
        subtitle="Crown Standard is Canada's leading platform connecting customers with verified, professional cleaning services. We've built a trusted community where quality meets convenience, making professional cleaning accessible to everyone."
        imageUrl="/about-banner.png"
        page="About Crown Standard"
      />

      <MissionSection />
      <AboutTwoCards backgroundUrl="/about-pattern.png" />
      <WhyChooseGrid patternUrl="/pattern-top-left.png" />
      <WhyChooseStats backgroundUrl="/about-banner.png" />
      <HowItWorks/>
      <CTASection patternUrl="/pattern-top-left.png" />

    </>
  );
}
