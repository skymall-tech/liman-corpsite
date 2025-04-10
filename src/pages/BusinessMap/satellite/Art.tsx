import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ShopCard } from '../../../components/ShopCard';

import { StoreLargeCard } from '../../../components/StoreLargeCard';
import {
  getBeijingStore,
  getGuangzhouStore,
  getMacauStore,
  getShenyangStore,
  getShenzhenStore,
} from './const';

const ArtContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: visible;
`;

export const ArtSection = () => {
  const { t } = useTranslation();
  const [currentStore, setCurrentStore] = useState(getBeijingStore(t));
  const [showLarge, setShowLarge] = useState(false);
  return (
    <ArtContainer id="art-section" onClick={() => setShowLarge(false)}>
      <SectionTitle
        title={t('satellite_paris.art.title')}
        subtitle={t('satellite_paris.art.subtitle')}
      />
      {!showLarge ? (
        <Container>
          <ShopCard
            image="https://cdn.liman.group/stores/SATELLITE/beijing1.webp"
            title={t('common.beijing')}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setCurrentStore(getBeijingStore(t));
              setShowLarge(true);
            }}
          ></ShopCard>
          <ShopCard
            image="https://cdn.liman.group/stores/SATELLITE/sanba1.webp"
            title={t('common.macau')}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setCurrentStore(getMacauStore(t));
              setShowLarge(true);
            }}
          ></ShopCard>
          <ShopCard
            image="https://cdn.liman.group/stores/SATELLITE/gaungzhou1.webp"
            title={t('common.guangzhou')}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setCurrentStore(getGuangzhouStore(t));
              setShowLarge(true);
            }}
          ></ShopCard>
          <ShopCard
            image="https://cdn.liman.group/stores/SATELLITE/shenyang1.webp"
            title={t('common.shenyang')}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setCurrentStore(getShenyangStore(t));
              setShowLarge(true);
            }}
          ></ShopCard>
          <ShopCard
            image="https://cdn.liman.group/stores/SATELLITE/shenzhen1.webp"
            title={t('common.shenzhen')}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setCurrentStore(getShenzhenStore(t));
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
    </ArtContainer>
  );
};
