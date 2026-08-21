"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-10 md:flex">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-xs font-bold uppercase tracking-[0.12em] transition-colors",
              isActive
                ? "text-cyan-400"
                : "text-slate-200 hover:text-cyan-300"
            )}
          >
            {item.label}
          </Link>
        );
      })}
       <Link
          href="/quote"
          className="hidden rounded-full bg-cyan-400 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-[#061021] shadow-[0_0_20px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300 md:inline-flex"
        >
          Get Quote
        </Link>
    </nav>
  );
}