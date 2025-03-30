import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';

const PartnerPortContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const GlobalRetailSection = () => {
  return (
    <PartnerPortContainer id="partner-port">
      <SectionTitle
        title="GLOBAL RETAIL LOUNGE"
        subtitle={
          'A network of 30+ physical stores paves your path to discovery — from duty-free shopping havens to airport-based tax-inclusive boutiques.'
        }
      />
    </PartnerPortContainer>
  );
};
