import Link from "next/link";
import { homeCopy } from "@/lib/constants/home";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <video
        src="/video/456206_Containers_Shipping_Containers.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="home-hero-image absolute"
      />
      <div className="home-hero-overlay" />
      <div className="home-shell home-hero-content">
        <div className="c-width reveal-on-scroll">
          <h1 className="title-5xl pointer-events-none">
            {homeCopy.hero.titleLines[0]}
            <br />
            {homeCopy.hero.titleLines[1]}
          </h1>
          <p className="home-hero-copy normal-small pointer-events-none">
            {homeCopy.hero.description}
          </p>
          <Link href="/services" className="home-button normal-xsmall">
            {homeCopy.hero.button} <span>↗</span>
          </Link>  
        </div>
      </div>
      <div className="home-hero-word title-10xl reveal-on-scroll" aria-hidden="true">
        {homeCopy.hero.brand}
      </div>
    </section>
  );
}
