import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { Carousel } from '../../../components/carousel';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { useNavigationHeight } from '../../../hooks/useNavigationHeight';
import { BREAKPOINTS } from '../../../hooks/useResponsive';

const BrandContainer = styled.div<{ navHeight: number }>`
  width: 100vw;
  min-height: 100vh;
  min-height: 100dvh;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    height: 100vh;
    height: 100dvh;
    padding-top: ${({ navHeight }) => navHeight}px;
  }
`;

const getStories = (t: TFunction) => {
  return [
    {
      src: 'https://cdn.liman.group/culture_estate/armani_brand/p1.webp',
      title: t('culture_estate.brand_story.stories.1.title'),
      paragraph: [
        t('culture_estate.brand_story.stories.1.p1'),
        t('culture_estate.brand_story.stories.1.p2'),
        t('culture_estate.brand_story.stories.1.p3'),
      ],
    },
    {
      src: 'https://cdn.liman.group/culture_estate/armani_brand/p2.webp',
      title: t('culture_estate.brand_story.stories.2.title'),
      paragraph: [
        t('culture_estate.brand_story.stories.2.p1'),
        t('culture_estate.brand_story.stories.2.p2'),
        t('culture_estate.brand_story.stories.2.p3'),
      ],
    },
    {
      src: 'https://cdn.liman.group/culture_estate/armani_brand/p3.webp',
      title: t('culture_estate.brand_story.stories.3.title'),
      paragraph: [
        t('culture_estate.brand_story.stories.3.p1'),
        t('culture_estate.brand_story.stories.3.p2'),
        t('culture_estate.brand_story.stories.3.p3'),
      ],
    },
    {
      src: 'https://cdn.liman.group/culture_estate/armani_brand/p4.webp',
      title: t('culture_estate.brand_story.stories.4.title'),
      paragraph: [
        t('culture_estate.brand_story.stories.4.p1'),
        t('culture_estate.brand_story.stories.4.p2'),
        t('culture_estate.brand_story.stories.4.p3'),
      ],
    },
    {
      src: 'https://cdn.liman.group/culture_estate/armani_brand/p5.webp',
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
  const navHeight = useNavigationHeight();
  return (
    <BrandContainer id='brand-story' navHeight={navHeight}>
      <SectionTitle
        title={t('culture_estate.brand_story.title')}
        subtitle={t('culture_estate.brand_story.subtitle')}
      />
      <Carousel stories={stories} />
    </BrandContainer>
  );
};
