/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import moreIcon from '../../assets/icons/more.svg';
import { keyframes } from '@emotion/react';
import { useNavigationHeight } from '../../hooks/useNavigationHeight';
import { LargeTitle } from '../../components/largeTitle';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(-10px) translateX(-50%);
  }
`;

export const ImageContainer = styled.div<{ navHeight: number }>`
  width: 100vw;
  height: ${({ navHeight }) => `calc(100vh - ${navHeight}px)`};
  overflow: hidden;
  position: relative;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #412c07;
  opacity: 0.8;
  pointer-events: none;
`;

export const IconContainer = styled.div`
  position: absolute;
  bottom: 62px;
  left: 50%;
  transform: translateX(-50%);
  width: 45px;
  height: 45px;
  cursor: pointer;
  animation: ${bounce} 2s ease-in-out infinite;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(-50%) scale(1.2);
    animation-play-state: paused;
  }
`;

export const FirstScreen = ({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) => {
  const navHeight = useNavigationHeight();

  const handleIconClick = () => {
    const element = document.getElementById('business-map-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ImageContainer navHeight={navHeight} id="first-screen">
      <StyledImage src={image} alt="Main background" />
      <ImageOverlay />
      <IconContainer onClick={handleIconClick}>
        <img src={moreIcon} alt="More" width={45} height={45} />
      </IconContainer>
      <LargeTitle title={title} desc={desc} />
    </ImageContainer>
  );
};
