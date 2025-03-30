import { FirstScreen } from '../../../components/FirstScreen';
import { Footer } from '../../../components/Footer';
import { PageContainer } from '../../../components/PageConatiner';
import { useScrollSections } from '../../../hooks/useScrollSections';
import { BrandSection } from './BrandSection';
import { GlobalRetailSection } from './GlobalRetailSection';
import { TaxFreeSection } from './TaxFree';

export const TravelPage: React.FC = () => {
  useScrollSections({
    sections: ['first-screen', 'partner-port', 'brand', 'tax-free'],
  });
  return (
    <PageContainer>
      <FirstScreen
        nextSectionId="partner-port"
        title="TRAVEL RETAIL"
        desc="Global Essence  Local Elegance"
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
