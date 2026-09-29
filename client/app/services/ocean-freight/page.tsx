import PageHeader from "@/components/shared/PageHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceSteps from "@/components/services/ServiceSteps";
import RelatedServices from "@/components/services/RelatedServices";
import { OceanFreight, servicesCopy } from "@/lib/constants/services";
import { getRelatedServices } from "@/lib/constants/relatedServices";
import { siteCopy } from "@/lib/constants/siteCopy";
import shipImage from "../../../public/images/svc-ocean.jpg";
import "../../styles/components/services.scss";

const otherServices = getRelatedServices("/services/ocean-freight");

export default function OceanFreightPage() {
  const oceanFreight = OceanFreight[0];
  const service = servicesCopy.items.find((item) => item.href === "/services/ocean-freight");

  if (!service?.page || !oceanFreight) return null;

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
          eyebrow={oceanFreight.subtitle}
          title={oceanFreight.title}
          description={oceanFreight.description}
          image={shipImage}
        />

        <ServiceFeatureGrid
          kicker={oceanFreight.subtitle}
          heading={oceanFreight.subdescription}
          items={oceanFreight.items}
        />

        <ServiceSteps
          kicker={oceanFreight.stepsTitle}
          title={oceanFreight.stepsIntro}
          steps={oceanFreight.steps}
        />

        <RelatedServices items={otherServices} />
    </div>
  );
}
