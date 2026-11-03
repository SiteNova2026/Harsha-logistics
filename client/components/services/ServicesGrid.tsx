import Link from "next/link";
import { servicesCopy } from "@/lib/constants/services";

export function ServiceIcon({ name }: { name: string }) {
  const commonProps = {
    className: "service-card-icon-svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "plane") {
    return (
      <svg {...commonProps}>
        <path d="m3 11 18-8-8 18-2-8-8-2Z" />
        <path d="m13 11 4-4" />
      </svg>
    );
  }

  if (name === "truck") {
    return (
      <svg {...commonProps}>
        <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z" />
        <path d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    );
  }

  if (name === "document") {
    return (
      <svg {...commonProps}>
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M15 3v5h4M9 15l2 2 4-4" />
      </svg>
    );
  }

  if (name === "box") {
    return (
      <svg {...commonProps}>
        <path d="m4 7 8-4 8 4-8 4-8-4Z" />
        <path d="M4 7v10l8 4 8-4V7M12 11v10" />
      </svg>
    );
  }

  if (name === "globe") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    );
  }

   if (name === "reefer") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <path d="M7 4v16M11 4v16M15 4v16M19 4v16" />
        <path d="M12 7v6m-2-4 4 4m0-4-4 4" />
      </svg>
    );
  }
  
   if (name === "chemical") {
    return (
      <svg {...commonProps}>
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />
        <path d="M7 15h10M10 12h.01M14 17h.01" />
      </svg>
    );
  }
  if (name === "overdimension") {
    return (
      <svg {...commonProps}>
        <path d="M2 16h20M4 16V9h10v7M14 11h4l3 3v2" />
        <path d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M3 6h18M3 6l2-2M3 6l2 2M21 6l-2-2M21 6l-2 2" />
      </svg>
    );
  }


  return (
    <svg {...commonProps}>
      <path d="M3 15h18M5 15V9l7-4 7 4v6M7 15v3h10v-3" />
      <path d="M9 11h6" />
    </svg>
  );
}

export default function ServicesGrid() {
  return (
    <section className="services-grid" aria-labelledby="services-grid-title">
      <div className="services-grid-container c-width">
        <h2 id="services-grid-title" className="sr-only">
          {servicesCopy.sectionTitle}
        </h2>
        <div className="services-grid-list">
          {servicesCopy.items.map((item) => (
            <Link
              className="service-card-link normal-smallx reveal-on-scroll"
              href={item.href}
              aria-label={item.label}
              key={item.id}
            >
              <article className="service-card" key={item.id}>
                <div className="service-card-icon">
                  <ServiceIcon name={item.icon} />
                </div>
                <p className="service-card-number normal-xsmall">{item.id}</p>
                <h3 className="service-card-title normal-lg ">{item.label}</h3>
                <p className="service-card-description normal-small font-normal">
                  {item.description}
                </p>
                <p className="normal-smallx mt-2">
                  {servicesCopy.viewService} <span aria-hidden="true">→</span>
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
