import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-cs-border">
      <div className="mx-auto max-w-[80%] px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-12 w-12 rounded bg-cs-gold/20 border border-cs-border overflow-hidden grid place-items-center">
            <Image
              src="/logo.png"
              alt="Crown Standard"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-cs-charcoal text-xl">Crown Standard</div>
            <div className="text-sm text-cs-sub">Cleaning Co.</div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-9 text-base text-cs-charcoal">
          <Link href="/" className="hover:text-cs-gold">Home</Link>
          <Link href="/how-to-get-started" className="hover:text-cs-gold">Get Started</Link>
          <Link href="#" className="hover:text-cs-gold">About</Link>
          <Link href="#" className="hover:text-cs-gold">Services</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-semibold px-4 py-2.5 rounded-md bg-primary text-primary-foreground hover:opacity-90 shadow-sm"
          >
            Customer Login
          </Link>
          <Link
            href="/provider/login"
            className="text-sm font-medium px-4 py-2.5 rounded-md bg-white text-cs-charcoal border border-cs-border hover:bg-cs-gold"
          >
            Provider Login
          </Link>
        </div>
      </div>
    </header>
  );
}
