import styled from '@emotion/styled';
import { Dispatch, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { Store } from '../conts';
import { getBeijingStore, getShenyangStore } from '../conts';
import expandWhiteIcon from '../../../../assets/icons/expand-white.svg';
import locationIcon from '../../../../assets/icons/location.svg';
import { BREAKPOINTS } from '../../../../hooks/useResponsive';

const MobileContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
`;

const StoreTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

const StoreTag = styled.div<{ isActive?: boolean }>`
  width: auto;
  height: 100%;
  background-color: ${({ isActive }) => (isActive ? '#B59152' : '#F3F0EC')};
  color: ${({ isActive }) => (isActive ? '#F3F0EC' : '#B59152')};
  padding: 4px 15px;
  border-radius: 8px;
  border: 1px solid #b59152;
`;

const StoreImage = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  border-radius: 8px;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

const ArrowIcon = styled(motion.img)`
  width: 20px;
  height: 10px;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

const BlurredBoxContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px 20px;
  border-bottom: 1px solid white;

  // Tablet
  @media screen and (min-width: ${BREAKPOINTS.medium}px) and (max-width: ${BREAKPOINTS.large}px) {
    padding: 40px;
  }
`;

const StoreTitleContainer = styled(motion.div)`
  width: 100%;
  background-color: rgba(179, 179, 179, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  border: 1px solid white;
`;

const StoreTitle = styled.h3`
  color: white;
  font-size: var(--font-size-h3);
  text-transform: uppercase;
  font-weight: bold;
`;

const ExpandableContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;
`;

const Address = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

const AddressIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const StoreSelector = ({
  showLarge,
  setShowLarge,
  currentStore,
}: {
  showLarge: boolean;
  setShowLarge: Dispatch<SetStateAction<boolean>>;
  currentStore: Store[];
}) => {
  const { t } = useTranslation();
  const macauTitle = t('common.opening_soon');

  return (
    <BlurredBoxContainer onClick={() => setShowLarge((prev) => !prev)}>
      <ArrowIcon
        src={expandWhiteIcon}
        alt='Expand Icon'
        animate={{ rotate: showLarge ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <StoreTitleContainer
          animate={{
            height: showLarge ? '400px' : '',
            padding: showLarge ? '40px' : '8px',
          }}
          transition={{ duration: 0.3 }}
        >
          <ExpandableContainer>
            <StoreTitle>
              {currentStore.length ? currentStore[0]?.name : macauTitle}
            </StoreTitle>
            {currentStore.length > 0 && showLarge && (
              <AddressContainer>
                {currentStore.map((store) => (
                  <Address>
                    <span style={{ flexShrink: 0 }}>
                      <AddressIcon src={locationIcon} alt='location' />
                    </span>
                    <span style={{ flex: 9 }}>{store.address}</span>
                  </Address>
                ))}
              </AddressContainer>
            )}
          </ExpandableContainer>
        </StoreTitleContainer>
      </div>
    </BlurredBoxContainer>
  );
};

const StoreDetail = ({
  currentStore,
  showLarge,
  setShowLarge,
}: {
  currentStore: Store[];
  showLarge: boolean;
  setShowLarge: Dispatch<SetStateAction<boolean>>;
}) => {
  const macauImage =
    'https://cdn.liman.group/stores/travel/macau/skymall2.webp';
  const displayImage = currentStore[0]?.images[0] || macauImage;

  return (
    <div
      style={{
        width: '90vw',
        height: '100%',
        marginTop: '20px',
        position: 'relative',
      }}
    >
      <StoreImage src={displayImage} alt='' />
      <StoreSelector
        showLarge={showLarge}
        setShowLarge={setShowLarge}
        currentStore={currentStore}
      />
    </div>
  );
};

enum City {
  BEIJING = 'beijing',
  MACAU = 'macau',
  SHENYANG = 'shenyang',
}

export const GlobalRetailSectionMobile = ({
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
  const [city, setCity] = useState<City>(City.BEIJING);

  const getStore = (city: City) => {
    switch (city) {
      case City.BEIJING:
        return getBeijingStore(t);

      case City.SHENYANG:
        return getShenyangStore(t);

      case City.MACAU:
      default:
        return [];
    }
  };

  return (
    <MobileContainer>
      <StoreTags>
        {Object.values(City).map((currentCity) => (
          <StoreTag
            isActive={city === currentCity}
            onClick={() => {
              setCity(currentCity);
              setCurrentStore(getStore(currentCity));
            }}
          >
            {t(`common.${currentCity}`)}
          </StoreTag>
        ))}
      </StoreTags>

      <StoreDetail
        currentStore={currentStore}
        showLarge={showLarge}
        setShowLarge={setShowLarge}
      />
    </MobileContainer>
  );
};
