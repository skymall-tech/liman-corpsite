import { useResponsive } from '../../hooks/useResponsive';
import { DesktopFooter } from './DesktopFooter';
import { MobileFooter } from './MobileFooter';

export const Footer = () => {
  const { isMobile, isTablet } = useResponsive();
  return isMobile || isTablet ? <MobileFooter /> : <DesktopFooter />;
};
