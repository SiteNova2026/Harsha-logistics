import { aboutCopy } from "@/lib/constants/about";

export default function AboutStory() {
  return (
    <section className="about-story c-width">
      <div className="about-story-container">
        <div className="about-story-heading">
          <p className="about-story-eyebrow normal-xsmall">{aboutCopy.story.eyebrow}</p>
          <h2 className="about-story-title title-3xl">
            {aboutCopy.story.title}
          </h2>
        </div>

        <div className="about-story-content">
          <p className="about-story-paragraph normal-md">
            {aboutCopy.story.paragraphs[0]}
          </p>

          <p className="about-story-paragraph normal-md">
            {aboutCopy.story.paragraphs[1]}
          </p>

          <p className="about-story-paragraph normal-md">
            {aboutCopy.story.paragraphs[2]}{" "}
            <span className="about-story-paragraph--emphasis">{aboutCopy.story.emphasis}</span>
          </p>
        </div>
      </div>
    </section>
  );
}