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
      src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p1-oF4h3R908VYJ5ihJpIqW7tvfkE6lc3.jpg',
      title: t('culture_estate.armani_casa.stories.1.title'),
      paragraph: [
        t('culture_estate.armani_casa.stories.1.p1'),
        t('culture_estate.armani_casa.stories.1.p2'),
      ],
    },
    {
      src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p2-3760X97rvTII6LCDL11978mXcs7vB4.jpg',
      title: t('culture_estate.armani_casa.stories.2.title'),
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
