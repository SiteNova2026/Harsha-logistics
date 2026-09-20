import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <Image
        src="/images/home-hero-ship.jpg"
        alt="Container ship crossing open water"
        fill
        priority
        className="home-hero-image"
      />
      <div className="home-hero-overlay" />
      <div className="home-shell home-hero-content">
        <div className="c-width">
          <h1 className="title-5xl">
            Reliable global
            <br />
            shipping solutions
          </h1>
          <p className="home-hero-copy normal-small">
            Your strategic partner for delivering efficient logistics, freight
            forwarding, and cargo handling worldwide.
          </p>
          <Link href="/services" className="home-button normal-xsmall">
            Discover our services <span>↗</span>
          </Link>  
        </div>
      </div>
      <div className="home-hero-word title-10xl" aria-hidden="true">
        HARSHAVARDHANI
      </div>
    </section>
  );
}
