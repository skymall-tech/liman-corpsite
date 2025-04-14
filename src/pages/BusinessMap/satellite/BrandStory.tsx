import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { Carousel } from '../../../components/carousel';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

const BrandContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  min-height: 100dvh;
`;

const getStories = (t: TFunction) => {
  return [
    {
      src: 'https://cdn.liman.group/satellite_story/P1.webp',
      paragraph: [
        t('satellite_paris.brand_story.stories.1.p1'),
        t('satellite_paris.brand_story.stories.1.p2'),
      ],
    },
    {
      src: 'https://cdn.liman.group/satellite_story/P2.webp',
      paragraph: [t('satellite_paris.brand_story.stories.2.p1')],
    },
    {
      src: 'https://cdn.liman.group/satellite_story/P3.webp',
      paragraph: [t('satellite_paris.brand_story.stories.3.p1')],
    },
  ];
};

export const BrandStorySection = () => {
  const { t } = useTranslation();
  return (
    <BrandContainer id='brand-story'>
      <SectionTitle
        title={t('satellite_paris.brand_story.title')}
        subtitle={t('satellite_paris.brand_story.subtitle')}
      />
      <Carousel stories={getStories(t)} hideMask={true} />
    </BrandContainer>
  );
};
