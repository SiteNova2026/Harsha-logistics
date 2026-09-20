import Link from "next/link";
import { servicesCopy } from "@/lib/constants/services";
import { ServiceIcon } from "@/components/services/ServicesGrid";
export default function HomeServices() {
  return (
    <section className="home-section home-section-dark home-services-intro">
      <div className="home-shell c-width">
        <div className="home-section-heading">
          <div>
            <p className="home-kicker-1 normal-xsmall">Our services</p>
            <h2 className="title-3xl">Strength beyond borders</h2>
          </div>
          <p className="normal-small">
            An integrated suite of shipping, customs and freight forwarding
            services working in synergy to keep your cargo moving across
            oceans, skies and ports.
          </p>
        </div>
        <div className="services-grid-list">
          {servicesCopy.items.map((service) => (
            <Link
              className="service-card-link normal-smallx"
              href={service.href}
              aria-label={service.label}
              key={service.id}
            >
              <article className="service-card">
                <div className="service-card-icon">
                  <ServiceIcon name={service.icon} />
                </div>
                <p className="service-card-number normal-xsmall">
                  {service.id}
                </p>
                <h3 className="service-card-title normal-lg">
                  {service.label}
                </h3>
                <p className="service-card-description font-normal normal-small">
                  {service.page.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
