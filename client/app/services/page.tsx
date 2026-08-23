import PageHeader from "@/components/shared/PageHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesCTA from "@/components/services/ServicesCTA";
import { servicesCopy } from "@/lib/constants/services";
import "../styles/components/services.scss";
import portCranes from "../../public/images/container-yard.jpg";

export default function ServicesPage() {
  return (
    <div className="services-page">
      <PageHeader
         breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow={servicesCopy.hero.eyebrow}
        title={servicesCopy.hero.title}
        description={servicesCopy.hero.description}
         backgroundImage={portCranes}
      />
      <ServicesGrid />
      <ServicesCTA />
    </div>
  );
}
