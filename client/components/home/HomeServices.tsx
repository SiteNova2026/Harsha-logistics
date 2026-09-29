import Link from "next/link";
import { servicesCopy } from "@/lib/constants/services";
import { ServiceIcon } from "@/components/services/ServicesGrid";
import { homeCopy } from "@/lib/constants/home";
export default function HomeServices() {
  return (
    <section className="home-section home-section-dark home-services-intro">
      <div className="home-shell c-width">
        <div className="home-section-heading reveal-on-scroll">
          <div>
            <p className="home-kicker-1 normal-xsmall">{homeCopy.services.eyebrow}</p>
            <h2 className="title-3xl">{homeCopy.services.title}</h2>
          </div>
          <p className="normal-small">
            {homeCopy.services.description}
          </p>
        </div>
        <div className="services-grid-list">
          {servicesCopy.items.map((service) => (
            <Link
              className="service-card-link normal-smallx reveal-on-scroll"
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
