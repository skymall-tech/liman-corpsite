import styled from '@emotion/styled';
import { SectionTitle } from '../../components/Title';
import { RotateCard } from '../../components/RotateCard';
import { RotateCardContent } from '../../components/RotateCard/Content';
import { useTranslation } from 'react-i18next';
import RewardsMobile from './RewardsMobile';
import { getSocialResponsibilityParagraphs } from './consts';
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  // min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const SocialResponsibility = () => {
  const { t } = useTranslation();
  const paragraphs = getSocialResponsibilityParagraphs(t);
  return (
    <Container id='social-responsibility'>
      <SectionTitle
        title={t('cooperate_culture.social_responsibility.title')}
        subtitle={t('cooperate_culture.social_responsibility.subtitle')}
      />
      <RotateCardContainer>
        <RotateCard src='https://cdn.liman.group/culture_rewards/1.webp'></RotateCard>
        <RotateCardContent
          paragraphs={paragraphs}
          title={t('cooperate_culture.social_responsibility.customer_rights')}
        ></RotateCardContent>
      </RotateCardContainer>
    </Container>
  );
};

export const SocialResponsibilityMobileView = () => {
  const { t } = useTranslation();
  const paragraphs = [...getSocialResponsibilityParagraphs(t)];

  return (
    <RewardsMobile
      id='social-responsibility'
      title={t('cooperate_culture.social_responsibility.title')}
      subtitle={t('cooperate_culture.social_responsibility.subtitle')}
      contentTitle={t(
        'cooperate_culture.social_responsibility.customer_rights'
      )}
      paragraphs={paragraphs}
      imageSrc='https://cdn.liman.group/culture_rewards/1.webp'
    />
  );
};
