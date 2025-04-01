import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';

const ArtContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const ArtSection = () => {
  return (
    <ArtContainer id="art-section">
      <SectionTitle
        title="L'ATELIER DES ARTS"
        subtitle="World Artisan Heritage Gallery"
      />
    </ArtContainer>
  );
};
