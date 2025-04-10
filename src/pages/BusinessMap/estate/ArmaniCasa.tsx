import styled from '@emotion/styled';
import { Carousel } from '../../../components/carousel';
import { SectionTitle } from '../../../components/Title';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const getStories = (t: TFunction) => {
  return [
    {
      src: 'https://cdn.liman.group/culture_estate/armani_nansha/p1.webp',
      paragraph: [
        t('culture_estate.armani_casa.stories.1.p1'),
        t('culture_estate.armani_casa.stories.1.p2'),
      ],
    },
    {
      src: 'https://cdn.liman.group/culture_estate/armani_nansha/p2.webp',
      paragraph: [
        t('culture_estate.armani_casa.stories.2.p1'),
        t('culture_estate.armani_casa.stories.2.p2'),
        t('culture_estate.armani_casa.stories.2.p3'),
      ],
    },
  ];
};

export const ArmaniCasa = () => {
  const { t } = useTranslation();
  const stories = getStories(t);
  return (
    <Container id="armani-casa">
      <SectionTitle
        title={t('culture_estate.armani_casa.title')}
        subtitle={t('culture_estate.armani_casa.subtitle')}
      />
      <Carousel stories={stories} />
    </Container>
  );
};
