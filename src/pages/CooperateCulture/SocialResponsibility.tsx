import styled from '@emotion/styled';
import { SectionTitle } from '../../components/Title';
import { RotateCard } from '../../components/RotateCard';
import { RotateCardContent } from '../../components/RotateCard/Content';
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RotateCardContainer = styled.div`
  margin-top: 4vh;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 4vw;
  overflow: visible;
`;

const PARAGRAPHS = [
  'In 2010, the Guangzhou Consumer Council awarded nine stores under Ruijie (formerly known as Beishan Industrial and predecessor of Leman) the "2009 Trusted Consumer Store" certification',
  'Recognized by Aviation Administration in 2010 with "Premium Service Merchant" and "Best Staff Image Award"',
  'In 2011, ten stores under Ruijie received the "2009 Trusted Consumer Store" designation from Guangzhou Consumer Council, making the company the most awarded merchant at Baiyun Airport with this honor.',
  'Honored by Aviation Administration in 2011 with "Outstanding Asian Games Contribution Merchant Award".',
];

export const SocialResponsibility = () => {
  return (
    <Container id="social-responsibility">
      <SectionTitle
        title="SOCIAL RESPONSIBILITY"
        subtitle="Commitment in Action, Building Futures"
      />
      <RotateCardContainer>
        <RotateCard src="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Screenshot%202025-04-02%20at%209.51.45%E2%80%AFPM-09NGvJKFCHG4jOYuHxNgj8czwOXoz4.png"></RotateCard>
        <RotateCardContent
          paragraphs={PARAGRAPHS}
          title={'Customer Rights & Experience'}
        ></RotateCardContent>
      </RotateCardContainer>
    </Container>
  );
};
