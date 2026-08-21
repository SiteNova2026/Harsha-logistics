
import AboutStory from '@/components/about/AboutStory';
import PageCTA from '@/components/shared/PageCTA';
import PageHeader from '@/components/shared/PageHero';
import '../styles/components/about.scss';
import portCranes from '../../public/images/port-cranes.jpg'

export default function AboutPage() {
  return (
    <div className="about-page">
      <PageHeader
        eyebrow="About Us"
        title="Vision beyond limits."
        description="A Chennai-born shipping house with a global outlook — built on relationships, reliability and the pride of serving every consignment as our own."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        backgroundImage={portCranes}
      />
      <AboutStory />
    </div>
  );
}
