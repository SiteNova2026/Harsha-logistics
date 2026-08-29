import Link from "next/link";
import { servicesCopy } from "@/lib/constants/services";

function ServiceIcon({ name }: { name: string }) {
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
    return <svg {...commonProps}><path d="m3 11 18-8-8 18-2-8-8-2Z" /><path d="m13 11 4-4" /></svg>;
  }

  if (name === "truck") {
    return <svg {...commonProps}><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z" /><path d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></svg>;
  }

  if (name === "document") {
    return <svg {...commonProps}><path d="M6 3h9l4 4v14H6z" /><path d="M15 3v5h4M9 15l2 2 4-4" /></svg>;
  }

  if (name === "box") {
    return <svg {...commonProps}><path d="m4 7 8-4 8 4-8 4-8-4Z" /><path d="M4 7v10l8 4 8-4V7M12 11v10" /></svg>;
  }

  if (name === "globe") {
    return <svg {...commonProps}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>;
  }

  return <svg {...commonProps}><path d="M3 15h18M5 15V9l7-4 7 4v6M7 15v3h10v-3" /><path d="M9 11h6" /></svg>;
}

export default function ServicesGrid() {
  return (
    <section className="services-grid" aria-labelledby="services-grid-title">
      <div className="services-grid-container c-width">
        <h2 id="services-grid-title" className="sr-only">{servicesCopy.sectionTitle}</h2>
        <div className="services-grid-list">
          {servicesCopy.items.map(([number, title, description, icon]) => (
            <article className="service-card" key={number}>
              <div className="service-card-icon"><ServiceIcon name={icon} /></div>
              <p className="service-card-number normal-xsmall">{number}</p>
              <h3 className="service-card-title normal-lg ">{title}</h3>
              <p className="service-card-description normal-small">{description}</p>
              <Link className="service-card-link normal-xsmall" href="/quote">{servicesCopy.requestQuote} <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}