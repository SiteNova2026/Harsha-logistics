import Link from "next/link";
import { company } from "@/lib/constants/company";
import Image from "next/image";
import logo from "../../public/images/logo.png";
export default function Footer() {
  return (
    <footer className="mt-20  text-slate-200">
      <div className="c-width">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.3fr_0.7fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-30 w-40 items-center justify-center rounded-lg bg-white text-sm font-bold">
                <Image
                  src={logo.src}
                  alt={company.name}
                  width={50}
                  height={28}
                />
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-slate-300">
              {company.name} — a Chennai based shipping agency and customs
              house, serving Indian importers and exporters with pride since
              2011.
            </p>
            <p className="mt-4 text-sm text-slate-300">{company.licence}</p>
            <p className="mt-1 text-sm text-slate-300">GSTIN {company.gstin}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/quote">Get Quote</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Reach Us
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>{company.address}</li>
              <li>{company.phone}</li>
              <li>{company.phoneAlt}</li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {company.name}. All rights reserved.</p>
          <p>Serving with Pride</p>
        </div>
      </div>
    </footer>
  );
}
