import styled from '@emotion/styled';
import { SectionTitle } from '../../components/Title';
import { ScrollContainer } from '../../components/ScrollContainer';
import { TeamCard } from '../../components/TeamCard';

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
      <ScrollContainer>
        <TeamCard
          name="Luke"
          title="Executive"
          description="A visionary executive specializing in international trade and investment"
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Luke-O9Vv9XaqRfZjAfxZupoHA3hBOOK7SW.jpg"
        />
        <TeamCard
          name="Luke"
          title="Executive"
          description="A visionary executive specializing in international trade and investment"
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Luke-O9Vv9XaqRfZjAfxZupoHA3hBOOK7SW.jpg"
        />
        <TeamCard
          name="Luke"
          title="Executive"
          description="A visionary executive specializing in international trade and investment"
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Luke-O9Vv9XaqRfZjAfxZupoHA3hBOOK7SW.jpg"
        />
        <TeamCard
          name="Luke"
          title="Executive"
          description="A visionary executive specializing in international trade and investment"
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Luke-O9Vv9XaqRfZjAfxZupoHA3hBOOK7SW.jpg"
        />
      </ScrollContainer>
    </TeamContainer>
  );
};
