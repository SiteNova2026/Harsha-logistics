import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type ServiceIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: StaticImageData;
};

export default function ServiceIntro({
  eyebrow,
  title,
  description,
  image,
}: ServiceIntroProps) {
  return (
    <section className="service-intro c-width">
      <div className="service-intro-copy">
        <p className="service-section-kicker">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href="/quote" className="service-cta-button">
          Request a quote
        </Link>
      </div>

      <div className="service-visual">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" className="service-visual-image" />
      </div>
    </section>
  );
}
