
import AboutStory from '@/components/about/AboutStory';
import AboutValues from '@/components/about/AboutValues';
import PageHeader from '@/components/shared/PageHero';
import { aboutCopy } from '@/lib/constants/about';
import { siteCopy } from '@/lib/constants/siteCopy';
import '../styles/components/about.scss';
import portCranes from '../../public/images/port-cranes.jpg'

export default function AboutPage() {
  return (
    <div className="about-page">
      <PageHeader
        eyebrow={aboutCopy.hero.eyebrow}
        title={aboutCopy.hero.title}
        description={aboutCopy.hero.description}
        breadcrumbs={[{ label: siteCopy.navigation.home, href: "/" }, { label: siteCopy.navigation.about }]}
        backgroundImage={portCranes}
      />
      <AboutStory />
      <AboutValues />
    </div>
  );
}
