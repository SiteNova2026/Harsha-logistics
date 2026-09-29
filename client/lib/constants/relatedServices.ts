import type { StaticImageData } from "next/image";
import airImage from "../../public/images/air-freight.jpg";
import customsImage from "../../public/images/svc-customs.jpg";
import courierImage from "../../public/images/svc-courier.jpg";
import oceanImage from "../../public/images/svc-ocean.jpg";
import roadImage from "../../public/images/container-yard.jpg";
import warehouseImage from "../../public/images/svc-warehouse.jpg";
import { servicesCopy } from "@/lib/constants/services";

const serviceImages: Record<string, StaticImageData> = {
  "/services/air-freight": airImage,
  "/services/ocean-freight": oceanImage,
  "/services/customs-clearance": customsImage,
  "/services/road-rail": roadImage,
  "/services/warehouse": warehouseImage,
  "/services/international-courier": courierImage,
};

export function getRelatedServices(currentHref: string) {
  return servicesCopy.items
    .filter((service) => service.href !== currentHref)
    .slice(0, 3)
    .map((service) => ({
      label: service.label,
      href: service.href,
      image: serviceImages[service.href],
      description: service.page.description,
    }));
}
