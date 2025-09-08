import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { useMemo, useState } from 'react';

import { getBeijingStore, getShenyangStore } from '../conts';
import { useResponsive } from '../../../../hooks/useResponsive';
import { GlobalRetailSectionDesktop } from './Desktop';
import { SectionTitle } from '../../../../components/Title';
import { ShopCardMobile } from '../../../../components/ShopCardMobile/StoreDetail';

const PartnerPortContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const GlobalRetailSection = () => {
  const { t } = useTranslation();
  const [currentStore, setCurrentStore] = useState(getBeijingStore(t));
  const [showLarge, setShowLarge] = useState(false);
  const { isDesktop } = useResponsive();
  const storeMap = useMemo(() => {
    return {
      beijing: getBeijingStore(t),
      macau: [
        {
          id: 'macau',
          name: t('common.opening_soon'),
          address: [],
          images: ['https://cdn.liman.group/stores/travel/macau/skymall3.webp'],
        },
      ],
      shenyang: getShenyangStore(t),
    };
  }, [t]);

  return (
    <PartnerPortContainer
      id='partner-port'
      onClick={isDesktop ? () => setShowLarge(false) : undefined}
    >
      <SectionTitle
        title={t('travel.global_retail_lounge.title')}
        subtitle={t('travel.global_retail_lounge.subtitle')}
      />
      {isDesktop ? (
        <GlobalRetailSectionDesktop
          showLarge={showLarge}
          setShowLarge={setShowLarge}
          currentStore={currentStore}
          setCurrentStore={setCurrentStore}
        />
      ) : (
        <ShopCardMobile storeMap={storeMap} />
      )}
    </PartnerPortContainer>
  );
};
