import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { ShopCard } from '../../../components/ShopCard';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PartnerPortContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const GlobalRetailSection = () => {
  const { t } = useTranslation();
  return (
    <PartnerPortContainer id="partner-port">
      <SectionTitle
        title={t('travel.global_retail_lounge.title')}
        subtitle={t('travel.global_retail_lounge.subtitle')}
      />
      <Container>
        <ShopCard
          image={
            'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/travel-retail-DGuirmz9sNjx8zs6CV1sSZpK2qWkJW.png'
          }
          title={'SHENYANG'}
        ></ShopCard>
        <ShopCard
          image={
            'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/travel-retail-DGuirmz9sNjx8zs6CV1sSZpK2qWkJW.png'
          }
          title={'BEIJING'}
        ></ShopCard>
      </Container>
    </PartnerPortContainer>
  );
};
