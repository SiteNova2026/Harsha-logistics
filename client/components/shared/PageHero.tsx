import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import "../../app/styles/components/pageHero.scss";

type Crumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  breadcrumbs: Crumb[];
  eyebrow: string;
  title: string;
  description?: string;
  backgroundImage: StaticImageData | string;
};

export default function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        placeholder={typeof backgroundImage === "string" ? undefined : "blur"}
        className="page-hero-image"
      />

      <div className="page-hero-wash" />

      <div className="page-hero-content c-width">
        <nav className="page-hero-breadcrumbs">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="page-hero-crumb normal-xsmall">
              {i > 0 && <span className="page-hero-divider normal-xsmall">/</span>}
              {crumb.href ? (
                <p className="page-hero-crumb-link cursor-pointer normal-xsmall">
                  {crumb.label}
                </p>
              ) : (
                <span className="page-hero-crumb-current normal-xsmall">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <p className="page-hero-eyebrow normal-xsmall">{eyebrow}</p>

        <h1 className="page-hero-title title-5xl">{title}</h1>

        {description ? <p className="page-hero-description normal-small">{description}</p> : null}
      </div>
    </section>
  );
}