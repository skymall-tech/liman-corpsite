import styled from '@emotion/styled';
import { RotateCard } from '../../components/RotateCard';
import { RotateCardContent } from '../../components/RotateCard/Content';
import { useTranslation } from 'react-i18next';
import RewardsMobile from './RewardsMobile';
import { getCustomerRightsParagraphs } from './consts';
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9vh;
  margin-top: 9dvh;
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

export const CustomerRights = () => {
  const { t } = useTranslation();
  const paragraphs = getCustomerRightsParagraphs(t);
  return (
    <Container id='customer-rights'>
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

export const CustomerRightsMobileView = () => {
  const { t } = useTranslation();
  const paragraphs = getCustomerRightsParagraphs(t);

  return (
    <RewardsMobile
      id='customer-rights'
      contentTitle={t(
        'cooperate_culture.social_responsibility.customer_rights'
      )}
      paragraphs={paragraphs}
      imageSrc='https://cdn.liman.group/culture_rewards/2.webp'
      showTitle={false}
    />
  );
};
