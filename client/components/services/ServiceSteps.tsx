type StepItem = {
  number: string;
  title: string;
};

type ServiceStepsProps = {
  kicker: string;
  title: string;
  steps: StepItem[];
};

export default function ServiceSteps({ kicker, title, steps }: ServiceStepsProps) {
  return (
    <section className="service-steps-block c-width">
      <p className="service-section-kicker">{kicker}</p>
      <h3>{title}</h3>

      <div className="steps-grid">
        {steps.map((step) => (
          <div key={step.number} className="step-card">
            <span className="step-number">{step.number}</span>
            <p>{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
