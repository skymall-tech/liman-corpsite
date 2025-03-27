import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';

const PartnerPortContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const PartnerPortSection = () => {
  return (
    <PartnerPortContainer id="partner-port">
      <SectionTitle
        title="PARTNER PORTS"
        subtitle={
          'We forge premium alliances with globally acclaimed brands — from luxury icons to curated local craftsmanship.'
        }
      />
    </PartnerPortContainer>
  );
};
