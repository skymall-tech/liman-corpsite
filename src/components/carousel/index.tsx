import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { BREAKPOINTS, useResponsive } from '../../hooks/useResponsive';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

interface StorySlide {
  title?: string;
  src: string;
  paragraph: string[];
}

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    margin-top: 20px;
  }
`;

const SlideContainer = styled.div<{ offset: number }>`
  display: flex;
  transform: translateX(${(props) => props.offset}%);
  transition: ${(props) =>
    props.offset % 100 === 0 ? 'transform 0.3s ease-in-out' : 'none'};
  user-select: none;
  background: var(--color-primary);
  overflow: visible;
  position: relative;
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    height: calc(100vh - 160px);
  }
`;

const Slide = styled.div`
  position: relative;
  min-width: 100vw;
  height: calc(100vh - 250px);
  overflow: hidden;
  background: linear-gradient(
    to right,
    var(--color-primary),
    rgba(0, 0, 0, 0.1)
  );
  color: white;
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    height: calc(100vh - 160px);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Gradient = styled.div<{ hideMask?: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.hideMask
      ? 'linear-gradient(to right, rgba(148, 106, 32, 0.2) 5%, transparent)'
      : 'linear-gradient(to right, rgba(148, 106, 32, 0.7) 5%, transparent)'};
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 60%, transparent);
  }
`;

const DescContainer = styled.div`
  position: absolute;
  left: 50px;
  top: 58px;
  width: max(30vw, 360px);
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    bottom: 60px;
    left: 0;
    right: 0;
    top: auto;
    width: 100%;
    padding: 20px;
    padding-right: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const ParagraphContainer = styled.div`
  width: max(20vw, 240px);
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const Title = styled.h2`
  font-size: var(--font-size-h2);
  font-weight: 800;
  color: white;
`;

const Paragraph = styled.p`
  font-size: var(--font-size-body);
  font-weight: 400;
  margin-top: 30px;
  line-height: 2;
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 40px;
  height: 4px;
  border: none;
  background-color: ${(props) => (props.active ? '#1E4785' : '#D9D9D9')};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const Carousel = ({
  stories,
  hideMask = false,
}: {
  stories: StorySlide[];
  hideMask?: boolean;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    if (isPaused || isMobile) return;

    const interval = setInterval(() => {
      setCurrentSlide((current) =>
        current === stories.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, stories.length, isMobile]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsPaused(true);
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    const maxDrag = window.innerWidth;
    const boundedDiff = Math.max(Math.min(diff, maxDrag), -maxDrag);
    setDragOffset(boundedDiff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    const slideThreshold = window.innerWidth * 0.2;
    if (Math.abs(dragOffset) > slideThreshold) {
      if (dragOffset > 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (dragOffset < 0 && currentSlide < stories.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    setTimeout(() => setIsPaused(false), 2000);
  };

  if (isMobile) {
    return (
      <Container>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          cssMode={true}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          initialSlide={0}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        >
          {stories.map((story, index) => (
            <SwiperSlide key={index}>
              <Slide>
                <Image src={story.src} alt={story.title || 'Slide image'} />
                <Gradient hideMask={hideMask}></Gradient>
                <DescContainer>
                  {story.title && <Title>{story.title}</Title>}
                  <ParagraphContainer>
                    {story.paragraph.map((para, i) => (
                      <Paragraph key={i}>{para}</Paragraph>
                    ))}
                  </ParagraphContainer>
                </DescContainer>
              </Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    );
  }

  return (
    <Container>
      <SlideContainer
        offset={-currentSlide * 100 + (dragOffset / window.innerWidth) * 100}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={(e) => {
          e.preventDefault();
          handleDragMove(e);
        }}
        onTouchEnd={handleDragEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {stories.map((story, index) => (
          <Slide key={index}>
            <Image src={story.src} alt={story.title || 'Slide image'} />
            <Gradient hideMask={hideMask}></Gradient>
            <DescContainer>
              {story.title && <Title>{story.title}</Title>}
              <ParagraphContainer>
                {story.paragraph.map((para, i) => (
                  <Paragraph key={i}>{para}</Paragraph>
                ))}
              </ParagraphContainer>
            </DescContainer>
          </Slide>
        ))}
      </SlideContainer>
      <NavigationDots>
        {stories.map((_, index) => (
          <Dot
            key={index}
            active={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </NavigationDots>
    </Container>
  );
};
