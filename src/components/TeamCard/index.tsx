import styled from '@emotion/styled';

interface TeamCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
  transformX?: string;
  objectPosition?: string;
}

const Card = styled.div<{ transformX?: string }>`
  position: relative;
  width: 12vw;
  height: 27vw;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 20px;
  border: 4px solid transparent;
  transform-origin: center;
  &:hover {
    transform: translateY(-15%) translateX(${(props) => props.transformX});
    width: 50vw;
    height: 38.4vw;
    border: 4px solid rgba(226, 199, 153, 0.4);
    z-index: 10;
  }
`;

const Image = styled.img<{ objectPosition?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${(props) => `${props.objectPosition} center`};
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
  width: 300px;
  margin-right: 30px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
`;

const Name = styled.p`
  font-size: var(--font-size-h2);
  font-weight: bold;
  margin-bottom: 4px;
  font-weight: 900;
`;

const Title = styled.p`
  font-size: var(--font-size-body);
  font-weight: 700;
  margin-bottom: 50px;
`;

const Description = styled.p`
  font-size: var(--font-size-body);
  font-weight: 300;
  margin-bottom: 15px;
  text-align: right;
`;

export const TeamCard = ({
  name,
  title,
  description,
  image,
  transformX = '0%',
  objectPosition = '20%',
}: TeamCardProps) => {
  return (
    <Card transformX={transformX}>
      <Image src={image} alt={name} objectPosition={objectPosition} />
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
