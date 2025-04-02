import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { Carousel } from '../../../components/carousel';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

const BrandContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const getStories = (t: TFunction) => {
  return [
    {
      src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p1-nfcamnu8KrxmouZwJepp3zhDB4jBpM.jpg',
      title: t('culture_estate.brand_story.stories.1.title'),
      paragraph: [
        t('culture_estate.brand_story.stories.1.p1'),
        t('culture_estate.brand_story.stories.1.p2'),
        t('culture_estate.brand_story.stories.1.p3'),
      ],
    },
    {
      src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p2-9IPyvhyydOUSnENYsZnXydpQs2x1hP.jpg',
      title: t('culture_estate.brand_story.stories.2.title'),
      paragraph: [
        t('culture_estate.brand_story.stories.2.p1'),
        t('culture_estate.brand_story.stories.2.p2'),
        t('culture_estate.brand_story.stories.2.p3'),
      ],
    },
    {
      src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p3-1vmcLdmK9Rfpei5uEc0ECQWR20Hljl.jpg',
      title: t('culture_estate.brand_story.stories.3.title'),
      paragraph: [
        t('culture_estate.brand_story.stories.3.p1'),
        t('culture_estate.brand_story.stories.3.p2'),
        t('culture_estate.brand_story.stories.3.p3'),
      ],
    },
    {
      src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p4-j1yWiL1zxu1SeD45pBvuKXBH206hlA.jpg',
      title: t('culture_estate.brand_story.stories.4.title'),
      paragraph: [
        t('culture_estate.brand_story.stories.4.p1'),
        t('culture_estate.brand_story.stories.4.p2'),
        t('culture_estate.brand_story.stories.4.p3'),
      ],
    },
    {
      src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p5-ZoAGDWO5QhKz7zSMKPfRZFQY16s9lG.jpg',
      paragraph: [
        t('culture_estate.brand_story.stories.5.p1'),
        t('culture_estate.brand_story.stories.5.p2'),
      ],
    },
  ];
};

export const BrandStorySection = () => {
  const { t } = useTranslation();
  const stories = getStories(t);
  return (
    <BrandContainer id="brand-story">
      <SectionTitle
        title={t('culture_estate.brand_story.title')}
        subtitle={t('culture_estate.brand_story.subtitle')}
      />
      <Carousel stories={stories} />
    </BrandContainer>
  );
};
