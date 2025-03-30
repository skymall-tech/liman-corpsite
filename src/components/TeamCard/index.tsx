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
    transform: translateY(-15%);
    width: 578px;
    height: 506px;
    border: 4px solid rgba(226, 199, 153, 0.4);
    z-index: 10;
  }
`;

const Overlay = styled.div`
  position: absolute;
  background: linear-gradient(to left, #a4792c, #b5915200);
  opacity: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  transition: opacity 0.3s ease;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  &:hover {
    opacity: 1;
  }
`;

const TextContent = styled.div`
  margin-top: 180px;
  width: 300px;
  margin-right: 30px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
  font-weight: 900;
`;

const Title = styled.p`
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const Description = styled.p`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 15px;
  text-align: right;
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
          <Name>{name}</Name>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContent>
      </Overlay>
    </Card>
  );
};
