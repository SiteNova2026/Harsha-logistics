import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/constants/seo";

const routes = [
  "/",
  "/about",
  "/services",
  "/services/air-freight",
  "/services/customs-clearance",
  "/services/international-courier",
  "/services/ocean-freight",
  "/services/road-rail",
  "/services/warehouse",
  "/contact",
  "/quote",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
