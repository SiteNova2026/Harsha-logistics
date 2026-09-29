"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { company } from "@/lib/constants/company";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import { siteCopy } from "@/lib/constants/siteCopy";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}
    >
      <div className="site-header-container c-width">
        <Link href="/" className="site-brand">
          <div className="site-brand-copy block">
            <div className="site-brand-name normal-xsmall">
              {company.shortName}
            </div>
            <div className="site-brand-tagline normal-xsmall">
              {siteCopy.brand.logistics}
            </div>
          </div>
        </Link>

        <Navbar />

        <MobileMenu />
      </div>
    </header>
  );
}
