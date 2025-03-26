import { FirstScreen } from '../../../components/FirstScreen';
import { Footer } from '../../../components/Footer';
import { PageContainer } from '../../../components/PageConatiner';
import { useScrollSections } from '../../../hooks/useScrollSections';

export const TravelPage: React.FC = () => {
  useScrollSections({
    sections: ['first-screen'],
  });
  return (
    <PageContainer>
      <FirstScreen
        title="Travel Plan"
        desc="Global Essence  Local Elegance"
        image={
          'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel-hpwkZunpQG4vKhLY5f7TQCmptVHwbg.jpeg'
        }
      />
      <Footer />
    </PageContainer>
  );
};
