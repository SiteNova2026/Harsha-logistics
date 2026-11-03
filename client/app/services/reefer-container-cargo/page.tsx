
import PageHeader from "@/components/shared/PageHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceSteps from "@/components/services/ServiceSteps";
import RelatedServices from "@/components/services/RelatedServices";

import { ReeferContainerCargoService, servicesCopy } from "@/lib/constants/services";
import { getRelatedServices } from "@/lib/constants/relatedServices";
import { siteCopy } from "@/lib/constants/siteCopy";
import { createPageMetadata } from "@/lib/constants/seo";

import shipImage from "../../../public/images/reefer_container.png";
import "../../styles/components/services.scss";

export const metadata = createPageMetadata(
  "Reefer Container Cargo Services from Chennai, India",
  "Reliable temperature-controlled reefer container shipping for perishable goods, seafood, fruits, vegetables and temperature-sensitive cargo.",
  "/services/reefer-container-cargo",
);

const otherServices = getRelatedServices(
  "/services/reefer-container-cargo"
);

export default function ReeferContainerCargoServicePage() {
  const reeferService = ReeferContainerCargoService[0];

  const service = servicesCopy.items.find(
    (item) => item.href === "/services/reefer-container-cargo"
  );

  if (!service?.page || !reeferService) return null;

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
        eyebrow={reeferService.subtitle}
        title={reeferService.title}
        description={reeferService.description}
        image={shipImage}
      />

      <ServiceFeatureGrid
        kicker={reeferService.subtitle}
        heading={reeferService.subdescription}
        items={reeferService.items}
      />

      <ServiceSteps
        kicker={reeferService.stepsTitle}
        title={reeferService.stepsIntro}
        steps={reeferService.steps}
      />

      <RelatedServices items={otherServices} />
    </div>
  );
}
