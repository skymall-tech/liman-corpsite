import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Dispatch, SetStateAction } from 'react';

import { ShopCard } from '../../../../components/ShopCard';
import { StoreLargeCard } from '../../../../components/StoreLargeCard';
import { getBeijingStore, getShenyangStore, type Store } from '../conts';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: visible;
  margin-top: 40px;
`;

export const GlobalRetailSectionDesktop = ({
  showLarge,
  setShowLarge,
  currentStore,
  setCurrentStore,
}: {
  showLarge: boolean;
  setShowLarge: Dispatch<SetStateAction<boolean>>;
  currentStore: Store[];
  setCurrentStore: Dispatch<SetStateAction<Store[]>>;
}) => {
  const { t } = useTranslation();

  return (
    <>
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
            image={'https://cdn.liman.group/stores/travel/macau/skymall4.webp'}
            title={t('common.macau')}
            notOpen={true}
            imagePosition='left'
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
    </>
  );
};
