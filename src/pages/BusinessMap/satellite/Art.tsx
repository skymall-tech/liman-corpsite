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
            image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Satellite-store/%E5%8C%97%E4%BA%AC1-nu74GDrZ4QPnZzt5GJQhDLYN1IFiM7.png"
            title={t('common.beijing')}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setCurrentStore(getBeijingStore(t));
              setShowLarge(true);
            }}
          ></ShopCard>
          <ShopCard
            image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Satellite-store/%E5%A4%A7%E4%B8%89%E5%B7%B41-vLSISVnMzvng7p1cWIe9BbqrFr63BV.png"
            title={t('common.macau')}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setCurrentStore(getMacauStore(t));
              setShowLarge(true);
            }}
          ></ShopCard>
          <ShopCard
            image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Satellite-store/%E5%A8%81%E5%B0%BC%E6%96%AF%E4%BA%BA1-vuWox52iIIH0wuwro6fMatp6sATJi2.png"
            title={t('common.guangzhou')}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setCurrentStore(getGuangzhouStore(t));
              setShowLarge(true);
            }}
          ></ShopCard>
          <ShopCard
            image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Satellite-store/%E6%B2%88%E9%98%B31-cPFyfGIvZf85qIGrarbqw8jUHo6v66.png"
            title={t('common.shenyang')}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setCurrentStore(getShenyangStore(t));
              setShowLarge(true);
            }}
          ></ShopCard>
          <ShopCard
            image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Satellite-store/%E6%B7%B1%E5%9C%B31-YDsirA7Jf4Igri5vjo5qI06AbijXU8.png"
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
