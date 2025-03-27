import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';

const TaxFreeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const TaxFreeSection = () => {
  return (
    <TaxFreeContainer id="tax-free">
      <SectionTitle
        title="OUR E-TAX FREE HARBOR"
        subtitle={'Unlock global tax-exclusive treasures in the cloud'}
      />
    </TaxFreeContainer>
  );
};
