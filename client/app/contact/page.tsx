import PageHeader from "@/components/shared/PageHero";
import ContactSection from "@/components/contact/ContactSection";
import { contactCopy } from "@/lib/constants/contact";
import { siteCopy } from "@/lib/constants/siteCopy";
import { createPageMetadata } from "@/lib/constants/seo";
import "../styles/components/contact.scss";
import portCranes from "../../public/images/port-cranes.jpg";

export const metadata = createPageMetadata(
  "Contact Our Chennai Freight Forwarders",
  "Contact Harsha Logistics in Chennai for freight forwarding, customs clearance and shipping support. Call, email or send our team an enquiry.",
  "/contact",
);

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
