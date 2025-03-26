import { FirstScreen } from '../../../components/FirstScreen';
import { Footer } from '../../../components/Footer';
import { PageContainer } from '../../../components/PageConatiner';
import { useScrollSections } from '../../../hooks/useScrollSections';

export const SatellitePage: React.FC = () => {
  useScrollSections({
    sections: ['first-screen'],
  });
  return (
    <PageContainer>
      <FirstScreen
        title="SATELLITE PARIS"
        desc="Wander with a Compass of Conviction"
        image={
          'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/satellite-WZkxe2H3Jps6HnPXwwV5Sgt2c6V6Zh.jpeg'
        }
      />
      <Footer />
    </PageContainer>
  );
};
