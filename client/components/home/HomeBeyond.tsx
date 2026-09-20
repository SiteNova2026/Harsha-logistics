"use client";

import { useRef } from "react";
import Link from "next/link";
import otherConsultancyImage from "../../public/images/other-consultanc.jpg";
import dataImage from "../../public/images/other-data.jpg";
import aeoImage from "../../public/images/other-aeo.jpg";
import licensingImage from "../../public/images/other-licenses.jpg";
import storageImage from "../../public/images/other-storage.jpg";

const services = [
  {
    title: "EXIM Consultancy Services",
    description:
      "Advisory on trade policy, incoterms, licensing and compliance for importers and exporters.",
    icon: "consultancy",
    image: otherConsultancyImage,
  },
  {
    title: "PAN India EXIM Data Services",
    description:
      "Market and shipment data across Indian ports to help you benchmark rates and find buyers.",
    icon: "data",
    image: dataImage,
  },
  {
    title: "AEO Authorisation",
    description:
      "End-to-end support in obtaining and maintaining Authorised Economic Operator status.",
    icon: "aeo",
    image: aeoImage,
  },
  {
    title: "Commodity & Duty Supported Licensese",
    description:
      "Assistance with advance authorisation, EPCG, MEIS/RoDTEP and commodity-specific permits.",
    icon: "licensing",
    image: licensingImage,
  },
  {
    title: "Storage & Distribution Services",
    description:
      "Nationwide storage, order fulfilment and last-mile distribution for imported stock.",
    icon: "storage",
    image: storageImage,
  },
];

function ServiceIcon({ name }: { name: string }) {
  const paths = {
    consultancy: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18M10 12v2h4v-2" />
      </>
    ),
    data: (
      <>
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M18 17V9M13 17V5M8 17v-3" />
      </>
    ),
    aeo: (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    licensing: (
      <>
        <path d="M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3" />
        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
        <path d="m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88" />
        <circle cx="6" cy="14" r="3" />
      </>
    ),
    storage: (
      <>
        <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
        <path d="m7 16.5-4.74-2.85"></path>
        <path d="m7 16.5 5-3"></path>
        <path d="M7 16.5v5.17"></path>
        <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
        <path d="m17 16.5-5-3"></path>
        <path d="m17 16.5 4.74-2.85"></path>
        <path d="M17 16.5v5.17"></path>
        <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
        <path d="M12 8 7.26 5.15"></path>
        <path d="m12 8 4.74-2.85"></path>
        <path d="M12 13.5V8"></path>
      </>
    ),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name as keyof typeof paths]}
    </svg>
  );
}

export default function HomeBeyond() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: number) => {
    carouselRef.current?.scrollBy({
      left: direction * carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="home-section home-section-blue home-beyond">
      <div className="home-shell c-width">
        <div className="home-section-heading">
          <div>
            <p className="home-kicker-1 normal-xsmall">Other services</p>
            <h2 className="title-3xl">Beyond the freight</h2>
          </div>
          <p className="normal-small">
            Consultancy, data and compliance support that helps Indian importers
            and exporters trade smarter not just ship faster.
          </p>
        </div>
        <div className="home-beyond-carousel">
          <div
            className="home-beyond-controls"
            aria-label="Other services carousel controls"
          >
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              aria-label="Previous other service"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              aria-label="Next other service"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="home-beyond-grid" ref={carouselRef}>
            {services.map((service, index) => (
              <article key={service.title} className="home-beyond-card">
                <div
                  className={`home-beyond-image home-beyond-image-${index + 1}`}
                  style={{ backgroundImage: `url(${service.image.src})` }}
                >
                  <span className="home-beyond-icon" aria-hidden="true">
                    <ServiceIcon name={service.icon} />
                  </span>
                </div>
                <h3 className="normal-lg">{service.title}</h3>
                <p className="normal-small">
                  Advisory and practical support for confident international
                  trade.
                </p>
                <Link href="/contact" className="normal-xsmall">
                  Talk to us →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
