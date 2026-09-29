import Link from "next/link";
import { homeCopy } from "@/lib/constants/home";

export default function HomeExplore() {
  return (
    <section className="home-explore">
      <div className="home-explore-overlay" />
      <div className="home-shell c-width home-explore-grid">
        {homeCopy.explore.links.map((link) => (
          <div className="home-explore-item" key={link.label}>
            <p className="home-kicker-1 normal-xsmall">{link.label}</p>
            <h2 className="title-xl">{link.title}</h2>
            <Link href={link.href} className="normal-xsmall">
              {homeCopy.explore.linkLabel} <span aria-hidden="true">→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
