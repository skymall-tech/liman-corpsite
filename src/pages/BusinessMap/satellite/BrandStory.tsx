import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { Carousel } from '../../../components/carousel';
import { useTranslation } from 'react-i18next';

const BrandContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const stories = [
  {
    src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/3-xnqCK3LeLXGbMZzlbkmAQ26C05vnGA.png',
    paragraph: [
      'In the early 2000s, the luxury real estate market overflowed with Baroque opulence. Armani Casa countered with silent luxury. ',
      'Amid Dubai’s dunes and Miami’s coastlines, raw concrete and reflective water features intertwined. Armani Casa apartments defied excess through minimalist geometry. Every door handle’s angle, every vein in marble, bore Armani’s personal approval.',
      '“I don’t design houses,” he asserted. “I design lifestyles—where the dweller becomes the protagonist.”',
    ],
  },
];

export const BrandStorySection = () => {
  const { t } = useTranslation();
  return (
    <BrandContainer id="brand-story">
      <SectionTitle
        title={t('satellite_paris.brand_story.title')}
        subtitle={t('satellite_paris.brand_story.subtitle')}
      />
      <Carousel stories={stories} />
    </BrandContainer>
  );
};
