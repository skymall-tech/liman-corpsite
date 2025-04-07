import styled from '@emotion/styled';
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
  margin-top: 9vh;
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
    t('cooperate_culture.customer_rights.p1'),
    t('cooperate_culture.customer_rights.p2'),
    t('cooperate_culture.customer_rights.p3'),
    t('cooperate_culture.customer_rights.p4'),
    t('cooperate_culture.customer_rights.p5'),
  ];
};

export const CustomerRights = () => {
  const { t } = useTranslation();
  const paragraphs = getParagraphs(t);
  return (
    <Container id="customer-rights">
      <RotateCardContainer>
        <RotateCardContent
          paragraphs={paragraphs}
          title={t('cooperate_culture.social_responsibility.customer_rights')}
          textAlign="right"
        ></RotateCardContent>
        <RotateCard
          rightRotate
          src={
            'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/culture/2-miSHKMgNmaLQfs3rCBouFugpr0Q1s3.png'
          }
        ></RotateCard>
      </RotateCardContainer>
    </Container>
  );
};
