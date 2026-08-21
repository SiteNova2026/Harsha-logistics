import PageHeader from "@/components/shared/PageHero";
import "../styles/components/quote.scss";
import portCranes from "../../public/images/air-freight.jpg";
export default function QuotePage() {
  return (
    <div className="quote-page">
      <PageHeader
       breadcrumbs={[{ label: "Home", href: "/" }, { label: "Quote" }]}
        eyebrow="Request a Quote"
        title="Tell us about your cargo."
        description="Share your shipment details and our operations desk will respond with a clear plan and competitive pricing — usually within the same working day."
        backgroundImage={portCranes}
      />
    </div>
  );
}
