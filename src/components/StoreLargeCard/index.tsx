import { useState } from 'react';
import styled from '@emotion/styled';
import ChevronLeft from '../../assets/icons/left-white.svg';
import ChevronRight from '../../assets/icons/right-white.svg';
import ChevronUp from '../../assets/icons/up-white.svg';
import ChevronDown from '../../assets/icons/down-white.svg';

interface Store {
  id: string;
  name: string;
  images: string[];
  address: string;
}

interface StoreLargeCardProps {
  stores: Store[];
}

const MainSection = styled.div`
  position: relative;
  width: 75vw;
  height: calc(85vh - 150px);
  overflow: hidden;
  border-radius: 16px;
`;

const ImageContainer = styled.div`
  overflow: visible;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  transition: transform 0.5s ease;
  flex-shrink: 0;
`;

const StoreImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
`;

const SidebarContainer = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(226, 199, 153, 0.1) 0%,
    rgba(186, 153, 95, 0.4) 40%,
    rgba(181, 145, 82, 0.5) 90%
  );
`;

const Sidebar = styled.div`
  position: absolute;
  right: 105px;
  top: 88px;
  bottom: 88px;
  width: 200px;
  scrollbar-width: 3px;
  scrollbar-color: #000 #fff;
  overflow-y: scroll;
`;

const StoreItem = styled.div<{ isCurrentStore: boolean }>`
  cursor: pointer;
  margin-bottom: 10px;
  font-size: var(--font-size-h3);
  font-weight: 800;
  color: white;
  opacity: ${({ isCurrentStore }) => (isCurrentStore ? 1 : 0.5)};
  &:hover {
    opacity: 1;
  }
`;

const StoreAddress = styled.div`
  font-size: var(--font-size-body);
  font-weight: 400;
  color: #fff;
  margin-bottom: 43px;
`;

const Icon = styled.img<{ position: string }>`
  position: absolute;
  width: 44px;
  height: 44px;
  opacity: 0.8;
  ${({ position }) => {
    switch (position) {
      case 'left':
        return `left: 20px; top: calc(50% - 22px);`;
      case 'right':
        return `right: 20px; top: calc(50% - 22px);`;
      case 'top':
        return `top: 20px; left: calc(50% - 22px);`;
      case 'bottom':
        return `bottom: 20px; left: calc(50% - 22px);`;
    }
  }}
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    opacity: 1;
  }
`;

export const StoreLargeCard: React.FC<StoreLargeCardProps> = ({ stores }) => {
  const [currentStoreIndex, setCurrentStoreIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentStore = stores[currentStoreIndex];

  const handlePrevStore = () => {
    setCurrentStoreIndex((prev) => (prev > 0 ? prev - 1 : stores.length - 1));
    setCurrentImageIndex(0);
  };

  const handleNextStore = () => {
    setCurrentStoreIndex((prev) => (prev < stores.length - 1 ? prev + 1 : 0));
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : currentStore.images.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < currentStore.images.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <MainSection>
      <ImageContainer
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {currentStore.images.map((image, index) => (
          <StoreImage
            key={`${currentStore.id}-${index}`}
            src={image}
            alt={`${currentStore.name} - ${index + 1}`}
          />
        ))}
      </ImageContainer>
      <SidebarContainer>
        <Sidebar>
          {stores.map((store, index) => (
            <>
              <StoreItem
                onClick={() => setCurrentStoreIndex(index)}
                key={store.id}
                isCurrentStore={currentStore.id === store.id}
              >
                {store.name}
              </StoreItem>
              {currentStore.id === store.id && (
                <StoreAddress>{store.address}</StoreAddress>
              )}
            </>
          ))}
        </Sidebar>
      </SidebarContainer>
      <Icon src={ChevronLeft} onClick={handlePrevImage} position="left" />
      <Icon src={ChevronRight} onClick={handleNextImage} position="right" />
      <Icon src={ChevronUp} onClick={handlePrevStore} position="top" />
      <Icon src={ChevronDown} onClick={handleNextStore} position="bottom" />
    </MainSection>
  );
};
