import styled from '@emotion/styled';
import BusinessCard from '../../components/card';
import { SectionTitle } from '../../components/Title';
import { PAGE_PATH } from '../../consts/pagePath';
import { useNavigate } from 'react-router';

const BusinessMapContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BusinessMapSection = () => {
  const navigate = useNavigate();
  return (
    <BusinessMapContainer id="business-map-section">
      <SectionTitle
        title="BUSINESS MAP"
        subtitle="Focus on three strategic areas"
      />
      <Container>
        <BusinessCard
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/travel-retail-DGuirmz9sNjx8zs6CV1sSZpK2qWkJW.png"
          title="Travel Retail"
          onClick={() => {
            navigate(PAGE_PATH.businessMap);
            scrollTo(0, 0);
          }}
        />
        <BusinessCard
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/satelite-paris-8SCgh4vG8QhCz7Nmj7iWURb1gRcgxe.png"
          title="Satellite Paris"
          onClick={() => {
            navigate(PAGE_PATH.satellite);
            scrollTo(0, 0);
          }}
        />
        <BusinessCard
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/estate-lJzxq0ylNYB0yha4kGuTDXt6tRKwko.png"
          title="Cultural ESTATE"
          onClick={() => {
            navigate(PAGE_PATH.estate);
            scrollTo(0, 0);
          }}
        />
      </Container>
    </BusinessMapContainer>
  );
};
