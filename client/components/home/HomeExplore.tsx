import Link from "next/link";

const links = [
  {
    label: "About",
    title: "Vision beyond limits",
    href: "/about",
  },
  {
    label: "Services",
    title: "Strength beyond borders",
    href: "/services",
  },
  {
    label: "Contact",
    title: "Connect beyond distance",
    href: "/contact",
  },
];

export default function HomeExplore() {
  return (
    <section className="home-explore">
      <div className="home-explore-overlay" />
      <div className="home-shell c-width home-explore-grid">
        {links.map((link) => (
          <div className="home-explore-item" key={link.label}>
            <p className="home-kicker-1 normal-xsmall">{link.label}</p>
            <h2 className="title-xl">{link.title}</h2>
            <Link href={link.href} className="normal-xsmall">
              Check more <span aria-hidden="true">→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
