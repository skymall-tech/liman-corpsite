import { useState } from 'react';

import { useEffect } from 'react';

export const useNavigationHeight = () => {
  const [navHeight, setNavHeight] = useState(100);

  useEffect(() => {
    const navElement = document.getElementById('navigation-container');
    if (navElement) {
      setNavHeight(navElement.getBoundingClientRect().height);
    }
  }, []);

  return navHeight;
};
