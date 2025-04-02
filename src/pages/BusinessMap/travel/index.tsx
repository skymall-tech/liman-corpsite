import { useTranslation } from 'react-i18next';
import { FirstScreen } from '../../../components/FirstScreen';
import { Footer } from '../../../components/Footer';
import { PageContainer } from '../../../components/PageConatiner';
import { useScrollSections } from '../../../hooks/useScrollSections';
import { BrandSection } from './BrandSection';
import { GlobalRetailSection } from './GlobalRetailSection';
import { TaxFreeSection } from './TaxFree';

export const TravelPage: React.FC = () => {
  const { t } = useTranslation();
  useScrollSections({
    sections: ['first-screen', 'partner-port', 'brand', 'tax-free'],
  });
  return (
    <PageContainer>
      <FirstScreen
        nextSectionId="partner-port"
        title={t('travel.page_title')}
        desc={t('travel.page_subtitle')}
        image={
          'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/3-xnqCK3LeLXGbMZzlbkmAQ26C05vnGA.png'
        }
      />
      <GlobalRetailSection />
      <BrandSection />
      <TaxFreeSection />
      <Footer />
    </PageContainer>
  );
};
