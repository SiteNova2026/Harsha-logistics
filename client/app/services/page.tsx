import PageHeader from "@/components/shared/PageHero";
import "../styles/components/services.scss";
import portCranes from "../../public/images/container-yard.jpg";

export default function ServicesPage() {
  return (
    <div className="services-page">
      <PageHeader
         breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Services"
        title="Strength beyond borders"
        description="Six tightly-integrated services covering every leg of your shipment — from port call to final mile."
         backgroundImage={portCranes}
      />
    </div>
  );
}
