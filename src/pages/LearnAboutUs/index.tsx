import styled from '@emotion/styled';
// import BusinessCard from '../../components/card';
import React from 'react';
import { SectionTitle } from '../../components/Title';
import BusinessCard from '../../components/card';
import { FirstScreen } from './FirstScreen';

const MOCK_IMAGE =
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/pic1%281%29-vYOwaIeGTLepM4Vo0vIQsbmXAGo4DN.jpg';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 46px;
`;

export const LearnAboutUsPage: React.FC = () => {
  return (
    <MainContainer>
      <FirstScreen />
      <SectionTitle />
      <CardWrapper>
        <BusinessCard image={MOCK_IMAGE} />
        <BusinessCard image={MOCK_IMAGE} />
        <BusinessCard image={MOCK_IMAGE} />
      </CardWrapper>
    </MainContainer>
  );
};
