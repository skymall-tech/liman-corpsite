import styled from '@emotion/styled';
import BusinessCard from '../../components/card';
import { SectionTitle } from '../../components/Title';
import { ScrollContainer } from '../../components/ScrollContainer';

const BusinessMapContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MOCK_IMAGE =
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/pic1%281%29-vYOwaIeGTLepM4Vo0vIQsbmXAGo4DN.jpg';

export const BusinessMapSection = () => {
  return (
    <BusinessMapContainer id="business-map-section">
      <SectionTitle
        title="BUSINESS MAP"
        subtitle="Focus on three strategic areas"
      />
      <ScrollContainer>
        <BusinessCard image={MOCK_IMAGE} />
        <BusinessCard image={MOCK_IMAGE} />
        <BusinessCard image={MOCK_IMAGE} />
        <BusinessCard image={MOCK_IMAGE} />
        <BusinessCard image={MOCK_IMAGE} />
        <BusinessCard image={MOCK_IMAGE} />
        <BusinessCard image={MOCK_IMAGE} />
        <BusinessCard image={MOCK_IMAGE} />
        <BusinessCard image={MOCK_IMAGE} />
      </ScrollContainer>
    </BusinessMapContainer>
  );
};
