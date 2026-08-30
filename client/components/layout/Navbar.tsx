"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { siteCopy } from "@/lib/constants/siteCopy";
import { servicesCopy } from "@/lib/constants/services";

const navItems = [
  { label: siteCopy.navigation.home, href: "/" },
  { label: siteCopy.navigation.about, href: "/about" },
  { label: siteCopy.navigation.services, href: "/services" },
  { label: siteCopy.navigation.contact, href: "/contact" },
];
const servicesSubItems = [
  { label: servicesCopy.items[0]?.label, href: servicesCopy.items[0]?.href },
  { label: servicesCopy.items[1]?.label, href: servicesCopy.items[1]?.href },
  { label: servicesCopy.items[2]?.label, href: servicesCopy.items[2]?.href },
  { label: servicesCopy.items[3]?.label, href: servicesCopy.items[3]?.href },
  { label: servicesCopy.items[4]?.label, href: servicesCopy.items[4]?.href },
  { label: servicesCopy.items[5]?.label, href: servicesCopy.items[5]?.href },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href === "/services" && pathname.startsWith("/services"));

        if (item.href === "/services") {
          return (
            <div className="site-nav-item site-nav-dropdown" key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "site-nav-link normal-xsmall site-nav-link-with-caret",
                  isActive ? "site-nav-link-active" : ""
                )}
              >
                <span>{item.label}</span>
                <span className="site-nav-caret" aria-hidden="true">▾</span>
              </Link>

              <div className="site-nav-dropdown-menu">
                {servicesSubItems.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href ?? "/services"}
                    className={cn(
                      "site-nav-sub-link normal-xsmall",
                      pathname === subItem.href ? "site-nav-sub-link-active" : ""
                    )}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "site-nav-link normal-xsmall",
              isActive ? "site-nav-link-active" : ""
            )}
          >
            {item.label}
          </Link>
        );
      })}
      <Link href="/quote" className="site-quote-link normal-xsmall">
        {siteCopy.navigation.quote}
      </Link>
    </nav>
  );
}