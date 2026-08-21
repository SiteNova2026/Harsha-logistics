"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { company } from "@/lib/constants/company";
import Navbar from "@/components/layout/Navbar";
import logo from '../../public/images/logo.png';
import MobileMenu from "@/components/layout/MobileMenu";

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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[rgba(7,29,52,0.6)] backdrop-blur-xl shadow-[0_12px_40px_rgba(4,12,22,0.28)]"
          : "bg-transparent"
      }`}
    >
      <div className="c-width relative mx-auto flex h-[72px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src= {logo.src}
            alt={company.name}
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <div className="leading-tight">
            <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--foreground)]">
              {company.shortName}
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-[rgba(110,195,255,0.5)]">
              Logistics &amp; Freight
            </div>
          </div>
        </Link>

        <Navbar />

        <MobileMenu />
      </div>
    </header>
  );
}
