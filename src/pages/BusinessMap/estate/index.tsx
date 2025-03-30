import { FirstScreen } from '../../../components/FirstScreen';
import { Footer } from '../../../components/Footer';
import { PageContainer } from '../../../components/PageConatiner';
import { useScrollSections } from '../../../hooks/useScrollSections';
import { BrandStorySection } from './brandStory';

export const EstatePage: React.FC = () => {
  useScrollSections({
    sections: ['first-screen', 'brand-story'],
  });
  return (
    <PageContainer>
      <FirstScreen
        nextSectionId="business-map-section"
        title="CULTURAL ESTATE"
        desc="Liman & TopEast"
        image={
          'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/4-dlYBTOlIIhNHmyjtJA8SNuW57yRSaG.png'
        }
      />
      <BrandStorySection />
      <Footer />
    </PageContainer>
  );
};
