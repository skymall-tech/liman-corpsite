import styled from '@emotion/styled';

const CardContainer = styled.div`
  width: 300px;
  height: 520px;
  background-color: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 10px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 100%;
  filter: sepia(1);
  transition: filter 0.3s;
  &:hover {
    filter: sepia(0);
  }
`;

const CardTitle = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  font-weight: bold;
`;

const BusinessCard = ({ image }: { image: string }) => (
  <CardContainer>
    <CardImage image={image}>
      <CardTitle>OUR BUSINESS</CardTitle>
    </CardImage>
  </CardContainer>
);

export default BusinessCard;
