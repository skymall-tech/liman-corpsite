import styled from '@emotion/styled';
import { BREAKPOINTS } from '../../hooks/useResponsive';

const CardContainer = styled.div`
  position: relative;
  width: 23vw;
  height: 38vw;
  background-color: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 1vw;
  transition: transform 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    .overlay-mask {
      opacity: 0;
    }
    .card-image {
      filter: sepia(0);
    }
  }

  // Mobile & Tablet
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    width: 80vw;
    height: 120vw;
    margin: 0;
  }
`;

const OverlayMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #b38c48 0%, #71511a 100%);
  opacity: 0;
  mix-blend-mode: overlay;

  // Tablet
  @media screen and (min-width: ${BREAKPOINTS.medium}px) and (max-width: ${BREAKPOINTS.large}px) {
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(179, 140, 72, 0.4) 40%,
      rgba(113, 81, 26, 0.4) 60%,
      transparent 100%
    );
    opacity: 1;
    mix-blend-mode: multiply;
  }

  // Mobile
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    background: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 50%,
      rgba(113, 81, 26, 0.7) 100%
    );
    opacity: 1;
    mix-blend-mode: multiply;
  }
`;

const CardImage = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 100%;
  transition: filter 0.3s;
  filter: sepia(0.9);
  &:hover {
    filter: sepia(0);
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  // Mobile & Tablet
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    filter: sepia(0.6);
  }
`;

const CardTitle = styled.div`
  margin-top: 38px;
  margin-bottom: 0;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: var(--font-size-h2);
  display: flex;
  flex-direction: column;
  justify-content: 'flex-start';
  height: 100%;

  // Tablet
  @media screen and (min-width: ${BREAKPOINTS.medium}px) and (max-width: ${BREAKPOINTS.large}px) {
    margin-top: 0;
    margin-bottom: 0;
    justify-content: center;
  }

  // Mobile
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    margin-bottom: 20px;
    justify-content: flex-end;
    font-size: var(--font-size-h3);
  }
`;

const OverlayTextContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const BusinessCard = ({
  image,
  title,
  onClick,
}: {
  image: string;
  title: string;
  onClick?: () => void;
}) => (
  <CardContainer onClick={onClick}>
    <CardImage image={image} className='card-image' />
    <OverlayMask className='overlay-mask' />
    <OverlayTextContainer>
      <CardTitle>{title}</CardTitle>
    </OverlayTextContainer>
  </CardContainer>
);

export default BusinessCard;
