import PageHeader from "@/components/shared/PageHero";
import ContactSection from "@/components/contact/ContactSection";
import { contactCopy } from "@/lib/constants/contact";
import "../styles/components/contact.scss";
import portCranes from "../../public/images/port-cranes.jpg";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow={contactCopy.hero.eyebrow}
        title={contactCopy.hero.title}
        description={contactCopy.hero.description}
       backgroundImage={portCranes}
      />
      <ContactSection />
    </div>
  );
}
