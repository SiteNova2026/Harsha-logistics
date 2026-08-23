import PageHeader from "@/components/shared/PageHero";
import QuoteForm from "@/components/quote/QuoteForm";
import { quoteCopy } from "@/lib/constants/quote";
import "../styles/components/quote.scss";
import portCranes from "../../public/images/air-freight.jpg";
export default function QuotePage() {
  return (
    <div className="quote-page">
      <PageHeader
      breadcrumbs={[{ label: "Home", href: "/" }, { label: quoteCopy.hero.eyebrow }]}
       eyebrow={quoteCopy.hero.eyebrow}
       title={quoteCopy.hero.title}
       description={quoteCopy.hero.description}
        backgroundImage={portCranes}
      />
      <QuoteForm />
    </div>
  );
}
