import { Footer } from '../../components/Footer';
import { PageContainer } from '../../components/PageConatiner';
import { useScrollSections } from '../../hooks/useScrollSections';
import { CustomerRights, CustomerRightsMobileView } from './CustomerRights';
import { MVVSection } from './MvvSection';
import {
  SocialResponsibility,
  SocialResponsibilityMobileView,
} from './SocialResponsibility';
import { useResponsive } from '../../hooks/useResponsive';
import { MVVMobile } from './MVVMobile';

export const CooperateCulturePage: React.FC = () => {
  const { isMobile } = useResponsive();

  useScrollSections({
    sections: isMobile
      ? ['mvv-section', 'social-responsibility']
      : ['mvv-section', 'social-responsibility', 'customer-rights'],
  });
  return (
    <PageContainer>
      {isMobile ? <MVVMobile></MVVMobile> : <MVVSection></MVVSection>}
      {isMobile ? (
        <SocialResponsibilityMobileView></SocialResponsibilityMobileView>
      ) : (
        <SocialResponsibility></SocialResponsibility>
      )}
      {!isMobile && <CustomerRightsMobileView></CustomerRightsMobileView>}
      <Footer></Footer>
    </PageContainer>
  );
};
