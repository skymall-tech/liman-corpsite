import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { motion, AnimatePresence } from 'framer-motion';

import { SectionTitle } from '../../components/Title';
import { TimeCard } from '../../components/TimeCard';
import arrowLeft from '../../assets/icons/left-primary.svg';
import arrowRight from '../../assets/icons/right-primary.svg';
import expandDownIcon from '../../assets/icons/expand-down.svg';
import { BREAKPOINTS, useResponsive } from '../../hooks/useResponsive';

const OdysseyContainer = styled.div<{ backgroundImage: string }>`
  width: 100vw;
  min-height: 100vh;

  // Mobile & Tablet
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    position: relative;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url(${(props) => props.backgroundImage});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      object-fit: cover;
      opacity: 0.2;
      z-index: 0;
      transition: background-image 0.3s ease;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #2c1c00;
      opacity: 0.7;
      z-index: 0;
    }

    > * {
      position: relative;
      z-index: 1;
    }
  }
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

  // Mobile
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    width: auto;
    margin: 40px;
    text-align: right;
    color: var(--color-primary-mobile);
  }
`;

const MiddleContainer = styled.div`
  width: 100vw;
  position: relative;
  margin-top: 70px;
  margin-bottom: 40px;
  padding: 0 50px;

  // Mobile
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    margin-top: 0;
    padding: 0;
  }
`;

const CardsContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  width: 100%;

  // Mobile
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    padding: 0 40px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const YearText = styled.span`
  font-size: 24px;
  color: #fed48b;
  font-weight: 700;
`;

const MobileCard = styled.div`
  border: 2px solid var(--color-primary-mobile);
  border-radius: 12px;
  background: transparent;
  padding: 16px;
  cursor: pointer;
`;

const MobileDescription = styled(motion.div)`
  margin-top: 16px;
  position: relative;
  z-index: 2;

  p {
    margin: 0;
    line-height: 1.5;
    color: var(--color-primary-mobile);
    text-align: right;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
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
      logo: 'https://cdn.liman.group/time_line/2006.webp',
      shortDesc: t('about_us.odyssey.2006.short_desc'),
    },
    {
      year: '2008',
      description1: t('about_us.odyssey.2008.desc1'),
      logo: 'https://cdn.liman.group/time_line/2007.webp',
      shortDesc: t('about_us.odyssey.2008.short_desc'),
    },
    {
      year: '2012',
      description1: t('about_us.odyssey.2012.desc1'),
      logo: 'https://cdn.liman.group/time_line/2012.webp',
      shortDesc: t('about_us.odyssey.2012.short_desc'),
    },
    {
      year: '2014',
      description1: t('about_us.odyssey.2014.desc1'),
      description2: t('about_us.odyssey.2014.desc2'),
      logo: 'https://cdn.liman.group/time_line/2014.jpg',
      shortDesc: t('about_us.odyssey.2014.short_desc'),
    },
    {
      year: '2015',
      description1: t('about_us.odyssey.2015.desc1'),
      logo: 'https://cdn.liman.group/time_line/2015.webp',
      shortDesc: t('about_us.odyssey.2015.short_desc'),
    },
    {
      year: '2017',
      description1: t('about_us.odyssey.2017.desc1'),
      description2: t('about_us.odyssey.2017.desc2'),
      logo: 'https://cdn.liman.group/time_line/2017.webp',
      shortDesc: t('about_us.odyssey.2017.short_desc'),
    },
    {
      year: '2019',
      description1: t('about_us.odyssey.2019.desc1'),
      logo: 'https://cdn.liman.group/time_line/2019.webp',
      shortDesc: t('about_us.odyssey.2019.short_desc'),
    },
    {
      year: '2023',
      description1: t('about_us.odyssey.2023.desc1'),
      description2: t('about_us.odyssey.2023.desc2'),
      logo: 'https://cdn.liman.group/time_line/2023.webp',
      shortDesc: t('about_us.odyssey.2023.short_desc'),
    },
    {
      year: '2024',
      description1: t('about_us.odyssey.2024.desc1'),
      description2: t('about_us.odyssey.2024.desc2'),
      logo: 'https://cdn.liman.group/time_line/2024.webp',
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
  const { isMobile, isTablet } = useResponsive();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

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
    <OdysseyContainer
      id='odyssey-section'
      backgroundImage={
        timelineData.find((item) => item.year === expandedCard)?.logo ||
        timelineData[0].logo
      }
    >
      <SectionTitle
        isDarkBackground={isMobile || isTablet}
        title={t('about_us.odyssey.title')}
        subtitle={t('about_us.odyssey.subtitle')}
      />
      <MiddleContainer>
        {isMobile || isTablet ? (
          <CardsContainerMobile>
            {timelineData.map((event) => (
              <MobileCard
                key={event.year}
                onClick={() => {
                  setExpandedCard(
                    expandedCard === event.year ? null : event.year
                  );
                }}
              >
                <CardHeader>
                  <YearText>{event.year}</YearText>
                  <motion.img
                    src={expandDownIcon}
                    alt='Expand'
                    animate={{ rotate: expandedCard === event.year ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: '31px',
                      height: '15px',
                      filter:
                        'brightness(0) saturate(100%) invert(83%) sepia(23%) saturate(638%) hue-rotate(332deg) brightness(101%) contrast(101%)',
                    }}
                  />
                </CardHeader>
                <AnimatePresence initial={false}>
                  {expandedCard === event.year && (
                    <MobileDescription
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                      }}
                    >
                      <p>{event.description1}</p>
                      {event.description2 && <p>{event.description2}</p>}
                    </MobileDescription>
                  )}
                </AnimatePresence>
              </MobileCard>
            ))}
          </CardsContainerMobile>
        ) : (
          <>
            <CardsContainer className='cards-container'>
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
          </>
        )}
      </MiddleContainer>
      <FooterDesc>{t('about_us.odyssey.footer_desc')}</FooterDesc>
    </OdysseyContainer>
  );
};
