import styled from '@emotion/styled';
import { SectionTitle } from '../../components/Title';
import { TeamCard } from '../../components/TeamCard';

const TeamContainer = styled.div`
  height: 100vh;
  overflow-y: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 90px;
  height: 400px;
  width: 100%;
`;

const DescSection = styled.div`
  width: 702px;
  font-size: 14px;
  text-align: center;
  color: var(--color-primary);
`;

export const TeamSection = () => {
  return (
    <TeamContainer id="team-section">
      <SectionTitle
        title="OUR VISIONARY HELM"
        subtitle="Gather experts from around the world"
      />
      <CardContainer>
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
      </CardContainer>
      <DescSection>
        Architects from luxury retail, duty-free logistics and digital
        innovation coalesce to redefine premium service paradigms. Through
        predictive analytics and experiential engineering, we craft tomorrow's
        retail DNA while delivering today's client success.{' '}
      </DescSection>
    </TeamContainer>
  );
};
