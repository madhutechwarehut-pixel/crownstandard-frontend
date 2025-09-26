// components/ui/LabeledInput.tsx
import type { ReactNode } from "react";

export default function LabeledInput({
  label,
  children,
  inline = false,
}: {
  label: string;
  children: ReactNode;
  inline?: boolean; // toggle inline layout
}) {
  return (
    <label
      className={[
        "w-full",
        inline ? "flex flex-col gap-1 md:flex-row md:items-center md:gap-3" : "flex flex-col gap-1",
      ].join(" ")}
    >
      <span className="text-sm font-semibold text-gray-800 shrink-0">{label}</span>
      <div className="flex-1">{children}</div>
    </label>
  );
}
