import styled from '@emotion/styled';
import { SectionTitle } from '../../components/Title';
import { TimeCard } from '../../components/TimeCard';
import { useState, useEffect } from 'react';
import indicator from '../../assets/icons/indicator.svg';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

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
const getTimelineData = (t: TFunction): TimelineEvent[] => {
  return [
    {
      year: '2006',
      description1: t('about_us.odyssey.2006.desc1'),
      description2: t('about_us.odyssey.2006.desc2'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/2007-OcyU0bx48lXCOzXJJm39PVeeMpc6gg.png',
      shortDesc: t('about_us.odyssey.2006.short_desc'),
    },
    {
      year: '2008',
      description1: t('about_us.odyssey.2008.desc1'),
      description2: t('about_us.odyssey.2008.desc2'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
      shortDesc: t('about_us.odyssey.2008.short_desc'),
    },
    {
      year: '2012',
      description1: t('about_us.odyssey.2012.desc1'),
      description2: t('about_us.odyssey.2012.desc2'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
      shortDesc: t('about_us.odyssey.2012.short_desc'),
    },
    {
      year: '2014',
      description1: t('about_us.odyssey.2014.desc1'),
      description2: t('about_us.odyssey.2014.desc2'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
      shortDesc: t('about_us.odyssey.2014.short_desc'),
    },
    {
      year: '2015',
      description1: t('about_us.odyssey.2015.desc1'),
      description2: t('about_us.odyssey.2015.desc2'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/t1-VmptDCDff2DU87NF91Y7MroQcAx2tY',
      shortDesc: t('about_us.odyssey.2015.short_desc'),
    },
    {
      year: '2017',
      description1: t('about_us.odyssey.2017.desc1'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/2007-OcyU0bx48lXCOzXJJm39PVeeMpc6gg.png',
      shortDesc: t('about_us.odyssey.2017.short_desc'),
    },
    {
      year: '2019',
      description1: t('about_us.odyssey.2019.desc1'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/2019-D91KlFeIEIrZcTtD14Q8vIgmsV0bDB.png',
      shortDesc: t('about_us.odyssey.2019.short_desc'),
    },
    {
      year: '2023',
      description1: t('about_us.odyssey.2023.desc1'),
      description2: t('about_us.odyssey.2023.desc1'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/2023-rLjrE94qD9zgw0DS5nIIrgCJWQ5L1p.jpeg',
      shortDesc: t('about_us.odyssey.2023.short_desc'),
    },
    {
      year: '2024',
      description1: t('about_us.odyssey.2024.desc1'),
      description2: t('about_us.odyssey.2024.desc1'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/fp-2WMg2tmioyR6C0Qn0lPQGgkzZ6wve1.jpg',
      shortDesc: t('about_us.odyssey.2024.short_desc'),
    },
    // Add other timeline events...
  ];
};

export const OdysseySection = () => {
  const [activeYear, setActiveYear] = useState<string>('2006');
  const { t } = useTranslation();
  const timelineData = getTimelineData(t);
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
  }, [activeYear, timelineData]);

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
        title={t('about_us.odyssey.title')}
        subtitle={t('about_us.odyssey.subtitle')}
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
