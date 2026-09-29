import { quoteCopy } from "@/lib/constants/quote";

export default function QuoteSuccess() {
  return (
    <div className="quote-success reveal-on-scroll">
      <p className="quote-success-heading normal-xsmall">{quoteCopy.successHeading}</p>
      <div className="quote-success-list">
        {quoteCopy.successSteps.map((step, index) => (
          <div key={step} className="quote-success-step reveal-on-scroll">
            <div className="quote-success-number normal-small">
              {index + 1}
            </div>
            <p className="quote-success-text normal-small">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
