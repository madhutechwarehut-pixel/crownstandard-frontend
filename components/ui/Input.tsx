// components/ui/Input.tsx
import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
};

export default function Input({ label, icon, error, className = "", ...props }: Props) {
  return (
    <div className="space-y-1">
      {label && <label className="block text-sm text-[#6B7280]">{label}</label>}
      <div className={`flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-[#F7F7F7] px-3 ${className}`}>
        {icon && <span className="text-[#9CA3AF]">{icon}</span>}
        <input
          className="h-11 w-full bg-transparent outline-none text-sm placeholder:text-[#9CA3AF]"
          {...props}
        />
      </div>
      {error && <p className="text-xs text-[#DC2626]">{error}</p>}
    </div>
  );
}
