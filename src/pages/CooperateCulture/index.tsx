import { Footer } from '../../components/Footer';
import { PageContainer } from '../../components/PageConatiner';
import { useScrollSections } from '../../hooks/useScrollSections';
import { CustomerRights } from './CustomerRights';
import { MVVSection } from './MvvSection';
import { SocialResponsibility } from './SocialResponsibility';

export const CooperateCulturePage: React.FC = () => {
  useScrollSections({
    sections: ['mvv-section', 'social-responsibility', 'customer-rights'],
  });
  return (
    <PageContainer>
      <MVVSection></MVVSection>
      <SocialResponsibility></SocialResponsibility>
      <CustomerRights></CustomerRights>
      <Footer></Footer>
    </PageContainer>
  );
};
