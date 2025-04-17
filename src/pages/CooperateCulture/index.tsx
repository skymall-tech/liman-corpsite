import { Footer } from '../../components/Footer';
import { PageContainer } from '../../components/PageConatiner';
import { useScrollSections } from '../../hooks/useScrollSections';
import { MVVSection } from './MvvSection';
import {
  SocialResponsibility,
  SocialResponsibilityMobileView,
} from './SocialResponsibility';
import { useResponsive } from '../../hooks/useResponsive';
import { MVVMobile } from './MVVMobile';
import {
  CommunityContribution,
  CommunityContributionMobileView,
} from './CommunityContribution';

export const CooperateCulturePage: React.FC = () => {
  const { isMobile } = useResponsive();

  useScrollSections({
    sections: isMobile
      ? [
          'mvv-section',
          'social-responsibility',
          'community-contribution',
          'footer',
        ]
      : [
          'mvv-section',
          'social-responsibility',
          'community-contribution',
          'footer',
        ],
  });
  return (
    <PageContainer>
      {isMobile ? <MVVMobile></MVVMobile> : <MVVSection></MVVSection>}
      {isMobile ? (
        <SocialResponsibilityMobileView></SocialResponsibilityMobileView>
      ) : (
        <SocialResponsibility></SocialResponsibility>
      )}
      {isMobile ? (
        <CommunityContributionMobileView></CommunityContributionMobileView>
      ) : (
        <CommunityContribution></CommunityContribution>
      )}
      <Footer></Footer>
    </PageContainer>
  );
};
