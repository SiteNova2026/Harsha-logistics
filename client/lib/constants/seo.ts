import type { Metadata } from "next";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://harsha.sitenova.co.in";

export const siteUrl = new URL(new URL(configuredSiteUrl).origin);

export function createPageMetadata(
  title: string,
  description: string,
  pathname: string,
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: "Harsha Logistics",
      title,
      description,
      url: new URL(pathname, siteUrl).toString(),
      images: [
        {
          url: "/images/home-hero-ship.jpg",
          alt: "Freight ship at port, representing Harsha Logistics services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/home-hero-ship.jpg"],
    },
  };
}
