import { aboutCopy } from "@/lib/constants/about";

export default function AboutValues() {
  return (
    <section className="about-values" aria-labelledby="about-values-title">
      <div className="about-values-container c-width">
        <h2 id="about-values-title" className="sr-only">
          {aboutCopy.values.title}
        </h2>

        <div className="about-values-grid">
          {aboutCopy.values.items.map((value) => (
            <article className="about-value" key={value.title}>
              <h3 className="about-value-title normal-lg">{value.title}</h3>
              <p className="about-value-description normal-small">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}