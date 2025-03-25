import styled from '@emotion/styled';

const Card = styled.div<{ active: boolean }>`
  width: 200px;
  height: 400px;
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
`;

const Year = styled.h2<{ active: boolean }>`
  color: var(--color-primary);
  font-size: ${({ active }) => (active ? '32px' : '22px')};
  margin-bottom: 16px;
`;

const Description = styled.p`
  color: var(--color-primary);
  text-align: center;
  font-size: 12px;
  font-weight: 400;
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
  font-size: 12px;
  font-weight: 400;
`;

const Image = styled.img<{ active: boolean }>`
  width: 100%;
  height: 94px;
  object-fit: cover;
  border-radius: 8px;
  filter: ${({ active }) => (active ? 'none' : 'sepia(100%)')};
  border: ${({ active }) =>
    active ? 'none' : '2px solid var(--color-primary)'};
`;

export interface TimeCardProps {
  year: string;
  description: string;
  logo: string;
  active: boolean;
  shortDesc?: string;
}

export const TimeCard = ({
  year,
  description,
  logo,
  active,
  shortDesc,
}: TimeCardProps) => {
  return (
    <Card active={active}>
      <Year active={active}>{year}</Year>
      {!active && <TopDivider />}
      {active && <Description>{description}</Description>}
      {!active && <ShortDesc>{shortDesc}</ShortDesc>}
      {!active && <BottomDivider />}
      <Image src={logo} active={active} />
    </Card>
  );
};
