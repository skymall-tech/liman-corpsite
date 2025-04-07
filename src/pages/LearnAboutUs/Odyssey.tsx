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
const FooterDesc = styled.p`
  color: var(--color-primary);
  text-align: center;
  font-size: var(--font-size-body);
  font-weight: 400;
  margin-top: 20px;
  width: calc(max(400px, 50vw));
  margin: 0 auto;
  margin-top: 40px;
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
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2006-AlCIDDqfbEcTBWzHHLThLOk2PQYA5K.png',
      shortDesc: t('about_us.odyssey.2006.short_desc'),
    },
    {
      year: '2008',
      description1: t('about_us.odyssey.2008.desc1'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2007-ShIX98xx8ugPm6pnYvPhjhCq75wCgk.png',
      shortDesc: t('about_us.odyssey.2008.short_desc'),
    },
    {
      year: '2012',
      description1: t('about_us.odyssey.2012.desc1'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2012-SLc0BMANsVQxFbLYIRAGscWDxj26Mv.png',
      shortDesc: t('about_us.odyssey.2012.short_desc'),
    },
    {
      year: '2014',
      description1: t('about_us.odyssey.2014.desc1'),
      description2: t('about_us.odyssey.2014.desc2'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2014-vlG2MnaTaDkWr9SKIZW2cffoS5MX48.png',
      shortDesc: t('about_us.odyssey.2014.short_desc'),
    },
    {
      year: '2015',
      description1: t('about_us.odyssey.2015.desc1'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2015-WyPDVND9mLGbYFpsEn1J9T2FMR95Rf.png',
      shortDesc: t('about_us.odyssey.2015.short_desc'),
    },
    {
      year: '2017',
      description1: t('about_us.odyssey.2017.desc1'),
      description2: t('about_us.odyssey.2017.desc2'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2017-xS9R7eOJLLJ0rBbzp9UlPnGKqHcImB.png',
      shortDesc: t('about_us.odyssey.2017.short_desc'),
    },
    {
      year: '2019',
      description1: t('about_us.odyssey.2019.desc1'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2019-c68gakrXrvdZJwgsMEPIA4vNiWeVjk.png',
      shortDesc: t('about_us.odyssey.2019.short_desc'),
    },
    {
      year: '2023',
      description1: t('about_us.odyssey.2023.desc1'),
      description2: t('about_us.odyssey.2023.desc2'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2023-d4SgcLkP8kbutxZAlgXEBVPuKz0LTv.png',
      shortDesc: t('about_us.odyssey.2023.short_desc'),
    },
    {
      year: '2024',
      description1: t('about_us.odyssey.2024.desc1'),
      description2: t('about_us.odyssey.2024.desc2'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2024-cYxiTizNFHMwtW2pLTvITB8NK18x0w.png',
      shortDesc: t('about_us.odyssey.2024.short_desc'),
    },
    // Add other timeline events...
  ];
};

export const OdysseySection = () => {
  const [activeYear, setActiveYear] = useState<string>('2006');
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();
  const timelineData = getTimelineData(t);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when at least 10% of the section is visible
    );

    const section = document.getElementById('odyssey-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Don't start interval if section is not visible

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
  }, [activeYear, timelineData, isVisible]);

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
      <FooterDesc>{t('about_us.odyssey.footer_desc')}</FooterDesc>
    </OdysseyContainer>
  );
};
