import styled from '@emotion/styled';
import { BREAKPOINTS } from '../../hooks/useResponsive';

const TitleContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // Tablet
  @media screen and (min-width: ${BREAKPOINTS.medium}px) and (max-width: ${BREAKPOINTS.large}px) {
    padding-top: 0;
    justify-content: flex-end;
    padding-bottom: min(140px, 20vh);
    overflow: hidden;
  }

  // Mobile
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    padding-top: 0;
    justify-content: flex-end;
    padding-bottom: min(140px, 20vh);
    overflow: hidden;
  }
`;

const Title = styled.h1`
  font-size: 100px;
  font-weight: 900;
  color: var(--color-primary);

  // Large screen
  @media screen and (min-width: 2000px) {
    font-size: 90px;
  }

  // Tablet
  @media screen and (min-width: ${BREAKPOINTS.medium}px) and (max-width: ${BREAKPOINTS.large}px) {
    font-size: 80px;
  }

  // Mobile
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    font-size: 40px;
  }
`;

const Desc = styled.p`
  margin-top: 44px;
  font-size: var(--font-size-h3);
  color: var(--color-primary);
  width: max(30vw, 430px);
  text-align: center;

  // Tablet
  @media screen and (min-width: ${BREAKPOINTS.medium}px) and (max-width: ${BREAKPOINTS.large}px) {
    margin-top: 24px;
  }

  // Mobile
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    margin-top: 16px;
  }
`;

const Logo = styled.img`
  width: 580px;

  // Tablet
  @media screen and (min-width: ${BREAKPOINTS.medium}px) and (max-width: ${BREAKPOINTS.large}px) {
    transform: scale(0.6) translateY(100px);
  }

  // Mobile
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    transform: scale(0.45) translateY(240px);
  }
`;

export const LargeTitle = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  return (
    <>
      <TitleContainer>
        <Logo src='https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/LM-52Sc6NnIIH12Warrw1g78NJgemY0wb.png' />
      </TitleContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </TitleContainer>
    </>
  );
};
