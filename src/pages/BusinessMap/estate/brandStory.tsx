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
    title: 'Disruption:\nWhen Residences Become Art',
    paragraph: [
      'In the early 2000s, the luxury real estate market overflowed with Baroque opulence. Armani Casa countered with silent luxury. ',
      'Amid Dubai’s dunes and Miami’s coastlines, raw concrete and reflective water features intertwined. Armani Casa apartments defied excess through minimalist geometry. Every door handle’s angle, every vein in marble, bore Armani’s personal approval.',
      '“I don’t design houses,” he asserted. “I design lifestyles—where the dweller becomes the protagonist.”',
    ],
  },
  {
    src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p2-9IPyvhyydOUSnENYsZnXydpQs2x1hP.jpg',
    title: 'Origins: From Fabric Folds to Spatial Poetry',
    paragraph: [
      'Under the spotlights of fashion runways, Armani’s scissors carved fluid silhouettes. Yet in his Milan studio, he pondered: What if the drape of silk became curtains? What if the texture of suiting fabrics enveloped a sofa? What if the gleam of jewelry illuminated a lamp?',
      'Thus, Armani Casa’s first furniture piece emerged—no ornate carvings, only restrained curves and neutral tones, as if crystallizing the essence of haute couture into spatial language.',
      '“True luxury,” he declared, “lies in the dialogue between objects and space.”',
    ],
  },
  {
    src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p3-1vmcLdmK9Rfpei5uEc0ECQWR20Hljl.jpg',
    title: 'Disruption: When Residences Become Art',
    paragraph: [
      'In the early 2000s, the luxury real estate market overflowed with Baroque opulence. Armani Casa countered with silent luxury. ',
      'Amid Dubai’s dunes and Miami’s coastlines, raw concrete and reflective water features intertwined. Armani Casa apartments defied excess through minimalist geometry. Every door handle’s angle, every vein in marble, bore Armani’s personal approval.',
      '“I don’t design houses,” he asserted. “I design lifestyles—where the dweller becomes the protagonist.”',
    ],
  },
  {
    src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p4-j1yWiL1zxu1SeD45pBvuKXBH206hlA.jpg',
    title: 'An Epic of Timeless Elegance',
    paragraph: [
      'While the world chased extravagance, Giorgio Armani defined eternity with a single line. ',
      'In 2000, the Italian maestro who revolutionized fashion with his "power suits" extended his aesthetic empire into the realm of living—thus Armani Casa was born. ',
      'This was not merely a cross-border venture, but a design philosopher’s reinterpretation of "home": a sanctuary stripped of noise, where space becomes a refuge for the soul',
    ],
  },
  {
    src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p5-ZoAGDWO5QhKz7zSMKPfRZFQY16s9lG.jpg',
    paragraph: [
      'Today, Armani Casa residences stand as global icons of refined living. ',
      'Silent as poetry, they whisper a secret to those who enter: true elegance needs no proclamation. It transcends time.',
    ],
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
