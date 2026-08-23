"use client";

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

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "site-nav-link normal-xsmall",
              isActive
                ? "site-nav-link-active"
                : ""
            )}
          >
            {item.label}
          </Link>
        );
      })}
       <Link
          href="/quote"
          className="site-quote-link normal-xsmall"
        >
          {siteCopy.navigation.quote}
        </Link>
    </nav>
  );
}