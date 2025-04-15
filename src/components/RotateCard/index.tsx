import styled from '@emotion/styled';

const Container = styled.div`
  width: max(25vw, 400px);
  aspect-ratio: 1/1.27;
  position: relative;
  overflow: visible;
`;

const Image = styled.img`
  inset: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  z-index: 49;
`;
const InnerCard = styled.div<{ rightRotate?: boolean }>`
  width: 90%;
  height: 40%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, #b59152, #b5915200);
  transform: ${({ rightRotate }) =>
    rightRotate
      ? 'rotate(30deg) translateX(23%);'
      : 'rotate(-30deg) translateX(-23%);'};
  border-radius: 20px;
`;
export const RotateCard = ({
  src,
  rightRotate = false,
}: {
  src: string;
  rightRotate?: boolean;
}) => {
  return (
    <Container>
      <InnerCard rightRotate={rightRotate}></InnerCard>
      <Image src={src}></Image>
    </Container>
  );
};
