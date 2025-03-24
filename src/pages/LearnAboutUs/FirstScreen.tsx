/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

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

export const FirstScreen = () => {
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    // Get navigation height
    const navElement = document.querySelector('nav, [role="navigation"]');
    if (navElement) {
      setNavHeight(navElement.getBoundingClientRect().height);
    }
  }, []);
  return (
    <ImageContainer navHeight={navHeight}>
      <StyledImage
        src="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/fp-2WMg2tmioyR6C0Qn0lPQGgkzZ6wve1.jpg"
        alt="Main background"
      />
    </ImageContainer>
  );
};
