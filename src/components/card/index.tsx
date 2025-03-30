import styled from '@emotion/styled';

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 520px;
  background-color: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 10px;
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
`;

const CardTitle = styled.div`
  margin-top: 38px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 26px;
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
  onClick: () => void;
}) => (
  <CardContainer onClick={onClick}>
    <CardImage image={image} className="card-image" />
    <OverlayMask className="overlay-mask" />
    <OverlayTextContainer>
      <CardTitle>{title}</CardTitle>
    </OverlayTextContainer>
  </CardContainer>
);

export default BusinessCard;
