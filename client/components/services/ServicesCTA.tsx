import Image from "next/image";
import Link from "next/link";
import airFreight from "../../public/images/air-freight.jpg";
import { servicesCopy } from "@/lib/constants/services";

export default function ServicesCTA() {
  return (
    <section className="services-cta" aria-labelledby="services-cta-title">
      <div className="services-cta-container c-width">
        <div className="services-cta-image-wrap">
          <Image
            className="services-cta-image"
            src={airFreight}
            alt={servicesCopy.ctaTitle}
            fill
            sizes="(max-width: 991px) 100vw, 50vw"
          />
        </div>

        <div className="services-cta-content">
          <p className="services-cta-eyebrow normal-xsmall">{servicesCopy.ctaEyebrow}</p>
          <h2 id="services-cta-title" className="services-cta-title title-3xl">{servicesCopy.ctaTitle}</h2>
          <p className="services-cta-description normal-small">
            {servicesCopy.ctaDescription}
          </p>
          <Link className="services-cta-button normal-small" href="/quote">{servicesCopy.ctaButton} <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}