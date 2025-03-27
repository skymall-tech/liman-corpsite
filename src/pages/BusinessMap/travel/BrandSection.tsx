import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';

const BrandContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const BrandSection = () => {
  return (
    <BrandContainer id="brand">
      <SectionTitle
        title="OUR PARTNER BRANDS"
        subtitle={
          'A network of 30+ physical stores paves your path to discovery — from duty-free shopping havens to airport-based tax-inclusive boutiques.'
        }
      />
    </BrandContainer>
  );
};
