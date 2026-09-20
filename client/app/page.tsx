import "./styles/components/home.scss";
import HomeHero from "@/components/home/HomeHero";
import HomeServices from "@/components/home/HomeServices";
import HomeTrust from "@/components/home/HomeTrust";
import HomeFeatured from "@/components/home/HomeFeatured";
import HomeBeyond from "@/components/home/HomeBeyond";
import HomeNetwork from "@/components/home/HomeNetwork";
import HomeAbout from "@/components/home/HomeAbout";
import HomeExplore from "@/components/home/HomeExplore";

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
