import { FirstScreen } from '../../../components/FirstScreen';
import { Footer } from '../../../components/Footer';
import { PageContainer } from '../../../components/PageConatiner';
import { useScrollSections } from '../../../hooks/useScrollSections';

export const EstatePage: React.FC = () => {
  useScrollSections({
    sections: ['first-screen'],
  });
  return (
    <PageContainer>
      <FirstScreen
        title="CULTURAL ESTATE"
        desc="Liman & TopEast"
        image={
          'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/cultureestate-VWAPOptvgKEhpw0GRnA26H7Ecvc7FG.jpeg'
        }
      />
      <Footer />
    </PageContainer>
  );
};
