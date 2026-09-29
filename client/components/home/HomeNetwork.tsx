import { homeCopy } from "@/lib/constants/home";

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
        <div className="home-section-heading home-section-heading-light reveal-on-scroll">
          <div>
            <p className="home-kicker-1 normal-xsmall">
              {homeCopy.network.eyebrow}
            </p>
            <h2 className="title-3xl">{homeCopy.network.title}</h2>
          </div>
          <p className="normal-small">
            {homeCopy.network.description}
          </p>
        </div>
        <div className="home-network-grid">
          {homeCopy.network.partners.map((partner) => (
            <div className="home-network-card reveal-on-scroll" key={partner.country}>
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
