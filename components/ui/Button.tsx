// components/ui/Button.tsx
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: "gold" | "dark" | "ghost";
  full?: boolean;
};

export default function Button({ className = "", variant = "gold", full, ...props }: Props) {
  const base =
    "h-11 px-4 inline-flex items-center justify-center rounded-full text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const styles: Record<string, string> = {
    gold:
      "bg-[#B8892D] text-white hover:brightness-110 active:brightness-95 focus-visible:ring-[#B8892D] ring-offset-transparent",
    dark:
      "bg-[#121926] text-white hover:opacity-90 active:opacity-80 focus-visible:ring-[#121926] ring-offset-transparent",
    ghost:
      "bg-transparent text-[#121926] hover:bg-black/5 focus-visible:ring-[#B8892D] ring-offset-transparent",
  };
  return (
    <button
      className={`${base} ${styles[variant]} ${full ? "w-full" : ""} ${className}`}
      {...props}
    />
  );
}
