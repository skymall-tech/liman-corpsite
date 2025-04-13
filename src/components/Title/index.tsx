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

  // Mobile
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    margin: 0 60px 40px;
  }
`;

const TitleText = styled.h2`
  color: var(--color-secondary);
  text-transform: uppercase;
`;

const SubtitleText = styled.p`
  color: var(--color-primary);
  width: max(30vw, 400px);
  font-size: var(--font-size-body);
`;
const Divider = styled.div`
  width: 430px;
  height: 2px;
  margin: 8px 0 16px 0;
  background-color: var(--color-primary);

  // Mobile
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    height: 1px;
  }
`;

export const SectionTitle = ({
  title,
  subtitle,
  marginTop = '40px',
}: {
  title: string;
  subtitle: string;
  marginTop?: string;
}) => (
  <TitleContainer marginTop={marginTop}>
    <TitleText>{title}</TitleText>
    <Divider />
    <SubtitleText>{subtitle}</SubtitleText>
  </TitleContainer>
);
