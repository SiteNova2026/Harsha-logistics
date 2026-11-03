
import PageHeader from "@/components/shared/PageHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceSteps from "@/components/services/ServiceSteps";
import RelatedServices from "@/components/services/RelatedServices";

import {
  OverdimensionCargoService,
  servicesCopy,
} from "@/lib/constants/services";

import { getRelatedServices } from "@/lib/constants/relatedServices";
import { siteCopy } from "@/lib/constants/siteCopy";
import { createPageMetadata } from "@/lib/constants/seo";

import shipImage from "../../../public/images/over_dimensional_cargo_2.png";
import shipImageOrgin from "../../../public/images/over_dimensional_cargo_1.png";
import "../../styles/components/services.scss";

export const metadata = createPageMetadata(
  "Overdimension Cargo Handling Services from Chennai, India",
  "Specialized logistics for oversized, heavy-lift and out-of-gauge cargo, including route surveys, lifting plans, permit coordination and end-to-end transportation.",
  "/services/overdimension-cargo-handling",
);

const otherServices = getRelatedServices(
  "/services/overdimension-cargo-handling"
);

export default function OverdimensionCargoHandlingPage() {
  const overdimensionCargo = OverdimensionCargoService[0];

  const service = servicesCopy.items.find(
    (item) => item.href === "/services/overdimension-cargo-handling"
  );

  if (!service?.page || !overdimensionCargo) return null;

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
        eyebrow={overdimensionCargo.subtitle}
        title={overdimensionCargo.title}
        description={overdimensionCargo.description}
        image={shipImageOrgin}
      />

      <ServiceFeatureGrid
        kicker={overdimensionCargo.subtitle}
        heading={overdimensionCargo.subdescription}
        items={overdimensionCargo.items}
      />

      <ServiceSteps
        kicker={overdimensionCargo.stepsTitle}
        title={overdimensionCargo.stepsIntro}
        steps={overdimensionCargo.steps}
      />

      <RelatedServices items={otherServices} />
    </div>
  );
}
