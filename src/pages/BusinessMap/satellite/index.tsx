import { FirstScreen } from '../../../components/FirstScreen';
import { Footer } from '../../../components/Footer';
import { PageContainer } from '../../../components/PageConatiner';
import { useScrollSections } from '../../../hooks/useScrollSections';
import { BrandStorySection } from './BrandStory';

export const SatellitePage: React.FC = () => {
  useScrollSections({
    sections: ['first-screen', 'brand-story'],
  });
  return (
    <PageContainer>
      <FirstScreen
        nextSectionId="brand-story'"
        title="SATELLITE PARIS"
        desc="Wander with a Compass of Conviction"
        image={
          'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/2-ZPXJPfCJtLftzO5J8oEoSELPR3DjBF.png'
        }
      />
      <BrandStorySection />
      <Footer />
    </PageContainer>
  );
};
