import styled from '@emotion/styled';

const TitleContainer = styled.div`
  margin-top: 40px;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <TitleContainer>
    <TitleText>{title}</TitleText>
    <Divider />
    <SubtitleText>{subtitle}</SubtitleText>
  </TitleContainer>
);
