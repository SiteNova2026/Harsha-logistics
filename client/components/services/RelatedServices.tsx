import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { servicesCopy } from "@/lib/constants/services";

type RelatedService = {
  label: string;
  href: string;
  image: StaticImageData;
  description: string;
};

type RelatedServicesProps = {
  items: RelatedService[];
};

export default function RelatedServices({ items }: RelatedServicesProps) {
  return (
    <section className="related-services-block c-width">
      <h3 className="reveal-on-scroll">{servicesCopy.relatedServicesTitle}</h3>
      <div className="related-grid">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="related-card reveal-on-scroll">
            <Image
              src={item.image}
              alt={item.label}
              className="related-card-image"
            />
            <div className="related-card-copy">
              <h4>{item.label}</h4>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
