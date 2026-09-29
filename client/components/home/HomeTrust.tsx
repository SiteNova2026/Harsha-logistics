import { homeCopy } from "@/lib/constants/home";

export default function HomeTrust() {
  return (
    <section className="home-section home-trust c-width">
      <div className="home-shell">
        <div className="home-section-heading home-section-heading-light reveal-on-scroll">
          <div>
            <p className="home-kicker normal-xsmall">{homeCopy.trust.eyebrow}</p>
            <h2 className="title-3xl">{homeCopy.trust.title}</h2>
          </div>
          <p className="normal-small">
            {homeCopy.trust.description}
          </p>
        </div>
        <div className="home-trust-grid">
          {homeCopy.trust.items.map((item, index) => (
            <div className="home-trust-card reveal-on-scroll" key={index+1}>
              <span className="normal-lg">0{index + 1}</span>
              <h3 className="normal-lg">{item.title}</h3>
              <p className="normal-small">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
