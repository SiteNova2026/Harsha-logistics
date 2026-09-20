import HomeAbout from "@/components/home/HomeAbout";
import HomeBeyond from "@/components/home/HomeBeyond";
import HomeFeatured from "@/components/home/HomeFeatured";
import HomeHero from "@/components/home/HomeHero";
import HomeNetwork from "@/components/home/HomeNetwork";
import HomeServices from "@/components/home/HomeServices";
import HomeTrust from "@/components/home/HomeTrust";

export default function Hero() {
  return (
    <main className="home-page">
      <HomeHero />
      <HomeServices />
      <HomeTrust />
      <HomeFeatured />
      <HomeBeyond />
      <HomeNetwork />
      <HomeAbout />
    </main>
  );
}
