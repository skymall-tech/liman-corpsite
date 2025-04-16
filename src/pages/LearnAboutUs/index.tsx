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
      'footer',
    ],
  });

  return (
    <PageContainer>
      <FirstScreen
        showOverlay={false}
        nextSectionId='business-map-section'
        title={t('about_us.page_title')}
        desc={t('about_us.page_subtitle')}
        image='https://cdn.liman.group/first_pic/1.png'
      />
      <BusinessMapSection />
      <OdysseySection />
      <TeamSection />
      <Footer />
    </PageContainer>
  );
};
