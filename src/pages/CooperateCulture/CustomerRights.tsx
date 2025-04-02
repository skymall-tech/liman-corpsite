import styled from '@emotion/styled';
import { RotateCard } from '../../components/RotateCard';
import { RotateCardContent } from '../../components/RotateCard/Content';
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9vh;
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
  'Honored with the "Public Welfare Supporter Enterprise" award by Huadu District, Guangzhou City from 2010 to 2011',
  'Awarded the "Community Ambassador Award" by Huadong Town, Huadu District, Guangzhou City in 2014',
  'Received the "Outstanding Philanthropy Award" from Huadu District, Guangzhou City between 2014 and 2015.',
  'Recognized as a "Caring Enterprise" for the Jiusan-New Social Stratum Association – Love & Peace Philanthropy Initiative in 2015.',
];

export const CustomerRights = () => {
  return (
    <Container id="customer-rights">
      <RotateCardContainer>
        <RotateCardContent
          paragraphs={PARAGRAPHS}
          title={'Customer Rights & Experience'}
          textAlign="right"
        ></RotateCardContent>
        <RotateCard
          rightRotate
          src={
            'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Screenshot%202025-04-02%20at%2010.22.32%E2%80%AFPM-O0yDpyzFGBPBON8vVHFeI1F6HYCybz.png'
          }
        ></RotateCard>
      </RotateCardContainer>
    </Container>
  );
};
