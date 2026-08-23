"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { siteCopy } from "@/lib/constants/siteCopy";

const navItems = [
  { label: siteCopy.navigation.home, href: "/" },
  { label: siteCopy.navigation.about, href: "/about" },
  { label: siteCopy.navigation.services, href: "/services" },
  { label: siteCopy.navigation.contact, href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="mobile-menu">
      <button
        aria-label={open ? siteCopy.navigation.close : siteCopy.navigation.open}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={cn(
            "mobile-menu-line",
            open && "translate-y-[6.5px] rotate-45"
          )}
        />
        <span
          className={cn(
            "mobile-menu-line",
            open && "opacity-0"
          )}
        />
        <span
          className={cn(
            "mobile-menu-line",
            open && "-translate-y-[6.5px] -rotate-45"
          )}
        />
      </button>

      {open && (
        <div className="mobile-menu-panel">
          <nav className="mobile-menu-nav">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "mobile-menu-link normal-small",
                    isActive
                      ? "mobile-menu-link-active"
                      : ""
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="mobile-menu-quote normal-xsmall"
            >
              {siteCopy.navigation.quote}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}