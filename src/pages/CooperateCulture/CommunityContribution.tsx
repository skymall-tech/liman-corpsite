import styled from '@emotion/styled';
import { RotateCard } from '../../components/RotateCard';
import { RotateCardContent } from '../../components/RotateCard/Content';
import { useTranslation } from 'react-i18next';
import RewardsMobile from './RewardsMobile';
import {
  getCommunityParagraphs,
  getSocialResponsibilityParagraphs,
} from './consts';
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  // min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9vh;
  // margin-top: 9dvh;
`;

const RotateCardContainer = styled.div`
  margin-top: 4vh;
  // margin-top: 4dvh;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 4vw;
  overflow: visible;
`;

export const CommunityContribution = () => {
  const { t } = useTranslation();
  const paragraphs = getCommunityParagraphs(t);
  return (
    <Container id='community-contribution'>
      <RotateCardContainer>
        <RotateCardContent
          paragraphs={paragraphs}
          title={t('cooperate_culture.community_contribution.title')}
          textAlign='right'
        ></RotateCardContent>
        <RotateCard
          rightRotate
          src={'https://cdn.liman.group/culture_rewards/2.webp'}
        ></RotateCard>
      </RotateCardContainer>
    </Container>
  );
};

export const SocialResponsibilityMobileView = () => {
  const { t } = useTranslation();
  const paragraphs = getSocialResponsibilityParagraphs(t);

  return (
    <RewardsMobile
      id='social-responsibility'
      contentTitle={t(
        'cooperate_culture.social_responsibility.customer_rights'
      )}
      paragraphs={paragraphs}
      imageSrc='https://cdn.liman.group/culture_rewards/2.webp'
      showTitle={false}
    />
  );
};

export const CommunityContributionMobileView = () => {
  const { t } = useTranslation();
  const paragraphs = getCommunityParagraphs(t);

  return (
    <RewardsMobile
      showDivider={false}
      style={{
        marginTop: '3vh',
      }}
      id='community-contribution'
      contentTitle={t('cooperate_culture.community_contribution.title')}
      paragraphs={paragraphs}
      imageSrc='https://cdn.liman.group/culture_rewards/2.webp'
      showTitle={false}
    />
  );
};
