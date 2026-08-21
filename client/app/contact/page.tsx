import PageHeader from "@/components/shared/PageHero";
import "../styles/components/contact.scss";
import portCranes from "../../public/images/port-cranes.jpg";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Get in touch"
        title="Connect beyond distance."
        description="Tell us about your shipment, your cargo or your customs query. Our Chennai operations desk is at your service."
       backgroundImage={portCranes}
      />
    </div>
  );
}
