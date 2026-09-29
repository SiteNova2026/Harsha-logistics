import Image from "next/image";
import Link from "next/link";
import { homeCopy } from "@/lib/constants/home";

export default function HomeAbout() {
  return (
    <section className="home-section home-about">
      <div className="home-shell c-width home-about-grid">
        <div>
          <p className="home-kicker-1 normal-xsmall">{homeCopy.about.eyebrow}</p>
          <h2 className="title-3xl">{homeCopy.about.title}</h2>
          <p className="home-about-copy normal-small">
            {homeCopy.about.description}
          </p>
          <div className="home-stats">
            {homeCopy.about.stats.map((stat) => (
              <div key={stat.label}>
                <strong className="title-xl">{stat.value}</strong>
                <span className="normal-xsmall">{stat.label}</span>
              </div>
            ))}
          </div>
          <Link href={homeCopy.about.linkHref} className="home-about-link normal-small mt-2 md:mt-4">
            {homeCopy.about.linkLabel} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="home-about-image">
          <Image
            src="/images/port-cranes.jpg"
            alt={homeCopy.about.imageAlt}
            fill
            sizes="(max-width: 991px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
