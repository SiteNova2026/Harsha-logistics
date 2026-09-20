const partners = [
  {
    code: "TH",
    country: "Thailand",
    company: "BANGKOK FREIGHT ALLIANCE",
    description:
      "Ocean and air consolidation partner covering Laem Chabang and Bangkok airport, with weekly LCL boxes to Chennai.",
    locations: "Bangkok · Laem Chabang",
    route: "Laem Chabang → Chennai · Bangkok → Chennai (Air)",
  },
  {
    code: "ID",
    country: "Indonesia",
    company: "NUSANTARA CARGO SERVICES",
    description:
      "Full-service agent for FCL, LCL and customs brokerage across Tanjung Priok and Semarang.",
    locations: "Jakarta · Semarang",
    route: "Jakarta → Chennai · Semarang → Tuticorin",
  },
  {
    code: "RU",
    country: "Russia",
    company: "VOSTOK LOGISTICS GROUP",
    description:
      "Multimodal partner handling sea-rail movements and inland distribution across the Russian Federation.",
    locations: "Vladivostok · Moscow",
    route: "Vladivostok → Chennai · Moscow (Rail-Sea)",
  },
];

function NetworkIcon({ type }: { type: "location" | "route" }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      viewBox="0 0 24 24"
      width="18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
    >
      {type === "location" ? (
        <>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      ) : (
        <>
          <circle cx="5" cy="7" r="2" />
          <circle cx="19" cy="17" r="2" />
          <path d="M7 7h5a3 3 0 0 1 3 3v4a3 3 0 0 0 3 3h0M7 17h5" />
        </>
      )}
    </svg>
  );
}

export default function HomeNetwork() {
  return (
    <section className="home-section home-network ">
      <div className="home-shell c-width">
        <div className="home-section-heading home-section-heading-light">
          <div>
            <p className="home-kicker-1 normal-xsmall">
              Trusted partnership companies
            </p>
            <h2 className="title-3xl">A network you can rely on</h2>
          </div>
          <p className="normal-small">
            Our overseas agents act as our own offices, handling bookings,
            customs and delivery at origin and destination.
          </p>
        </div>
        <div className="home-network-grid">
          {partners.map((partner) => (
            <div className="home-network-card" key={partner.country}>
              <div className="home-network-card-heading">
                <strong className="normal-small">{partner.code}</strong>
                <div>
                  <h3 className="title-xl">{partner.country}</h3>
                  <p className="normal-xsmall">{partner.company}</p>
                </div>
              </div>
              <p className="home-network-description normal-small">
                {partner.description}
              </p>
              <div className="home-network-routes">
                <small className="normal-small">
                  <NetworkIcon type="location" />
                  {partner.locations}
                </small>
                <small className="normal-small">
                  <NetworkIcon type="route" />
                  {partner.route}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
