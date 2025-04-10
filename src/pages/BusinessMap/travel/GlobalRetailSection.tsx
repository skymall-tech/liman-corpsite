import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { ShopCard } from '../../../components/ShopCard';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { StoreLargeCard } from '../../../components/StoreLargeCard';
import { getBeijingStore, getShenyangStore } from './conts';

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
  const [currentStore, setCurrentStore] = useState(getBeijingStore(t));
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
            image={'https://cdn.liman.group/stores/travel/beijing/1.webp'}
            title={t('common.beijing')}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setCurrentStore(getBeijingStore(t));
              setShowLarge(true);
            }}
          ></ShopCard>
          <ShopCard
            image={'https://cdn.liman.group/stores/travel/macau/skymall.webp'}
            title={t('common.macau')}
            notOpen={true}
            onClick={() => {
              return;
            }}
          ></ShopCard>
          <ShopCard
            image={'https://cdn.liman.group/stores/travel/shenyang/1_2.webp'}
            title={t('common.shenyang')}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setCurrentStore(getShenyangStore(t));
              setShowLarge(true);
            }}
          ></ShopCard>
        </Container>
      ) : (
        <Container>
          <StoreLargeCard
            stores={currentStore}
            onPackUp={() => setShowLarge(false)}
          />
        </Container>
      )}
    </PartnerPortContainer>
  );
};
