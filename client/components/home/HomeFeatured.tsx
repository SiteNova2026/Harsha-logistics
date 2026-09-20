"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { servicesCopy } from "@/lib/constants/services";
import airImage from "../../public/images/air-freight.jpg";
import oceanImage from "../../public/images/svc-ocean.jpg";
import customsImage from "../../public/images/svc-customs.jpg";
import roadImage from "../../public/images/container-yard.jpg";
import packagingImage from "../../public/images/svc-courier.jpg";
import warehousingImage from "../../public/images/svc-warehouse.jpg";

const serviceImages: Record<string, StaticImageData> = {
  "/services/air-freight": airImage,
  "/services/ocean-freight": oceanImage,
  "/services/customs-clearance": customsImage,
  "/services/road-rail": roadImage,
  "/services/warehouse": warehousingImage,
  "/services/international-courier": packagingImage,
};

export default function HomeFeatured() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: number) => {
    carouselRef.current?.scrollBy({
      left: direction * carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="home-section home-section-dark home-featured">
      <div className="home-shell c-width relative">
        <div className="home-featured-heading">
          <div>
            <p className="home-kicker-1 normal-xsmall">All services</p>
            <h2 className="title-3xl">Every mode, one partner</h2>
          </div>
        </div>
        <div className="home-feature-carousel">
          <div
            className="home-featured-controls"
            aria-label="Featured services carousel controls"
          >
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              aria-label="Previous featured service"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              aria-label="Next featured service"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="home-feature-grid" ref={carouselRef}>
            {servicesCopy.items.map((service) => (
              <article className="home-feature-card" key={service.id}>
                <div className="home-feature-image">
                  <Image
                    src={serviceImages[service.href] || airImage}
                    alt={service.label}
                    fill
                  />
                </div>
                <div>
                  <h3 className="title-xl">{service.label}</h3>
                  <p className="normal-small">{service.description}</p>
                  <div>
                    <Link
                      href={service.href}
                      className="normal-xsmall font-white"
                    >
                      Learn more <span className="ms-2">→</span>
                    </Link>
                    <a
                      className="ms-2 site-quote-link normal-xsmall"
                      href="/quote"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
