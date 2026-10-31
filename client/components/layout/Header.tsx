"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { company } from "@/lib/constants/company";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import desktopLogo from "../../public/images/harshavardhani_logo_white.png";
import mobileLogo from "../../public/images/logo_hq.png";

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
            <img src={desktopLogo.src} alt={company.name} className="hidden md:flex" width={120} height={40} />
            <img src={mobileLogo.src} alt={company.name} className="md:hidden" width={50} height={40} />
          </div>
        </Link>

        <Navbar />

        <MobileMenu />
      </div>
    </header>
  );
}
