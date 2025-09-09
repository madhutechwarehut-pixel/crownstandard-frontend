import CTAButton from "./CTAButton";

export default function FeatureCard({
  icon,
  title,
  desc,
  ctaLabel,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  ctaLabel: string;
  onClick?: () => void;
}) {
  return (
    <div className="rounded-lg bg-cs-paper shadow-soft border border-cs-border p-6 text-center">
      <div className="mx-auto h-10 w-10 rounded-full bg-gray-200 grid place-items-center text-cs-charcoal/80 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-cs-sub mb-4">{desc}</p>
      <div className="mx-auto max-w-xs">
        <CTAButton variant="soft" className="w-full" onClick={onClick}>
          {ctaLabel}
        </CTAButton>
      </div>
    </div>
  );
}
