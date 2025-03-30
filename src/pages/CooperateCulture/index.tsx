import { PageContainer } from '../../components/PageConatiner';
import { useScrollSections } from '../../hooks/useScrollSections';
import { MVVSection } from './MvvSection';

export const CooperateCulturePage: React.FC = () => {
  useScrollSections({
    sections: ['mvv-section'],
  });
  return (
    <PageContainer>
      <MVVSection></MVVSection>
    </PageContainer>
  );
};
