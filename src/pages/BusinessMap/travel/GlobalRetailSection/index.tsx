import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { getBeijingStore } from '../conts';
import { useResponsive } from '../../../../hooks/useResponsive';
import { GlobalRetailSectionDesktop } from './Desktop';
import { GlobalRetailSectionMobile } from './Mobile';
import { SectionTitle } from '../../../../components/Title';

const PartnerPortContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  // min-height: 100dvh;
`;

export const GlobalRetailSection = () => {
  const { t } = useTranslation();
  const [currentStore, setCurrentStore] = useState(getBeijingStore(t));
  const [showLarge, setShowLarge] = useState(false);
  const { isDesktop } = useResponsive();

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
        <GlobalRetailSectionMobile
          showLarge={showLarge}
          setShowLarge={setShowLarge}
          currentStore={currentStore}
          setCurrentStore={setCurrentStore}
        />
      )}
    </PartnerPortContainer>
  );
};
