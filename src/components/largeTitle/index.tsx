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
  font-size: 100px;
  font-weight: 900;
  color: var(--color-primary);
  @media screen and (min-width: 2000px) {
    font-size: 90px;
  }
`;

const Desc = styled.p`
  font-size: var(--font-size-body);
  color: var(--color-primary);
  width: max(30vw, 430px);
  text-align: center;
`;

const Logo = styled.img`
  width: 580px;
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
        <Logo src="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/LM-52Sc6NnIIH12Warrw1g78NJgemY0wb.png" />
      </TitleContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </TitleContainer>
    </>
  );
};
