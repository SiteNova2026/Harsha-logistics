import Image from "next/image";
import Link from "next/link";
import { homeCopy } from "@/lib/constants/home";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <Image
        src="/images/home-hero-ship.jpg"
        alt={homeCopy.hero.imageAlt}
        fill
        sizes="100vw"
        priority
        className="home-hero-image"
      />
      <div className="home-hero-overlay" />
      <div className="home-shell home-hero-content">
        <div className="c-width">
          <h1 className="title-5xl">
            {homeCopy.hero.titleLines[0]}
            <br />
            {homeCopy.hero.titleLines[1]}
          </h1>
          <p className="home-hero-copy normal-small">
            {homeCopy.hero.description}
          </p>
          <Link href="/services" className="home-button normal-xsmall">
            {homeCopy.hero.button} <span>↗</span>
          </Link>  
        </div>
      </div>
      <div className="home-hero-word title-10xl" aria-hidden="true">
        {homeCopy.hero.brand}
      </div>
    </section>
  );
}
