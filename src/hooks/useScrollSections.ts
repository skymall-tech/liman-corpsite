import { useEffect } from 'react';
import { useResponsive } from './useResponsive';

interface UseScrollSectionsProps {
  sections: string[];
  scrollThrottleTime?: number;
  navigationContainerId?: string;
}

export const useScrollSections = ({
  sections,
  scrollThrottleTime = 1000,
}: UseScrollSectionsProps) => {
  const { isDesktop } = useResponsive();
  useEffect(() => {
    let isScrolling = false;

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
        event.preventDefault();
        if (currentIndex === 1) {
          scrollToSection(
            isDesktop
              ? 'desktop-navigation-container'
              : 'mobile-navigation-container'
          );
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
  }, [sections, scrollThrottleTime]);
};
