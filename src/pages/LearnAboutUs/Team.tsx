import styled from '@emotion/styled';
import { SectionTitle } from '../../components/Title';

const TeamContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const TeamSection = () => {
  return (
    <TeamContainer id="team-section">
      <SectionTitle
        title="OUR VISIONARY HELM"
        subtitle="Gather experts from around the world"
      />
    </TeamContainer>
  );
};
