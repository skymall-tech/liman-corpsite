import styled from '@emotion/styled';
import { BREAKPOINTS } from '../../hooks/useResponsive';

const TitleContainer = styled.div<{ marginTop?: string }>`
  margin-top: ${({ marginTop }) => marginTop || '40px'};
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80px;
  position: relative;
  z-index: 2;

  // Mobile
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    margin: 35px 40px 20px 40px;
    overflow: hidden;
  }
`;

const TitleText = styled.h2<{ isDarkBackground: boolean }>`
  color: ${({ isDarkBackground }) =>
    isDarkBackground
      ? 'var(--color-secondary-mobile)'
      : 'var(--color-secondary)'};
  text-transform: uppercase;

  // Mobile
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    font-size: var(--font-size-title-mobile);
  }
`;

const SubtitleText = styled.p<{ isDarkBackground: boolean }>`
  color: ${({ isDarkBackground }) =>
    isDarkBackground ? 'var(--color-primary-mobile)' : 'var(--color-primary)'};
  width: max(30vw, 400px);
  font-size: var(--font-size-body);

  // Mobile
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    width: auto;
  }
`;
const Divider = styled.div<{ isDarkBackground: boolean }>`
  width: 60vw;
  height: 2px;
  margin: 8px 0 16px 0;
  background-color: ${({ isDarkBackground }) =>
    isDarkBackground ? 'var(--color-primary-mobile)' : 'var(--color-primary)'};

  // Mobile
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    height: 1px;
  }
`;

export const SectionTitle = ({
  title,
  subtitle,
  marginTop = '40px',
  isDarkBackground = false,
}: {
  title: string;
  subtitle: string;
  marginTop?: string;
  isDarkBackground?: boolean;
}) => (
  <TitleContainer marginTop={marginTop}>
    <TitleText isDarkBackground={isDarkBackground}>{title}</TitleText>
    <Divider isDarkBackground={isDarkBackground} />
    <SubtitleText isDarkBackground={isDarkBackground}>{subtitle}</SubtitleText>
  </TitleContainer>
);
