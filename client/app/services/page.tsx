import PageHeader from "@/components/shared/PageHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesCTA from "@/components/services/ServicesCTA";
import { servicesCopy } from "@/lib/constants/services";
import { siteCopy } from "@/lib/constants/siteCopy";
import "../styles/components/services.scss";
import portCranes from "../../public/images/container-yard.jpg";

export default function ServicesPage() {
  return (
    <div className="services-page">
      <PageHeader
         breadcrumbs={[{ label: siteCopy.navigation.home, href: "/" }, { label: siteCopy.navigation.services }]}
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
