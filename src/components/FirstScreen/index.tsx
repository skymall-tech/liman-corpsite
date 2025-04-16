/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import moreIcon from '../../assets/icons/more.svg';
import { keyframes } from '@emotion/react';
import { LargeTitle } from '../../components/largeTitle';
import { BREAKPOINTS, useResponsive } from '../../hooks/useResponsive';
import { useNavigationHeight } from '../../hooks/useNavigationHeight';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(-10px) translateX(-50%);
  }
`;

export const ImageContainer = styled.div<{
  navHeight: number;
  navBottom: string;
}>`
  width: 100vw;
  height: ${({ navHeight }) => `calc(100vh - ${navHeight}px)`};
  overflow: hidden;
  position: relative;
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    height: ${({ navHeight, navBottom }) =>
      `calc(100vh - ${navHeight}px - ${navBottom})`};
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  background-color: #412c07f5;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #746242ed;
  opacity: 0.8;
  pointer-events: none;
`;

export const IconContainer = styled.div`
  position: absolute;
  bottom: min(62px, 8vh);
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

const MoreIcon = styled.img`
  width: 45px;
  height: 45px;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
`;

const getNavBottom = (): string => {
  const isWechat = /MicroMessenger/i.test(navigator.userAgent);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isSafari =
    /Safari/i.test(navigator.userAgent) && !/Chrome/i.test(navigator.userAgent);
  const isChrome = /Chrome/i.test(navigator.userAgent) && !isWechat;

  let navBottom = '0px'; // Default for desktop and WeChat

  if (isMobile) {
    if (isChrome) {
      navBottom = '80px';
    } else if (isSafari) {
      navBottom = '70px';
    }
  }

  return navBottom;
};

export const FirstScreen = ({
  title,
  desc,
  image,
  nextSectionId,
  showOverlay = false,
}: {
  title: string;
  desc: string;
  image: string;
  nextSectionId: string;
  showOverlay?: boolean;
}) => {
  const handleIconClick = () => {
    const element = document.getElementById(nextSectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navBottom = getNavBottom();
  const navHeight = useNavigationHeight();
  const { isMobile } = useResponsive();

  return (
    <ImageContainer
      navHeight={isMobile ? 0 : navHeight}
      navBottom={navBottom}
      id='first-screen'
    >
      <StyledImage src={image} alt='Main background' />
      {showOverlay && <ImageOverlay />}
      <LargeTitle title={title} desc={desc} />
      <IconContainer onClick={handleIconClick}>
        <MoreIcon src={moreIcon} alt='More' />
      </IconContainer>
    </ImageContainer>
  );
};
