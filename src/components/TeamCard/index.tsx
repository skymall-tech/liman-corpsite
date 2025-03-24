import styled from '@emotion/styled';

interface TeamCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
}

const Card = styled.div`
  position: relative;
  width: 122px;
  height: 308px;
  margin: 0 4px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(${201 / 122}, ${432 / 308});
    z-index: 99;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, #c4a484);
  opacity: 0;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

const TextContent = styled.div`
  position: absolute;
  bottom: 32px;
  left: 16px;
  right: 16px;
  color: white;
`;

const Name = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Title = styled.p`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 30px;
`;

export const TeamCard = ({
  name,
  title,
  description,
  image,
}: TeamCardProps) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={image} alt={name} />
        <Overlay>
          <TextContent>
            <Description>{description}</Description>
            <Title>{title}</Title>
            <Name>{name}</Name>
          </TextContent>
        </Overlay>
      </ImageContainer>
    </Card>
  );
};
