// import BusinessCard from '../../components/card';
import React from 'react';
import { BusinessMapSection } from './BusinessMap';
import { OdysseySection } from './Odyssey';
import { TeamSection } from './Team';
import { Footer } from '../../components/Footer';
import { FirstScreen } from '../../components/FirstScreen';
import { useScrollSections } from '../../hooks/useScrollSections';
import { PageContainer } from '../../components/PageConatiner';
import { useTranslation } from 'react-i18next';

export const LearnAboutUsPage: React.FC = () => {
  const { t } = useTranslation();
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
        showOverlay={false}
        nextSectionId="business-map-section"
        title={t('about_us.page_title')}
        desc={t('about_us.page_subtitle')}
        image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/first-Rao41GIGdVpGef4MpWC4hHe4RAXSFL.jpeg"
      />
      <BusinessMapSection />
      <OdysseySection />
      <TeamSection />
      <Footer />
    </PageContainer>
  );
};
