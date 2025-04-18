import { useState } from 'react';
import styled from '@emotion/styled';
import ChevronLeft from '../../assets/icons/left-white.svg';
import ChevronRight from '../../assets/icons/right-white.svg';
import PackUp from '../../assets/icons/packup.svg';
import LocationIcon from '../../assets/icons/location.svg';

interface Store {
  id: string;
  name: string;
  images: string[];
  address: string[];
}

interface StoreLargeCardProps {
  stores: Store[];
  onPackUp: () => void;
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

const StoreContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease;
  overflow: visible;
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
  width: 300px;
  scrollbar-width: 3px;
  scrollbar-color: #000 #fff;
  overflow-y: scroll;
  text-align: right;
`;

const StoreItem = styled.div<{ isCurrentStore: boolean }>`
  cursor: pointer;
  margin-bottom: ${({ isCurrentStore }) => (isCurrentStore ? '8px' : '16px')};
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
  margin-bottom: 40px;
`;

const AddressLine = styled.div`
  display: flex;
  gap: 4px;
  justify-content: flex-end;
  margin-bottom: 8px;
  align-items: baseline;

  img {
    width: 9px;
    height: 9px;
    flex-shrink: 0;
    margin-top: 0;
    display: inline;
    vertical-align: baseline;
  }

  span {
    text-align: right;
    line-height: 1.2;
  }
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

const PackUpContainer = styled.div`
  cursor: pointer;
  position: absolute;
  right: 25px;
  top: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    font-size: var(--font-size-body);
    color: #fff;
  }
  padding-bottom: 3px;
  border-bottom: 1px solid #fff;
`;

const PackUpIcon = styled.img`
  width: 10px;
  height: 6px;
`;

export const StoreLargeCard: React.FC<StoreLargeCardProps> = ({
  stores,
  onPackUp,
}) => {
  const [currentStoreIndex, setCurrentStoreIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentStore = stores[currentStoreIndex];

  // const handlePrevStore = () => {
  //   setCurrentStoreIndex((prev) => (prev > 0 ? prev - 1 : stores.length - 1));
  //   setCurrentImageIndex(0);
  // };

  // const handleNextStore = () => {
  //   setCurrentStoreIndex((prev) => (prev < stores.length - 1 ? prev + 1 : 0));
  //   setCurrentImageIndex(0);
  // };

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
    <MainSection onClick={(e) => e.stopPropagation()}>
      <StoreContainer
        style={{ transform: `translateY(-${currentStoreIndex * 100}%)` }}
      >
        {stores.map((store) => (
          <ImageContainer
            key={store.id}
            style={
              store.id === currentStore.id
                ? { transform: `translateX(-${currentImageIndex * 100}%)` }
                : {}
            }
          >
            {store.images.map((image, index) => (
              <StoreImage
                key={`${store.id}-${index}`}
                src={image}
                alt={`${store.name} - ${index + 1}`}
              />
            ))}
          </ImageContainer>
        ))}
      </StoreContainer>
      <SidebarContainer>
        <Sidebar>
          {stores.map((store, index) => (
            <>
              <StoreItem
                onClick={() => {
                  setCurrentStoreIndex(index);
                  setCurrentImageIndex(0);
                }}
                key={store.id}
                isCurrentStore={currentStore.id === store.id}
              >
                {store.name}
              </StoreItem>
              {currentStore.id === store.id && (
                <StoreAddress>
                  {store.address.map((address, index) => (
                    <AddressLine key={index}>
                      <img src={LocationIcon} alt="location" />
                      <span>{address}</span>
                    </AddressLine>
                  ))}
                </StoreAddress>
              )}
            </>
          ))}
        </Sidebar>
        <PackUpContainer onClick={onPackUp}>
          <div>Pack Up</div>
          <PackUpIcon src={PackUp} />
        </PackUpContainer>
      </SidebarContainer>
      <Icon src={ChevronLeft} onClick={handlePrevImage} position="left" />
      <Icon src={ChevronRight} onClick={handleNextImage} position="right" />
    </MainSection>
  );
};
