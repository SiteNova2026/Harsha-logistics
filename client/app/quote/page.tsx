import PageHeader from "@/components/shared/PageHero";
import QuoteForm from "@/components/quote/QuoteForm";
import { quoteCopy } from "@/lib/constants/quote";
import { siteCopy } from "@/lib/constants/siteCopy";
import { createPageMetadata } from "@/lib/constants/seo";
import "../styles/components/quote.scss";
import portCranes from "../../public/images/air-freight.jpg";

export const metadata = createPageMetadata(
  "Request a Freight and Shipping Quote",
  "Request a freight quote from Harsha Logistics for ocean freight, air cargo, customs clearance, warehousing or multimodal shipping from India.",
  "/quote",
);

export default function QuotePage() {
  return (
    <div className="quote-page">
      <PageHeader
      breadcrumbs={[{ label: siteCopy.navigation.home, href: "/" }, { label: siteCopy.navigation.quoteBreadcrumb }]}
       eyebrow={quoteCopy.hero.eyebrow}
       title={quoteCopy.hero.title}
       description={quoteCopy.hero.description}
        backgroundImage={portCranes}
      />
      <QuoteForm />
    </div>
  );
}
