type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "primaryGradient" | "soft" | "muted";
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-sm",
};

export default function CTAButton({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Props) {
  const base = "rounded-md font-medium transition shadow-sm";
  const styles =
    variant === "primaryGradient"
      ? "text-white bg-gradient-to-r from-[#1E2430] to-[#12161D] hover:opacity-95"
      : variant === "primary"
      ? "text-white bg-cs-charcoal hover:opacity-90"
      : variant === "soft"
      ? "bg-white text-cs-charcoal border border-cs-border hover:bg-cs-gold"
      : "bg-white text-cs-text border border-cs-border hover:bg-cs-paper";

  return (
    <button {...props} className={`${base} ${sizeMap[size]} ${styles} ${className}`} />
  );
}
