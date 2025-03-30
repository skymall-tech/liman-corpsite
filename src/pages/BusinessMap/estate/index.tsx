import { FirstScreen } from '../../../components/FirstScreen';
import { Footer } from '../../../components/Footer';
import { PageContainer } from '../../../components/PageConatiner';
import { useScrollSections } from '../../../hooks/useScrollSections';
import { ArmaniCasa } from './ArmaniCasa';
import { BrandStorySection } from './brandStory';

export const EstatePage: React.FC = () => {
  useScrollSections({
    sections: ['first-screen', 'brand-story', 'armani-casa'],
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
      <ArmaniCasa></ArmaniCasa>
      <Footer />
    </PageContainer>
  );
};
