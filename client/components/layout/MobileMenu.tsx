"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={cn(
            "h-[2px] w-6 bg-cyan-300 transition-transform",
            open && "translate-y-[6.5px] rotate-45"
          )}
        />
        <span
          className={cn(
            "h-[2px] w-6 bg-cyan-300 transition-opacity",
            open && "opacity-0"
          )}
        />
        <span
          className={cn(
            "h-[2px] w-6 bg-cyan-300 transition-transform",
            open && "-translate-y-[6.5px] -rotate-45"
          )}
        />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-[72px] border-b border-cyan-400/10 bg-[#0a1a33] px-4 pb-6 pt-2 shadow-xl">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-[0.1em]",
                    isActive
                      ? "bg-cyan-400/10 text-cyan-400"
                      : "text-slate-200 hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-cyan-400 px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.1em] text-[#061021]"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}