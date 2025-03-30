import styled from '@emotion/styled';
import { useState } from 'react';

interface StorySlide {
  title: string;
  subtitle: string;
  content: string;
  quote?: string;
}

const stories: StorySlide[] = [
  {
    title: 'Disruption: When',
    subtitle: 'Residences Become Art',
    content:
      "In the early 2000s, the luxury real estate market overflowed with Baroque opulence. Armani Casa countered with silent luxury. Amid Dubai's dunes and Miami's coastlines, raw concrete and reflective water features intertwined. Armani Casa apartments defied excess through minimalist geometry. Every door handle's angle, every vein in marble, bore Armani's personal approval.",
    quote:
      '"I don\'t design houses," he asserted. "I design lifestyles—where the dweller becomes the protagonist."',
  },
  {
    title: 'Disruption: When',
    subtitle: 'Residences Become Art',
    content:
      "In the early 2000s, the luxury real estate market overflowed with Baroque opulence. Armani Casa countered with silent luxury. Amid Dubai's dunes and Miami's coastlines, raw concrete and reflective water features intertwined. Armani Casa apartments defied excess through minimalist geometry. Every door handle's angle, every vein in marble, bore Armani's personal approval.",
    quote:
      '"I don\'t design houses," he asserted. "I design lifestyles—where the dweller becomes the protagonist."',
  },
  {
    title: 'Disruption: When',
    subtitle: 'Residences Become Art',
    content:
      "In the early 2000s, the luxury real estate market overflowed with Baroque opulence. Armani Casa countered with silent luxury. Amid Dubai's dunes and Miami's coastlines, raw concrete and reflective water features intertwined. Armani Casa apartments defied excess through minimalist geometry. Every door handle's angle, every vein in marble, bore Armani's personal approval.",
    quote:
      '"I don\'t design houses," he asserted. "I design lifestyles—where the dweller becomes the protagonist."',
  },
  // Add more stories as needed
];

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const SlideContainer = styled.div<{ offset: number }>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => props.offset}%);
`;

const Slide = styled.div`
  min-width: 100%;
  height: 500px;
  padding: 60px;
  background: linear-gradient(
    to right,
    rgba(139, 69, 19, 0.8),
    rgba(139, 69, 19, 0.6)
  );
  color: white;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: white;
`;

const Subtitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: white;
`;

const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const Quote = styled.blockquote`
  font-style: italic;
  font-size: 1.2rem;
  margin-top: 2rem;
  padding-left: 1rem;
  border-left: 3px solid #e2c799;
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

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Container>
      <SlideContainer offset={-currentSlide * 100}>
        {stories.map((story, index) => (
          <Slide key={index}>
            <Title>{story.title}</Title>
            <Subtitle>{story.subtitle}</Subtitle>
            <Content>{story.content}</Content>
            {story.quote && <Quote>{story.quote}</Quote>}
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
