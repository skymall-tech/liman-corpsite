import { FirstScreen } from '../../../components/FirstScreen';
import { Footer } from '../../../components/Footer';
import { PageContainer } from '../../../components/PageConatiner';
import { useScrollSections } from '../../../hooks/useScrollSections';
import { BrandSection } from './BrandSection';
import { PartnerPortSection } from './PartnerPortSection';
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
          'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel-hpwkZunpQG4vKhLY5f7TQCmptVHwbg.jpeg'
        }
      />
      <PartnerPortSection />
      <BrandSection />
      <TaxFreeSection />
      <Footer />
    </PageContainer>
  );
};
