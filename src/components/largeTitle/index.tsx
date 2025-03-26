import styled from '@emotion/styled';

const TitleContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 900;
  color: var(--color-primary);
`;

const Desc = styled.p`
  font-size: 14px;
  color: var(--color-primary);
  width: 430px;
  text-align: center;
`;

export const LargeTitle = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </TitleContainer>
  );
};
