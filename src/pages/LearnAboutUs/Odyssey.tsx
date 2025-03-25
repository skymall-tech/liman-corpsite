import styled from '@emotion/styled';
import { SectionTitle } from '../../components/Title';
import { TimeCard, TimeCardProps } from '../../components/TimeCard';

const OdysseyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 40px;
  padding-bottom: 20px;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #c4a164;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  overflow-x: hidden;
  gap: 20px;
  padding: 0 30px;
  margin-left:20px

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

type TimelineEvent = TimeCardProps;

const timelineData: TimelineEvent[] = [
  {
    year: '2006',
    description:
      'Beishan Industrial (Guangzhou) Co., LTD., the predecessor of Leman, was established. In the same year, the Group opened its first offline store at Guangzhou Baiyun Airport: Samsonite Black Label Store.',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
    active: true,
    shortDesc: '2006',
  },
  {
    year: '2008',
    description: 'Group offline stores exceeded 10',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
    active: false,
    shortDesc: 'Group offline stores exceeded 10',
  },
  {
    year: '2012',
    description: 'Group offline stores exceeded 10',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
    active: false,
    shortDesc: 'Group offline stores exceeded 10',
  },
  {
    year: '2014',
    description: 'Group offline stores exceeded 10',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
    active: false,
    shortDesc: 'Group offline stores exceeded 10',
  },
  {
    year: '2015',
    description: 'Group offline stores exceeded 10',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
    active: false,
    shortDesc: 'Group offline stores exceeded 10',
  },
  {
    year: '2017',
    description: 'Group offline stores exceeded 10',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
    active: false,
    shortDesc: 'Group offline stores exceeded 10',
  },
  {
    year: '2019',
    description: 'Group offline stores exceeded 10',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
    active: false,
    shortDesc: 'Group offline stores exceeded 10',
  },
  {
    year: '2023',
    description: 'Group offline stores exceeded 10',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
    active: false,
    shortDesc: 'Group offline stores exceeded 10',
  },
  {
    year: '2024',
    description: 'Group offline stores exceeded 10',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
    active: false,
    shortDesc: 'Group offline stores exceeded 10',
  },
  // Add other timeline events...
];

export const OdysseySection = () => {
  return (
    <OdysseyContainer id="odyssey-section">
      <SectionTitle
        title="OUR ODYSSEY CHRONICLE"
        subtitle="Two decades rooted in luxury dominance, now pioneering duty-free frontiers."
      />
      <CardsContainer>
        {timelineData.map((event) => (
          <TimeCard
            key={event.year}
            year={event.year}
            description={event.description}
            logo={event.logo}
            active={event.active}
            shortDesc={event.shortDesc}
          />
        ))}
      </CardsContainer>
      <TimelineContainer />
    </OdysseyContainer>
  );
};
