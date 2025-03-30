import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';

const BrandContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWall = styled.img`
  height: 70vh;
  margin-top: 30px;
  background-color: #f2f0ec;
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
      <LogoWall src="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/4_LOGO2-wwVG6Ii0XXhETiq9Y8fysGoRKpOEdB.png"></LogoWall>
    </BrandContainer>
  );
};
