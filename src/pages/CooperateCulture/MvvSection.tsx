import styled from '@emotion/styled';
import { useNavigationHeight } from '../../hooks/useNavigationHeight';
import { CultureCard } from '../../components/CultureCard';

const MVVContainer = styled.div<{ navHeight: number }>`
  width: 100vw;
  height: ${({ navHeight }) => `calc(100vh - ${navHeight}px)`};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 66px;
  gap: 40px;
`;

export const MVVSection = () => {
  const navHeight = useNavigationHeight();

  return (
    <MVVContainer id="mvv-section" navHeight={navHeight}>
      <CultureCard
        title={'Mission'}
        shortDescription={
          'To carve excellence with a pioneering spirit and safeguard growth with an integrity-driven heritage.'
        }
      >
        <p>
          Guided by integrity as our compass and craftsmanship as our
          foundation.
        </p>
        <p>
          we transform challenges into stepping stones for progress and
          temptations into touchstones of resilience.
        </p>
        <p>
          Through relentless refinement of our expertise, we create sustainable
          value for customers and partners alike.
        </p>
      </CultureCard>
      <CultureCard
        title={'Value'}
        shortDescription={'Diligence with Compound Impact'}
      >
        <p>
          We believe persistent dedication yields exponential rewards. By honing
          unparalleled service capabilities, we deliver exceptional returns that
          transcend expectations.
        </p>
        <h3>Leadership by Example</h3>
        <p>
          Managers are the first ambassadors of excellence. Through rigorous
          self-discipline and elevated standards, we inspire teams to rise and
          thrive.
        </p>
        <h3>Purpose-Driven Altruism</h3>
        <p>
          "Empower stakeholders with tangible benefits." We resist short-term
          allure, prioritize collective growth, and co-create enduring value
          with integrity.
        </p>
      </CultureCard>
      <CultureCard
        title={'Vision'}
        shortDescription={'To co-define the journey to a better future'}
        showExpandIcon={false}
      ></CultureCard>
    </MVVContainer>
  );
};
