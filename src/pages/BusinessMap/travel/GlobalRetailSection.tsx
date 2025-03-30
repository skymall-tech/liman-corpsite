import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { ScrollContainer } from '../../../components/ScrollContainer';
import { ShopCard } from '../../../components/ShopCard';

const PartnerPortContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const GlobalRetailSection = () => {
  return (
    <PartnerPortContainer id="partner-port">
      <SectionTitle
        title="GLOBAL RETAIL LOUNGE"
        subtitle={
          'A network of 30+ physical stores paves your path to discovery — from duty-free shopping havens to airport-based tax-inclusive boutiques.'
        }
      />
      <ScrollContainer>
        <ShopCard
          image={
            'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/travel-retail-DGuirmz9sNjx8zs6CV1sSZpK2qWkJW.png'
          }
          title={'BEIJING'}
        ></ShopCard>
        <ShopCard
          image={
            'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/travel-retail-DGuirmz9sNjx8zs6CV1sSZpK2qWkJW.png'
          }
          title={'MACAU'}
        ></ShopCard>
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
        <ShopCard
          image={
            'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/travel-retail-DGuirmz9sNjx8zs6CV1sSZpK2qWkJW.png'
          }
          title={'SHENZHEN'}
        ></ShopCard>
        <ShopCard
          image={
            'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/travel-retail-DGuirmz9sNjx8zs6CV1sSZpK2qWkJW.png'
          }
          title={'SHANGHAI'}
        ></ShopCard>
      </ScrollContainer>
    </PartnerPortContainer>
  );
};
