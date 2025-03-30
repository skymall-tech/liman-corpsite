// import BusinessCard from '../../components/card';
import React from 'react';
import { BusinessMapSection } from './BusinessMap';
import { OdysseySection } from './Odyssey';
import { TeamSection } from './Team';
import { Footer } from '../../components/Footer';
import { FirstScreen } from '../../components/FirstScreen';
import { useScrollSections } from '../../hooks/useScrollSections';
import { PageContainer } from '../../components/PageConatiner';

export const LearnAboutUsPage: React.FC = () => {
  useScrollSections({
    sections: [
      'first-screen',
      'business-map-section',
      'odyssey-section',
      'team-section',
    ],
  });

  return (
    <PageContainer>
      <FirstScreen
        showOverlay={true}
        nextSectionId="business-map-section"
        title="LIMAN GROUP"
        desc="LIMAN GROUP CO. (LIMITED) was established in Hong Kong in 2009, focusing on international high-end fashion."
        image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/first-Rao41GIGdVpGef4MpWC4hHe4RAXSFL.jpeg"
      />
      <BusinessMapSection />
      <OdysseySection />
      <TeamSection />
      <Footer />
    </PageContainer>
  );
};
