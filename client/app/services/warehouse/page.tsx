import PageHeader from "@/components/shared/PageHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceSteps from "@/components/services/ServiceSteps";
import RelatedServices from "@/components/services/RelatedServices";
import { WarehouseService, servicesCopy } from "@/lib/constants/services";
import warehouseImage from "../../../public/images/svc-warehouse.jpg";
import shipImage from "../../../public/images/hero-ship.jpg";
import airImage from "../../../public/images/air-freight.jpg";
import customsImage from "../../../public/images/port-cranes.jpg";
import "../../styles/components/services.scss";

const otherServices = [
  { label: "Ocean Freight", href: "/services/ocean-freight", image: shipImage, description: "FCL & LCL global ocean shipping." },
  { label: "Air Freight", href: "/services/air-freight", image: airImage, description: "Priority air cargo, door to door." },
  { label: "Customs Clearance", href: "/services/customs-clearance", image: customsImage, description: "Licensed CHA and documentation." },
];

export default function WarehousePage() {
  const serviceData = WarehouseService[0];
  const service = servicesCopy.items.find((item) => item.href === "/services/warehouse");

  if (!service?.page || !serviceData) return null;

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
        backgroundImage={warehouseImage}
      />

      <main className="service-page-main">
        <ServiceIntro
          eyebrow={serviceData.subtitle}
          title={serviceData.title}
          description={serviceData.description}
          image={warehouseImage}
        />

        <ServiceFeatureGrid
          kicker={serviceData.subtitle}
          heading={serviceData.subdescription}
          items={serviceData.items}
        />

        <ServiceSteps
          kicker={serviceData.stepsTitle}
          title={serviceData.stepsIntro}
          steps={serviceData.steps}
        />

        <RelatedServices items={otherServices} />
      </main>
    </div>
  );
}
