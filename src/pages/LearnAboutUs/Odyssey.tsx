import styled from '@emotion/styled';
import { SectionTitle } from '../../components/Title';

const OdysseyContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const OdysseySection = () => {
  return (
    <OdysseyContainer id="odyssey-section">
      <SectionTitle
        title="OUR ODYSSEY CHRONICLE"
        subtitle="18-year journey: From luxury retail leader to pioneer in duty-free industry."
      />
    </OdysseyContainer>
  );
};
