// components/auth/RoleToggle.tsx
import Link from "next/link";

export type UserType = "customer" | "provider";

export default function RoleToggle({ value }: { value: UserType }) {
  const items: { key: UserType; title: string; desc: string }[] = [
    { key: "customer", title: "Customer", desc: "Access Customer dashboard" },
    { key: "provider", title: "Provider", desc: "Access Provider dashboard" },
  ];
  return (
    <div className="grid grid-cols-1 gap-3">
      {items.map((it) => {
        const active = value === it.key;
        return (
          <Link
            key={it.key}
            href={`?type=${it.key}`}
            className={[
              "rounded-lg border px-4 py-3 text-left transition",
              active
                ? "border-[#B8892D] bg-[#FFF8E8] shadow-[0_0_0_1px_#B8892D_inset]"
                : "border-[#E5E7EB] hover:bg-black/5",
            ].join(" ")}
            aria-current={active ? "true" : undefined}
          >
            <div className="flex items-center gap-3">
              <span
                className={[
                  "grid h-5 w-5 place-items-center rounded-full border",
                  active ? "border-[#B8892D] bg-[#B8892D]" : "border-[#D1D5DB] bg-white",
                ].join(" ")}
              >
                {active && <span className="h-2.5 w-2.5 rounded-full bg-white" />}
              </span>
              <div>
                <p className="font-medium">{it.title}</p>
                <p className="text-xs text-[#6B7280]">{it.desc}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
