import styled from '@emotion/styled';
import { Carousel } from '../../../components/carousel';
import { SectionTitle } from '../../../components/Title';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { BREAKPOINTS } from '../../../hooks/useResponsive';
import { useNavigationHeight } from '../../../hooks/useNavigationHeight';

const Container = styled.div<{ navHeight: number }>`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    height: 100vh;
    height: 100dvh;
    padding-top: ${({ navHeight }) => navHeight}px;
  }
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
  const navHeight = useNavigationHeight();
  const stories = getStories(t);
  return (
    <Container id='armani-casa' navHeight={navHeight}>
      <SectionTitle
        title={t('culture_estate.armani_casa.title')}
        subtitle={t('culture_estate.armani_casa.subtitle')}
      />
      <Carousel stories={stories} />
    </Container>
  );
};
