import type { ReactNode } from "react";
import Image from "next/image";

export default function SubsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#FFF8F0] overflow-hidden">
      {/* Top-left decorative illustration */}
      <div className="absolute top-0 left-0 pointer-events-none select-none">
        <Image
          src="/auth-illustration.png"
          alt="Background Illustration"
          width={700}
          height={700}
          className="object-contain opacity-90"
          priority
        />
      </div>

      {/* Main content wrapper */}
      <main className="relative z-10 w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
