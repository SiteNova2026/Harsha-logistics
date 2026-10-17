import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/constants/seo";
import "./styles/components/home.scss";
import HomeHero from "@/components/home/HomeHero";
import HomeServices from "@/components/home/HomeServices";
import HomeTrust from "@/components/home/HomeTrust";
import HomeFeatured from "@/components/home/HomeFeatured";
import HomeBeyond from "@/components/home/HomeBeyond";
import HomeNetwork from "@/components/home/HomeNetwork";
import HomeAbout from "@/components/home/HomeAbout";
import HomeExplore from "@/components/home/HomeExplore";

export const metadata: Metadata = createPageMetadata(
  "Harshavardhani Shipping & Forwarding India Pvt Ltd",
  "Move cargo worldwide with a Chennai-based freight forwarder. Harsha Logistics provides ocean and air freight, customs clearance and end-to-end shipping support.",
  "/",
);

export default function HomePage() {
  return (
    <div className="home-page">
      <HomeHero />
      <HomeServices />
      <HomeTrust />
      <HomeFeatured />
      <HomeBeyond />
      <HomeNetwork />
      <HomeAbout />
      <HomeExplore />
    </div>
  );
}
