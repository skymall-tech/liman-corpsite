import styled from '@emotion/styled';
import { Carousel } from '../../../components/carousel';
import { SectionTitle } from '../../../components/Title';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const stories = [
  {
    src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p1-oF4h3R908VYJ5ihJpIqW7tvfkE6lc3.jpg',
    title: 'Disruption:\nWhen Residences Become Art',
    paragraph: [
      'In 2019, Liman Company obtained the Greater Bay Area development authorization of ARMANI Armani apartment brand with good reputation.',
      'Thus opening the deep cooperation with Armani brand real estate and customized high-end home.',
    ],
  },
  {
    src: 'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/p2-3760X97rvTII6LCDL11978mXcs7vB4.jpg',
    title: 'Origins: From Fabric Folds to Spatial Poetry',
    paragraph: [
      'The project is located in Lingshan Island, one of the international financial Islands of Mingzhu Bay, Nansha District, Guangzhou, and has a commercial and apartment complex with a sea view.',
      'The project consists of two plots. Two 40-meter-high commercial buildings are planned to be built on the western plot, covering an area of 9,900 square meters. ',
      'Eastern plot construction one a 184-meter-high apartment building and a 46-meter-high apartment building with an area of 7,200 square meters',
    ],
  },
];

export const ArmaniCasa = () => {
  return (
    <Container id="armani-casa">
      <SectionTitle title="Our Armani Casa" subtitle="East Meet West" />
      <Carousel stories={stories} />
    </Container>
  );
};
