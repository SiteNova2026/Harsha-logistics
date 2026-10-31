import PageHeader from "@/components/shared/PageHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceSteps from "@/components/services/ServiceSteps";
import RelatedServices from "@/components/services/RelatedServices";
import { WarehouseService, servicesCopy } from "@/lib/constants/services";
import { getRelatedServices } from "@/lib/constants/relatedServices";
import { siteCopy } from "@/lib/constants/siteCopy";
import { createPageMetadata } from "@/lib/constants/seo";
import warehouseImage from "../../../public/images/svc-warehouse.jpg";
import "../../styles/components/services.scss";

export const metadata = createPageMetadata(
  "Warehousing & Cargo Handling in Chennai, India",
  "Coordinate cargo storage, palletisation, packing and distribution with Harsha Logistics warehousing and freight handling services in India.",
  "/services/warehouse",
);

const otherServices = getRelatedServices("/services/warehouse");

export default function WarehousePage() {
  const serviceData = WarehouseService[0];
  const service = servicesCopy.items.find((item) => item.href === "/services/warehouse");

  if (!service?.page || !serviceData) return null;

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
