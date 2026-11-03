
import PageHeader from "@/components/shared/PageHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceSteps from "@/components/services/ServiceSteps";
import RelatedServices from "@/components/services/RelatedServices";

import {
  servicesCopy,
  ChemicalCargoHandlingService,
} from "@/lib/constants/services";

import { getRelatedServices } from "@/lib/constants/relatedServices";
import { siteCopy } from "@/lib/constants/siteCopy";
import { createPageMetadata } from "@/lib/constants/seo";

import shipImage from "../../../public/images/hazadorous_cargo_handling.png";
import "../../styles/components/services.scss";

export const metadata = createPageMetadata(
  "Hazardous Cargo Handling Services from Chennai, India",
  "Safe and compliant hazardous cargo handling, including dangerous goods documentation, packaging, loading, regulatory coordination and transportation.",
  "/services/chemical-cargo-handling",
);

const otherServices = getRelatedServices(
  "/services/chemical-cargo-handling"
);

export default function ChemicalCargoHandlingPage() {
  const chemicalCargo = ChemicalCargoHandlingService[0];

  const service = servicesCopy.items.find(
    (item) => item.href === "/services/chemical-cargo-handling"
  );

  if (!service?.page || !chemicalCargo) return null;

  return (
    <div className="service-page">
      <PageHeader
        breadcrumbs={[
          { label: siteCopy.navigation.home, href: "/" },
          { label: siteCopy.navigation.services, href: "/services" },
          { label: service.label },
        ]}
        eyebrow={service.page.eyebrow}
        title={service.page.title}
        description={service.page.description}
        backgroundImage={shipImage}
      />

      <ServiceIntro
        eyebrow={chemicalCargo.subtitle}
        title={chemicalCargo.title}
        description={chemicalCargo.description}
        image={shipImage}
      />

      <ServiceFeatureGrid
        kicker={chemicalCargo.subtitle}
        heading={chemicalCargo.subdescription}
        items={chemicalCargo.items}
      />

      <ServiceSteps
        kicker={chemicalCargo.stepsTitle}
        title={chemicalCargo.stepsIntro}
        steps={chemicalCargo.steps}
      />

      <RelatedServices items={otherServices} />
    </div>
  );
}
