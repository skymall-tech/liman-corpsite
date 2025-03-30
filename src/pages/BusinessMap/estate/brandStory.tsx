import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { Carousel } from '../../../components/carousel';

const BrandContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const stories = [
  {
    src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p1-nfcamnu8KrxmouZwJepp3zhDB4jBpM.jpg',
    title: 'Disruption: When Residences Become Art',
    paragraph: [
      'In the early 2000s, the luxury real estate market overflowed with Baroque opulence. Armani Casa countered with silent luxury. ',
      'Amid Dubai’s dunes and Miami’s coastlines, raw concrete and reflective water features intertwined. Armani Casa apartments defied excess through minimalist geometry. Every door handle’s angle, every vein in marble, bore Armani’s personal approval.',
      '“I don’t design houses,” he asserted. “I design lifestyles—where the dweller becomes the protagonist.”',
    ],
  },
  {
    src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p2-9IPyvhyydOUSnENYsZnXydpQs2x1hP.jpg',
    title: 'Disruption: When Residences Become Art',
    paragraph: [],
  },
  {
    src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p3-1vmcLdmK9Rfpei5uEc0ECQWR20Hljl.jpg',
    title: 'Disruption: When Residences Become Art',
    paragraph: [],
  },
  {
    src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p4-j1yWiL1zxu1SeD45pBvuKXBH206hlA.jpg',
    title: 'Disruption: When Residences Become Art',
    paragraph: [],
  },
  {
    src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p5-ZoAGDWO5QhKz7zSMKPfRZFQY16s9lG.jpg',
    title: 'Disruption: When Residences Become Art',
    paragraph: [],
  },
];

export const BrandStorySection = () => {
  return (
    <BrandContainer id="brand-story">
      <SectionTitle
        title="Brand Story"
        subtitle="Global souls, crafted light — one spark ignites her world."
      />
      <Carousel stories={stories} />
    </BrandContainer>
  );
};
