import Image from "next/image";

export default function HomeAbout() {
  return (
    <section className="home-section home-about">
      <div className="home-shell c-width home-about-grid">
        <div>
          <p className="home-kicker-1 normal-xsmall">About</p>
          <h2 className="title-3xl">Vision beyond limits</h2>
          <p className="home-about-copy normal-small">
            From humble beginnings in Chennai, Harshavardhani Shipping &amp;
            Forwarding has grown into a trusted partner for businesses moving
            cargo around the world.
          </p>
          <div className="home-stats">
            <div>
              <strong className="title-xl">13+</strong>
              <span className="normal-xsmall">Years of experience</span>
            </div>
            <div>
              <strong className="title-xl">All</strong>
              <span className="normal-xsmall">Major Indian ports</span>
            </div>
            <div>
              <strong className="title-xl">24/7</strong>
              <span className="normal-xsmall">Operational desk</span>
            </div>
          </div>
        </div>
        <div className="home-about-image">
          <Image
            src="/images/port-cranes.jpg"
            alt="Port cranes and containers at dusk"
            fill
          />
        </div>
      </div>
    </section>
  );
}
