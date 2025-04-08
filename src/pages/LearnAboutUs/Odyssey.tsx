import styled from '@emotion/styled';
import { SectionTitle } from '../../components/Title';
import { TimeCard } from '../../components/TimeCard';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import arrowLeft from '../../assets/icons/left-primary.svg';
import arrowRight from '../../assets/icons/right-primary.svg';

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

const MiddleContainer = styled.div`
  width: 100vw;
  position: relative;
  margin-top: 70px;
  margin-bottom: 40px;
  padding: 0 50px;
`;

const CardsContainer = styled.div`
  position: relative;
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
  transition: all 0.3s ease;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Ensure TimeCards don't shrink */
  > * {
    flex: 0 0 auto;
  }
`;

const ArrowLeft = styled.img`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;

const ArrowRight = styled.img`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;

const LeftMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(to left, #f3f0ec00, #f3f0ec);
`;
const RightMask = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(to right, #f3f0ec00, #f3f0ec);
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
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2006-r2hR5xefnozGPDhZqkndD7uX2R6hFe.png',
      shortDesc: t('about_us.odyssey.2006.short_desc'),
    },
    {
      year: '2008',
      description1: t('about_us.odyssey.2008.desc1'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2007-sBJgf4zwXiksnK2hTj4BN6Hpo5JaSZ.png',
      shortDesc: t('about_us.odyssey.2008.short_desc'),
    },
    {
      year: '2012',
      description1: t('about_us.odyssey.2012.desc1'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2012-OLg1dSS0I4JogNxFvdxMdbrYhzt3ar.png',
      shortDesc: t('about_us.odyssey.2012.short_desc'),
    },
    {
      year: '2014',
      description1: t('about_us.odyssey.2014.desc1'),
      description2: t('about_us.odyssey.2014.desc2'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2014-Ut5Xd68AgTjjPi4YLwKOLC7l2EEsgj.png',
      shortDesc: t('about_us.odyssey.2014.short_desc'),
    },
    {
      year: '2015',
      description1: t('about_us.odyssey.2015.desc1'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2015-mRV0PYPqNZ3Mlb05ixVogRfrgkoy0Q.png',
      shortDesc: t('about_us.odyssey.2015.short_desc'),
    },
    {
      year: '2017',
      description1: t('about_us.odyssey.2017.desc1'),
      description2: t('about_us.odyssey.2017.desc2'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2017-7AIqNYqFLmObEMZ3owKEaaqX4kVnw1.png',
      shortDesc: t('about_us.odyssey.2017.short_desc'),
    },
    {
      year: '2019',
      description1: t('about_us.odyssey.2019.desc1'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2019-1zbwZce8Xt7yZm9X23WxqhppNlKtV1.png',
      shortDesc: t('about_us.odyssey.2019.short_desc'),
    },
    {
      year: '2023',
      description1: t('about_us.odyssey.2023.desc1'),
      description2: t('about_us.odyssey.2023.desc2'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2023-yTRNF1dOJ9kNAaUvyexRNqHtHz1VmL.png',
      shortDesc: t('about_us.odyssey.2023.short_desc'),
    },
    {
      year: '2024',
      description1: t('about_us.odyssey.2024.desc1'),
      description2: t('about_us.odyssey.2024.desc2'),
      logo: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/timeline/2024-0hUyTrjy4rxf4Waifl06o2n996dq13.png',
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

  const handlePrevYear = () => {
    const currentIndex = timelineData.findIndex(
      (event) => event.year === activeYear
    );
    const prevIndex =
      (currentIndex - 1 + timelineData.length) % timelineData.length;
    const prevYear = timelineData[prevIndex].year;

    setActiveYear(prevYear);

    const container = document.querySelector('.cards-container');
    const prevCard = container?.children[prevIndex] as HTMLElement;
    if (container && prevCard) {
      container.scrollTo({
        left: prevCard.offsetLeft - 30,
        behavior: 'smooth',
      });
    }
  };

  const handleNextYear = () => {
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
  };

  return (
    <OdysseyContainer id="odyssey-section">
      <SectionTitle
        title={t('about_us.odyssey.title')}
        subtitle={t('about_us.odyssey.subtitle')}
      />
      <MiddleContainer>
        <CardsContainer className="cards-container">
          {timelineData.map((event) => (
            <TimeCard
              key={event.year}
              year={event.year}
              description1={event.description1}
              description2={event.description2}
              logo={event.logo}
              active={activeYear === event.year}
              shortDesc={event.shortDesc}
              onClick={handleCardClick}
            />
          ))}
        </CardsContainer>
        <LeftMask />
        <RightMask />
        <ArrowLeft src={arrowLeft} onClick={handlePrevYear} />
        <ArrowRight src={arrowRight} onClick={handleNextYear} />
      </MiddleContainer>
      <FooterDesc>{t('about_us.odyssey.footer_desc')}</FooterDesc>
    </OdysseyContainer>
  );
};
