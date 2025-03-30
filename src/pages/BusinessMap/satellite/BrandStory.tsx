import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { Carousel } from '../../../components/carousel';

const BrandContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const BrandStorySection = () => {
  return (
    <BrandContainer id="brand-story">
      <SectionTitle
        title="Brand Story"
        subtitle="Global souls, crafted light — one spark ignites her world."
      />
      <Carousel />
    </BrandContainer>
  );
};
