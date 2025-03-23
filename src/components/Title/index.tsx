import styled from '@emotion/styled';

const TitleContainer = styled.div`
  margin-top: 40px;
  text-align: center;
  margin-bottom: 20px;
`;

const TitleText = styled.h1`
  color: var(--color-secondary);
`;

const SubtitleText = styled.p`
  color: var(--color-primary);
`;

export const SectionTitle = () => (
  <TitleContainer>
    <TitleText>OUR BUSINESS</TitleText>
    <SubtitleText>The main business includes the following items.</SubtitleText>
  </TitleContainer>
);
