import { useState } from 'react';

import { useEffect } from 'react';
import { useResponsive } from './useResponsive';

export const useNavigationHeight = () => {
  const [navHeight, setNavHeight] = useState(100);
  const { isDesktop } = useResponsive();
  const navId = isDesktop
    ? 'desktop-navigation-container'
    : 'mobile-navigation-container';

  useEffect(() => {
    const navElement = document.getElementById(navId);
    if (navElement) {
      setNavHeight(navElement.getBoundingClientRect().height);
    }
  }, []);

  return navHeight;
};
