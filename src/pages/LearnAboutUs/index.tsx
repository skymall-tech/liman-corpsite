import styled from '@emotion/styled';
// import BusinessCard from '../../components/card';
import React, { useEffect } from 'react';
import { FirstScreen } from './FirstScreen';
import { BusinessMapSection } from './BusinessMap';
import { OdysseySection } from './Odyssey';
import { TeamSection } from './Team';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LearnAboutUsPage: React.FC = () => {
  useEffect(() => {
    const sections = [
      'first-screen',
      'business-map-section',
      'odyssey-section',
      'team-section',
    ];

    let isScrolling = false;
    const scrollThrottleTime = 1000; // 1 second throttle

    const scrollToSection = (sectionId: string) => {
      if (isScrolling) return;

      isScrolling = true;
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        isScrolling = false;
      }, scrollThrottleTime);
    };

    const getCurrentSectionIndex = () => {
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        // Check if section is more than 50% visible
        if (
          rect.top >= -rect.height / 2 &&
          rect.top <= window.innerHeight / 2
        ) {
          return i;
        }
      }
      return -1;
    };

    const handleScroll = (event: WheelEvent) => {
      const currentIndex = getCurrentSectionIndex();
      if (currentIndex === -1) return;

      if (event.deltaY > 0 && currentIndex < sections.length - 1) {
        event.preventDefault();
        scrollToSection(sections[currentIndex + 1]);
      } else if (event.deltaY < 0 && currentIndex > 0) {
        // Scrolling up
        event.preventDefault();
        if (currentIndex === 1) {
          scrollToSection('navigation-container');
        } else {
          scrollToSection(sections[currentIndex - 1]);
        }
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isScrolling) {
        event.preventDefault();
        return;
      }

      const currentIndex = getCurrentSectionIndex();
      if (currentIndex === -1) return;

      if (event.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        event.preventDefault();
        scrollToSection(sections[currentIndex + 1]);
      } else if (event.key === 'ArrowUp' && currentIndex > 0) {
        event.preventDefault();
        scrollToSection(sections[currentIndex - 1]);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <MainContainer>
      <FirstScreen />
      <BusinessMapSection />
      <OdysseySection />
      <TeamSection />
    </MainContainer>
  );
};
