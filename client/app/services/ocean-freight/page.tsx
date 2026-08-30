import PageHeader from "@/components/shared/PageHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceSteps from "@/components/services/ServiceSteps";
import RelatedServices from "@/components/services/RelatedServices";
import { OceanFreight, servicesCopy } from "@/lib/constants/services";
import shipImage from "../../../public/images/svc-ocean.jpg";
import roadImage from "../../../public/images/container-yard.jpg";
import airImage from "../../../public/images/air-freight.jpg";
import customsImage from "../../../public/images/port-cranes.jpg";
import "../../styles/components/services.scss";

const otherServices = [
  { label: "Air Freight", href: "/services/air-freight", image: airImage, description: "Priority air cargo, door to door." },
  { label: "Road & Rail", href: "/services/road-rail", image: roadImage, description: "Domestic & cross-border transport." },
  { label: "Customs Clearance", href: "/services/customs-clearance", image: customsImage, description: "Licensed CHA and documentation." },
];

export default function OceanFreightPage() {
  const oceanFreight = OceanFreight[0];
  const service = servicesCopy.items.find((item) => item.href === "/services/ocean-freight");

  if (!service?.page || !oceanFreight) return null;

  return (
    <div className="service-page">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
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
