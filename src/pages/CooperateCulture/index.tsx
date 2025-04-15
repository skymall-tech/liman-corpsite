import { Footer } from '../../components/Footer';
import { PageContainer } from '../../components/PageConatiner';
import { useScrollSections } from '../../hooks/useScrollSections';
import { CustomerRights } from './CustomerRights';
import { MVVSection } from './MvvSection';
import { SocialResponsibility } from './SocialResponsibility';
import { useResponsive } from '../../hooks/useResponsive';
import { MVVMobile } from './MVVMobile';

export const CooperateCulturePage: React.FC = () => {
  const { isMobile } = useResponsive();

  useScrollSections({
    sections: ['mvv-section', 'social-responsibility', 'customer-rights'],
  });
  return (
    <PageContainer>
      {isMobile ? <MVVMobile></MVVMobile> : <MVVSection></MVVSection>}
      <SocialResponsibility></SocialResponsibility>
      <CustomerRights></CustomerRights>
      <Footer></Footer>
    </PageContainer>
  );
};
