import styled from '@emotion/styled';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import expandWhiteIcon from '../../assets/icons/expand-white.svg';
import locationIcon from '../../assets/icons/location.svg';
import { BREAKPOINTS } from '../../hooks/useResponsive';

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  position: relative;

  .swiper {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    overflow: visible;
  }

  .swiper-pagination-bullet {
    opacity: 0;
  }
  .swiper-wrapper {
    align-items: stretch;
  }
  .swiper-slide {
    width: calc(100vw - 80px);
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
  .swiper-slide-active {
    opacity: 1;
  }
`;

const MobileContainer = styled.div`
  width: 100vw;
  height: auto;
  padding: 0;
`;

const StoreTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 0 20px;
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

const ImageSwitchButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #333;
  z-index: 1;
`;

interface StoreSlideProps {
  store: Store;
  showLarge: boolean;
  onToggleExpand: () => void;
}

const StoreSlide: React.FC<StoreSlideProps> = ({
  store,
  showLarge,
  onToggleExpand,
}) => {
  const hasAddress = store.address.length > 0;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === store.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div style={{ position: 'relative' }}>
      <StoreImage src={store.images[currentImageIndex]} alt="" />
      {store.images.length > 1 && store.images.length < 1 && (
        <ImageSwitchButton onClick={handleNextImage}>⟳</ImageSwitchButton>
      )}
      <BlurredBoxContainer
        onClick={() => {
          if (hasAddress) {
            onToggleExpand();
          }
        }}
      >
        {hasAddress && (
          <ArrowIcon
            src={expandWhiteIcon}
            alt="Expand Icon"
            animate={{ rotate: showLarge ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
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
              <StoreTitle>{store.name}</StoreTitle>
              {showLarge && (
                <AddressContainer>
                  <Address>
                    <span style={{ flexShrink: 0 }}>
                      <AddressIcon src={locationIcon} alt="location" />
                    </span>
                    <span style={{ flex: 9 }}>{store.address}</span>
                  </Address>
                </AddressContainer>
              )}
            </ExpandableContainer>
          </StoreTitleContainer>
        </div>
      </BlurredBoxContainer>
    </div>
  );
};

const StoreDetail = ({ currentStore }: { currentStore: Store[] }) => {
  const [showLarge, setShowLarge] = useState(false);

  return (
    <Container>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        cssMode={true}
        spaceBetween={10}
        slidesPerView={'auto'}
        centeredSlides={true}
        initialSlide={0}
      >
        {currentStore.map((store) => (
          <SwiperSlide key={store.id}>
            <StoreSlide
              store={store}
              showLarge={showLarge}
              onToggleExpand={() => setShowLarge((prev) => !prev)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

type Store = {
  id: string;
  name: string;
  images: string[];
  address: string[];
};

type StoreMap = {
  [key: string]: Store[];
};

export const ShopCardMobile = ({ storeMap }: { storeMap: StoreMap }) => {
  const { t } = useTranslation();
  const [city, setCity] = useState(Object.keys(storeMap)[0]);

  return (
    <MobileContainer>
      <StoreTags>
        {Object.keys(storeMap).map((currentCity) => (
          <StoreTag
            isActive={city === currentCity}
            onClick={() => {
              setCity(currentCity);
            }}
          >
            {t(`common.${currentCity}`)}
          </StoreTag>
        ))}
      </StoreTags>

      <StoreDetail currentStore={storeMap[city]} />
    </MobileContainer>
  );
};
