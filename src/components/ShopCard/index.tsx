import styled from '@emotion/styled';

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 520px;
  background-color: #f5f5f5;
  border-radius: 16px;
  overflow: hidden;
  margin: 0 10px;
  border: 2px solid #b59152;
  flex-shrink: 0;
  transition: transform 0.3s;
  .overlay-mask {
    background: radial-gradient(circle at center, #b5915233, #946a20);
  }
  .overlay-mask-2 {
    background: #fff;
    opacity: 0.5;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    .overlay-mask {
      background: radial-gradient(
        circle at center,
        #966b20 0%,
        #a37b36cc 50%,
        #b5915266 100%
      );
    }
    .overlay-mask-2 {
      opacity: 0;
    }
    .card-title {
      color: #fff;
    }
  }
`;

const OverlayMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CardImage = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 100%;
  transition: filter 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CardTitle = styled.div`
  color: #946a20;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
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

export const ShopCard = ({
  image,
  title,
  onClick,
}: {
  image: string;
  title: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => (
  <CardContainer onClick={onClick}>
    <CardImage image={image} className="card-image" />
    <OverlayMask className="overlay-mask-2" />
    <OverlayMask className="overlay-mask" />
    <OverlayTextContainer>
      <CardTitle className="card-title">{title}</CardTitle>
    </OverlayTextContainer>
  </CardContainer>
);
