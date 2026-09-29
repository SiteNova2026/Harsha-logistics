import PageHeader from "@/components/shared/PageHero";
import ContactSection from "@/components/contact/ContactSection";
import { contactCopy } from "@/lib/constants/contact";
import { siteCopy } from "@/lib/constants/siteCopy";
import "../styles/components/contact.scss";
import portCranes from "../../public/images/port-cranes.jpg";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <PageHeader
        breadcrumbs={[{ label: siteCopy.navigation.home, href: "/" }, { label: siteCopy.navigation.contact }]}
        eyebrow={contactCopy.hero.eyebrow}
        title={contactCopy.hero.title}
        description={contactCopy.hero.description}
       backgroundImage={portCranes}
      />
      <ContactSection />
    </div>
  );
}
