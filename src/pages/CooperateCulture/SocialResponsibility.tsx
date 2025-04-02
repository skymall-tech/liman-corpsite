import styled from '@emotion/styled';
import { SectionTitle } from '../../components/Title';
import { RotateCard } from '../../components/RotateCard';
import { RotateCardContent } from '../../components/RotateCard/Content';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RotateCardContainer = styled.div`
  margin-top: 4vh;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 4vw;
  overflow: visible;
`;

const getParagraphs = (t: TFunction) => {
  return [
    t('cooperate_culture.social_responsibility.p1'),
    t('cooperate_culture.social_responsibility.p2'),
    t('cooperate_culture.social_responsibility.p3'),
    t('cooperate_culture.social_responsibility.p4'),
  ];
};

export const SocialResponsibility = () => {
  const { t } = useTranslation();
  const paragraphs = getParagraphs(t);
  return (
    <Container id="social-responsibility">
      <SectionTitle
        title={t('cooperate_culture.social_responsibility.title')}
        subtitle={t('cooperate_culture.social_responsibility.subtitle')}
      />
      <RotateCardContainer>
        <RotateCard src="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Screenshot%202025-04-02%20at%209.51.45%E2%80%AFPM-09NGvJKFCHG4jOYuHxNgj8czwOXoz4.png"></RotateCard>
        <RotateCardContent
          paragraphs={paragraphs}
          title={t('cooperate_culture.social_responsibility.customer_rights')}
        ></RotateCardContent>
      </RotateCardContainer>
    </Container>
  );
};
