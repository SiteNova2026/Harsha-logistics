"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(itemCount);

  const scrollToIndex = useCallback((index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const targetLeft = getCenteredItemOffset(carousel, index);
    const currentLeft = carousel.scrollLeft;

    if (Math.abs(targetLeft - currentLeft) < 1) return;

    carousel.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });
  }, []);

  const scrollCarousel = useCallback((direction: number) => {
    let targetIndex = activeIndexRef.current + direction;

    if (targetIndex < itemCount) {
      targetIndex += itemCount;
    } else if (targetIndex >= itemCount * 2) {
      targetIndex -= itemCount;
    }

    activeIndexRef.current = targetIndex;
    setActiveIndex(targetIndex);
    scrollToIndex(targetIndex);
  }, [itemCount, scrollToIndex]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const positionActiveSlide = () => {
      scrollToIndex(activeIndexRef.current);
    };

    positionActiveSlide();
    window.addEventListener("resize", positionActiveSlide);
    const interval = window.setInterval(() => scrollCarousel(1), 5000);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener("resize", positionActiveSlide);
    };
  }, [itemCount, scrollCarousel, scrollToIndex]);

  const activeServiceId = servicesCopy.items[activeIndex % itemCount]?.id;

  return (
    <section className="home-section home-section-dark home-featured">
      <div className="home-shell c-width relative">
        <div className="home-featured-heading reveal-on-scroll">
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
              <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left h-5 w-5" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></span>
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              aria-label={homeCopy.featured.next}
            >
              <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-5 w-5" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></span>
            </button>
          </div>
          <div className="home-feature-grid" ref={carouselRef}>
            {[0, 1, 2].map((groupIndex) =>
              servicesCopy.items.map((service) => (
                <article
                  className={`home-feature-card ${groupIndex === 1 && service.id === activeServiceId ? "is-active" : ""}`.trim()}
                  key={`${groupIndex}-${service.id}`}
                  aria-hidden={groupIndex !== 1}
                  inert={groupIndex !== 1}
                >
                  <div className="home-feature-image">
                    <img
                      src={serviceImages[service.href].src || airImage.src}
                      alt={service.label}
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
