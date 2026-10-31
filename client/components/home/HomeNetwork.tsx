"use client";

import { useRef } from "react";
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
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: number) => {
    carouselRef.current?.scrollBy({
      left: direction * carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

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
          <div className='flex flex-col md:flex-row gap-4 md:justify-between'>
            <p className="normal-small">{homeCopy.network.description}</p>
            <div
              className="home-network-controls"
              aria-label="Network partners carousel controls"
            >
              <button
                type="button"
                onClick={() => scrollCarousel(-1)}
                aria-label="Previous network partner"
              >
                <span aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-left h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </span>
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel(1)}
                aria-label="Next network partner"
              >
                <span aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="home-network-carousel">
          <div className="home-network-grid" ref={carouselRef}>
            {homeCopy.network.partners.map((partner) => (
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
      </div>
    </section>
  );
}
