import { useTranslation } from 'react-i18next';
import { FirstScreen } from '../../../components/FirstScreen';
import { Footer } from '../../../components/Footer';
import { PageContainer } from '../../../components/PageConatiner';
import { useScrollSections } from '../../../hooks/useScrollSections';
import { ArtSection } from './Art';
import { BrandStorySection } from './BrandStory';
import { JewelrySection } from './JewelrySection';

export const SatellitePage: React.FC = () => {
  useScrollSections({
    sections: ['first-screen', 'brand-story', 'art-section', 'jewelry'],
  });
  const { t } = useTranslation();
  return (
    <PageContainer>
      <FirstScreen
        nextSectionId="brand-story"
        title={t('satellite_paris.page_title')}
        desc={t('satellite_paris.page_subtitle')}
        image={
          'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/2-ZPXJPfCJtLftzO5J8oEoSELPR3DjBF.png'
        }
      />
      <BrandStorySection />
      <ArtSection></ArtSection>
      <JewelrySection></JewelrySection>
      <Footer />
    </PageContainer>
  );
};
