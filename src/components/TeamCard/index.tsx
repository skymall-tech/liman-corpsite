import styled from '@emotion/styled';

interface TeamCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
}

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
`;
const Card = styled.div`
  position: relative;
  width: 122px;
  height: 308px;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 8px;
  border: 4px solid transparent;
  transform-origin: center;
  &:hover {
    transform: scale(1.7, 1.4) translateY(-10%);
    border: 4px solid rgba(226, 199, 153, 0.4);
    z-index: 10;

    img {
      transform: scale(1, 1.21);
      transition: all 0.1s ease;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  background: linear-gradient(to bottom, transparent, #a4792c);
  opacity: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 75%;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

const TextContent = styled.div`
  position: absolute;
  bottom: 12px;
  left: 16px;
  right: 16px;
  color: white;
`;

const Name = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Title = styled.p`
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 8px;
  font-weight: 300;
  margin-bottom: 15px;
`;

export const TeamCard = ({
  name,
  title,
  description,
  image,
}: TeamCardProps) => {
  return (
    <Card>
      <Image src={image} alt={name} />
      <Overlay>
        <TextContent>
          <Description>{description}</Description>
          <Title>{title}</Title>
          <Name>{name}</Name>
        </TextContent>
      </Overlay>
    </Card>
  );
};
