import styled from '@emotion/styled';

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 520px;
  background-color: #f5f5f5;
  border-radius: 16px;
  overflow: hidden;
  margin: 0 10px;
  border: 1px solid #b59152;
  flex-shrink: 0;
  transition: transform 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    .overlay-mask {
      background: #966b20;
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
  background: #fff;
  opacity: 0.5;
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
  onClick?: () => void;
}) => (
  <CardContainer onClick={onClick}>
    <CardImage image={image} className="card-image" />
    <OverlayMask className="overlay-mask" />
    <OverlayTextContainer>
      <CardTitle className="card-title">{title}</CardTitle>
    </OverlayTextContainer>
  </CardContainer>
);
