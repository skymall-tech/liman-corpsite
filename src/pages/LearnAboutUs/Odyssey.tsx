import styled from '@emotion/styled';
import { SectionTitle } from '../../components/Title';
import { TimeCard } from '../../components/TimeCard';
import { useState, useEffect } from 'react';
import indicator from '../../assets/icons/indicator.svg';

const OdysseyContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const CardsContainer = styled.div`
  margin-top: 70px;
  margin-bottom: 40px;
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 0 30px;
  margin-left: 20px;
  width: 100%;
  flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Ensure TimeCards don't shrink */
  > * {
    flex: 0 0 auto;
  }
`;

const TimelineContainer = styled.div`
  margin: 0 76px;
  border-bottom: 4px solid var(--color-primary);
  display: flex;
  justify-content: flex-start;
  padding-left: 5vw;
  margin-top: -45px;
`;
const Logo = styled.img`
  width: 28px;
  height: 41px;
`;

type TimelineEvent = {
  year: string;
  description1: string;
  description2?: string;
  logo: string;
  shortDesc: string;
};

const timelineData: TimelineEvent[] = [
  {
    year: '2006',
    description1:
      'Beishan Industrial (Guangzhou) Co., LTD., the predecessor of Leman, was established. ',
    description2:
      'In the same year, the Group opened its first offline store at Guangzhou Baiyun Airport: Samsonite Black Label Store.',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/2007-OcyU0bx48lXCOzXJJm39PVeeMpc6gg.png',
    shortDesc:
      'The predecessor of Liman, Beishan Industrial (Guangzhou) Co., Ltd., was established. ',
  },
  {
    year: '2008',
    description1: 'Group offline stores exceeded 10',
    description2:
      'In the same year, the Group opened its first offline store at Guangzhou Baiyun Airport: Samsonite Black Label Store.',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
    shortDesc: 'Group offline stores exceeded 10',
  },
  {
    year: '2012',
    description1: 'Group offline stores exceeded 10',
    description2:
      'In the same year, the Group opened its first offline store at Guangzhou Baiyun Airport: Samsonite Black Label Store.',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
    shortDesc: 'Group offline stores exceeded 10',
  },
  {
    year: '2014',
    description1: 'Group offline stores exceeded 10',
    description2:
      'In the same year, the Group opened its first offline store at Guangzhou Baiyun Airport: Samsonite Black Label Store.',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
    shortDesc: 'Group offline stores exceeded 10',
  },
  {
    year: '2015',
    description1: 'Group offline stores exceeded 10',
    description2:
      'In the same year, the Group opened its first offline store at Guangzhou Baiyun Airport: Samsonite Black Label Store.',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
    shortDesc: 'Group offline stores exceeded 10',
  },
  {
    year: '2017',
    description1:
      'The group became the largest luxury goods operator at Chongqing. Jiangbei International Airport and began representing the Satellite Paris brand in the same year.',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/2007-OcyU0bx48lXCOzXJJm39PVeeMpc6gg.png',
    shortDesc:
      'The group became the largest luxury goods operator at Chongqing.',
  },
  {
    year: '2019',
    description1:
      'Authorized by Armani Casa for urban apartment developments in the Guangdong-Hong Kong-Macao Greater Bay Area.',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/2019-D91KlFeIEIrZcTtD14Q8vIgmsV0bDB.png',
    shortDesc:
      'Authorized by Armani Casa for urban apartment developments in the Guangdong-Hong Kong-Macao Greater Bay Area.',
  },
  {
    year: '2023',
    description1: 'The group re-entered Beijing Capital International Airport.',
    description2: 'And opened 9 offline stores the following year.',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/2023-rLjrE94qD9zgw0DS5nIIrgCJWQ5L1p.jpeg',
    shortDesc: 'The group re-entered Beijing Capital International Airport.',
  },
  {
    year: '2024',
    description1:
      'The group is preparing to establish a comprehensive duty-free mall at the Qingmao Port. Marking its entry into the duty-free industry.',
    description2:
      'In the same year, the group will also re-enter Shenzhen Baoan International Airport.',
    logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/fp-2WMg2tmioyR6C0Qn0lPQGgkzZ6wve1.jpg',
    shortDesc:
      'The the group is preparing to establish a comprehensive duty-free mall at the Qingmao Port.',
  },
  // Add other timeline events...
];

export const OdysseySection = () => {
  const [activeYear, setActiveYear] = useState<string>('2006');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = timelineData.findIndex(
        (event) => event.year === activeYear
      );
      const nextIndex = (currentIndex + 1) % timelineData.length;
      const nextYear = timelineData[nextIndex].year;

      setActiveYear(nextYear);

      const container = document.querySelector('.cards-container');
      const nextCard = container?.children[nextIndex] as HTMLElement;
      if (container && nextCard) {
        container.scrollTo({
          left: nextCard.offsetLeft - 30,
          behavior: 'smooth',
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeYear]);

  const handleCardClick = ({
    event,
    year,
  }: {
    event: React.MouseEvent<HTMLDivElement>;
    year: string;
  }) => {
    const card = event.currentTarget;
    const container = card.parentElement;
    if (container) {
      container.scrollTo({
        left: card.offsetLeft - 30,
        behavior: 'smooth',
      });
    }
    setActiveYear(year);
  };

  return (
    <OdysseyContainer id="odyssey-section">
      <SectionTitle
        title="OUR ODYSSEY CHRONICLE"
        subtitle="Two decades rooted in luxury dominance, now pioneering duty-free frontiers."
      />
      <CardsContainer className="cards-container">
        {timelineData.map((event, index) => (
          <TimeCard
            key={event.year}
            year={event.year}
            description1={event.description1}
            description2={event.description2}
            logo={event.logo}
            active={activeYear === event.year}
            shortDesc={event.shortDesc}
            onClick={handleCardClick}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </CardsContainer>
      <TimelineContainer>
        <Logo src={indicator} />
      </TimelineContainer>
    </OdysseyContainer>
  );
};
