import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

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
`;

const SlideContainer = styled.div<{ offset: number }>`
  display: flex;
  transform: translateX(${(props) => props.offset}%);
  transition: ${(props) =>
    props.offset % 100 === 0 ? 'transform 0.3s ease-in-out' : 'none'};
  user-select: none;
  background: var(--color-primary);
  overflow: visible;
`;

const Slide = styled.div`
  position: relative;
  min-width: 100vw;
  height: calc(100vh - 250px);
  background: linear-gradient(
    to right,
    var(--color-primary),
    rgba(0, 0, 0, 0.1)
  );
  color: white;
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
`;

const DescContainer = styled.div`
  position: absolute;
  left: 50px;
  top: 58px;
  width: max(30vw, 360px);
`;

const ParagraphContainer = styled.div`
  width: max(20vw, 240px);
  display: flex;
  flex-direction: column;
  margin-top: 30px;
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

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((current) =>
        current === stories.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, stories.length]);

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
    setDragOffset(diff);
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

  return (
    <Container>
      <SlideContainer
        offset={-currentSlide * 100 + (dragOffset / window.innerWidth) * 100}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {stories.map((story, index) => (
          <Slide key={index}>
            <Image src={story.src}></Image>
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
