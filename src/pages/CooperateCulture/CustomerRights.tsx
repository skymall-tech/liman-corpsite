import styled from '@emotion/styled';
import { RotateCard } from '../../components/RotateCard';
import { RotateCardContent } from '../../components/RotateCard/Content';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { BREAKPOINTS } from '../../hooks/useResponsive';
import { useNavigationHeight } from '../../hooks/useNavigationHeight';

const Container = styled.div<{ navHeight: number }>`
  width: 100vw;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9vh;
  margin-top: 9dvh;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    height: 100vh;
    height: 100dvh;
    padding-top: ${({ navHeight }) => navHeight}px;
  }
`;

const RotateCardContainer = styled.div`
  margin-top: 4vh;
  margin-top: 4dvh;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 4vw;
  overflow: visible;
`;

const getParagraphs = (t: TFunction) => {
  return [
    t('cooperate_culture.customer_rights.p1'),
    t('cooperate_culture.customer_rights.p2'),
    t('cooperate_culture.customer_rights.p3'),
    t('cooperate_culture.customer_rights.p4'),
    t('cooperate_culture.customer_rights.p5'),
  ];
};

export const CustomerRights = () => {
  const { t } = useTranslation();
  const navHeight = useNavigationHeight();
  const paragraphs = getParagraphs(t);
  return (
    <Container id='customer-rights' navHeight={navHeight}>
      <RotateCardContainer>
        <RotateCardContent
          paragraphs={paragraphs}
          title={t('cooperate_culture.social_responsibility.customer_rights')}
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
