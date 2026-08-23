import Link from "next/link";
import { company } from "@/lib/constants/company";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { siteCopy } from "@/lib/constants/siteCopy";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="c-width">
        <div className="site-footer-grid">
          <div>
            <div className="flex items-center gap-3">
              <div className="site-footer-logo">
                <Image
                  src={logo.src}
                  alt={company.name}
                  width={50}
                  height={28}
                />
              </div>
            </div>
            <p className="site-footer-description normal-small">
              {company.name} — {siteCopy.footer.description}
            </p>
            <p className="site-footer-detail normal-small">{company.licence} {company.gstin}</p>
          </div>

          <div>
            <h3 className="site-footer-heading normal-xsmall">
              {siteCopy.footer.explore}
            </h3>
            <ul className="site-footer-links normal-small">
              <li>
                <Link href="/">{siteCopy.navigation.home}</Link>
              </li>
              <li>
                <Link href="/about">{siteCopy.navigation.about}</Link>
              </li>
              <li>
                <Link href="/services">{siteCopy.navigation.services}</Link>
              </li>
              <li>
                <Link href="/contact">{siteCopy.navigation.contact}</Link>
              </li>
              <li>
                <Link href="/quote">{siteCopy.navigation.quote}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="site-footer-heading normal-xsmall">
              {siteCopy.footer.reachUs}
            </h3>
            <ul className="site-footer-links normal-small">
              <li>
                {company.address["line-1"]}<br />
                {company.address["line-2"]}<br />
                {company.address["line-3"]}
              </li>
              <li>{company.phone}</li>
              <li>{company.phoneAlt}</li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer-bottom normal-small">
          <p>© 2026 {company.name}. {siteCopy.footer.copyright}</p>
          <p>{siteCopy.brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
