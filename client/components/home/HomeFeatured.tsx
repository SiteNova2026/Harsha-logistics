"use client";

import { useCallback, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { servicesCopy } from "@/lib/constants/services";
import { homeCopy } from "@/lib/constants/home";
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

function getItemOffset(carousel: HTMLDivElement, itemIndex: number) {
  const item = carousel.children[itemIndex];
  if (!item) return 0;

  return item.getBoundingClientRect().left
    - carousel.getBoundingClientRect().left
    + carousel.scrollLeft;
}

function getCenteredItemOffset(carousel: HTMLDivElement, itemIndex: number) {
  const item = carousel.children[itemIndex] as HTMLElement | undefined;
  if (!item) return carousel.scrollLeft;

  return getItemOffset(carousel, itemIndex)
    - (carousel.clientWidth - item.clientWidth) / 2;
}

export default function HomeFeatured() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemCount = servicesCopy.items.length;
  const activeIndexRef = useRef(itemCount);

  const scrollCarousel = useCallback((direction: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let targetIndex = activeIndexRef.current + direction;
    let equivalentIndex = activeIndexRef.current;

    if (targetIndex < itemCount) {
      equivalentIndex += itemCount;
      targetIndex += itemCount;
    } else if (targetIndex >= itemCount * 2) {
      equivalentIndex -= itemCount;
      targetIndex -= itemCount;
    }

    if (equivalentIndex !== activeIndexRef.current) {
      carousel.scrollLeft = getCenteredItemOffset(carousel, equivalentIndex);
    }

    activeIndexRef.current = targetIndex;
    carousel.scrollTo({
      left: getCenteredItemOffset(carousel, targetIndex),
      behavior: "smooth",
    });
  }, [itemCount]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const positionActiveSlide = () => {
      carousel.scrollLeft = getCenteredItemOffset(carousel, activeIndexRef.current);
    };

    positionActiveSlide();
    window.addEventListener("resize", positionActiveSlide);
    const interval = window.setInterval(() => scrollCarousel(1), 5000);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener("resize", positionActiveSlide);
    };
  }, [itemCount, scrollCarousel]);

  return (
    <section className="home-section home-section-dark home-featured">
      <div className="home-shell c-width relative">
        <div className="home-featured-heading">
          <div>
            <p className="home-kicker-1 normal-xsmall">{homeCopy.featured.eyebrow}</p>
            <h2 className="title-3xl">{homeCopy.featured.title}</h2>
          </div>
        </div>
        <div className="home-feature-carousel">
          <div
            className="home-featured-controls"
            aria-label={homeCopy.featured.controlsLabel}
          >
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              aria-label={homeCopy.featured.previous}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              aria-label={homeCopy.featured.next}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="home-feature-grid" ref={carouselRef}>
            {[0, 1, 2].map((groupIndex) =>
              servicesCopy.items.map((service) => (
                <article
                  className="home-feature-card"
                  key={`${groupIndex}-${service.id}`}
                  aria-hidden={groupIndex !== 1}
                  inert={groupIndex !== 1}
                >
                  <div className="home-feature-image">
                    <Image
                      src={serviceImages[service.href] || airImage}
                      alt={service.label}
                      fill
                    />
                  </div>
                  <div className="home-feature-copy">
                    <h3 className="title-xl">{service.label}</h3>
                    <p className="normal-small">{service.description}</p>
                    <div>
                      <Link
                        href={service.href}
                        className="normal-xsmall font-white"
                      >
                        {homeCopy.featured.learnMore} <span className="ms-2">→</span>
                      </Link>
                      <a
                        className="ms-2 site-quote-link normal-xsmall"
                        href="/quote"
                      >
                        {homeCopy.featured.getQuote}
                      </a>
                    </div>
                  </div>
                </article>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
