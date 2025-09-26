// components/ui/Pill.tsx
import type { ReactNode } from "react";

export default function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 text-sm border rounded-full">
      {children}
    </span>
  );
}
