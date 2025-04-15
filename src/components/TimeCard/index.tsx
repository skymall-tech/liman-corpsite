import styled from '@emotion/styled';
import indicator from '../../assets/icons/logo_small.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Card = styled.div<{ active: boolean; isLast?: boolean }>`
  aspect-ratio: 1/2;
  height: 55vh;
  // height: 55dvh;
  padding: 37px 21px 30px 21px;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: ${({ active }) =>
    active ? '3px solid var(--color-primary)' : '3px solid #B5915233'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: ${({ isLast }) => (isLast ? '100vw' : '0')};
  position: relative;
`;

const Year = styled.h2<{ active: boolean }>`
  color: var(--color-primary);
  font-size: ${({ active }) =>
    active ? 'calc(var(--font-size-h2) + 2px)' : 'var(--font-size-h2)'};
  margin-bottom: 16px;
  transition: font-size 0.3s ease;
`;

const Description = styled.p`
  color: var(--color-primary);
  text-align: center;
  font-size: var(--font-size-body);
  font-weight: 400;
  p {
    font-size: var(--font-size-body);
  }
`;

const TopDivider = styled.div`
  width: 1px;
  height: 66px;
  background-color: #b5915233;
`;

const BottomDivider = styled.div`
  width: 1px;
  height: 22px;
  background-color: #b5915233;
`;

const ShortDesc = styled.div`
  color: var(--color-primary);
  text-align: center;
  font-size: var(--font-size-body);
  font-weight: 400;
`;

const Image = styled.img<{ active: boolean }>`
  width: 100%;
  aspect-ratio: 1.65/1;
  object-fit: cover;
  border-radius: 8px;
  transition: all 0.3s ease;
  filter: ${({ active }) => (active ? 'none' : 'sepia(100%)')};
  border: ${({ active }) =>
    active ? 'none' : '2px solid var(--color-primary)'};
`;

const Logo = styled.img<{ active: boolean }>`
  width: 33px;
  height: 40px;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transform: translateY(25%);
  z-index: 10;
`;

export interface TimeCardProps {
  year: string;
  description1: string;
  description2?: string;
  logo: string;
  active: boolean;
  shortDesc?: string;
  onClick?: ({
    event,
    year,
  }: {
    event: React.MouseEvent<HTMLDivElement>;
    year: string;
  }) => void;
}

export const TimeCard = ({
  year,
  description1,
  description2,
  logo,
  active,
  shortDesc,
  onClick,
}: TimeCardProps) => {
  return (
    <Container>
      <Logo src={indicator} active={active} />
      <Card
        active={active}
        onClick={(event) => {
          onClick?.({
            event,
            year,
          });
        }}
      >
        <Year active={active}>{year}</Year>
        {!active && <TopDivider />}
        {active && (
          <Description>
            <p>{description1}</p>
            {description2 && (
              <p style={{ marginTop: '20px' }}>{description2}</p>
            )}
          </Description>
        )}
        {!active && <ShortDesc>{shortDesc}</ShortDesc>}
        {!active && <BottomDivider />}
        <Image src={logo} active={active} />
      </Card>
    </Container>
  );
};
