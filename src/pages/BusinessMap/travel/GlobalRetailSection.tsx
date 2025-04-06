import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { ShopCard } from '../../../components/ShopCard';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { StoreLargeCard } from '../../../components/StoreLargeCard';
import { BEIJING_STORE, SHENYANG_STORE } from './conts';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: visible;
`;

const PartnerPortContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const GlobalRetailSection = () => {
  const { t } = useTranslation();
  const [currentStore, setCurrentStore] = useState(BEIJING_STORE);
  const [showLarge, setShowLarge] = useState(false);

  return (
    <PartnerPortContainer id="partner-port" onClick={() => setShowLarge(false)}>
      <SectionTitle
        title={t('travel.global_retail_lounge.title')}
        subtitle={t('travel.global_retail_lounge.subtitle')}
      />
      {!showLarge ? (
        <Container>
          <ShopCard
            image={
              'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/2_2-HBb4VxcZzRcUjP5TWqFyTLjzcceM68.png'
            }
            title={'BEIJING'}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setCurrentStore(BEIJING_STORE);
              setShowLarge(true);
            }}
          ></ShopCard>
          <ShopCard
            image={
              'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Macau/Screenshot%202025-04-06%20at%2010.44.29%E2%80%AFPM-FZcf5KbIePliyGUObC602iADGcVJTD.png'
            }
            title={'MACAU'}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {}}
          ></ShopCard>
          <ShopCard
            image={
              'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/shenyang/1_2-uPQoAZLTpMfhSUy0ImSngAYIbJ4VVC.png'
            }
            title={'SHENYANG'}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setCurrentStore(SHENYANG_STORE);
              setShowLarge(true);
            }}
          ></ShopCard>
        </Container>
      ) : (
        <Container>
          <StoreLargeCard stores={currentStore} />
        </Container>
      )}
    </PartnerPortContainer>
  );
};
