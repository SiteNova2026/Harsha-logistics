const trustItems = [
  { title: "Reliable Global Shipping", description: "Carrier allocations and agent partners on every major lane keep your cargo moving on schedule." },
  { title: "Experienced Logistics Team", description: "Licensed customs brokers and route specialists with over a decade at India's busiest ports." },
  { title: "End-to-End Solutions", description: "Booking, haulage, customs, warehousing and delivery managed under one accountable team." },
  { title: "Global Network", description: "Trusted overseas agents across Asia and Europe giving you local expertise at both ends." },
  { title: "Fast & Efficient Delivery", description: "Documents filed ahead of arrival so cargo clears quickly and demurrage stays at zero." },
  { title: "Customer-Focused Service", description: "A named coordinator, transparent pricing and a 24/7 operations desk you can actually reach." },
];

export default function HomeTrust() {
  return (
    <section className="home-section home-trust c-width">
      <div className="home-shell">
        <div className="home-section-heading home-section-heading-light">
          <div>
            <p className="home-kicker normal-xsmall">Why choose us</p>
            <h2 className="title-3xl">Built on trust, proven at every port</h2>
          </div>
          <p className="normal-small">
            Importers and exporters stay with Harsha because we combine deep
            local knowledge with a genuinely global reach.
          </p>
        </div>
        <div className="home-trust-grid">
          {trustItems.map((item, index) => (
            <div className="home-trust-card" key={index+1}>
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
