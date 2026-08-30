type FeatureItem = {
  title: string;
  description: string;
};

type ServiceFeatureGridProps = {
  kicker: string;
  heading: string;
  items: FeatureItem[];
};

export default function ServiceFeatureGrid({
  kicker,
  heading,
  items,
}: ServiceFeatureGridProps) {
  return (
    <section className="service-feature-block">
      <div className="c-width">
        <p className="service-section-kicker">{kicker}</p>
        <h3>{heading}</h3>

        <div className="feature-grid">
          {items.map((item) => (
            <article key={item.title} className="feature-card">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
