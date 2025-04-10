import { useMediaQuery } from 'react-responsive';

export const BREAKPOINTS = {
  // 超小屏幕（手机竖屏）- 320px ~ 480px
  xsmall: 320,
  // 中小屏幕（手机横屏/大屏手机）- 481px ~ 767px
  small: 481,
  // 中等屏幕（平板/折叠屏展开）- 768px ~ 1023px
  medium: 768,
  // 大屏幕（桌面端/笔记本）- 1024px ~ 1439px
  large: 1024,
  // 超大屏幕（宽屏显示器）- ≥1440px
  xlarge: 1440,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

export const useResponsive = () => {
  // 超小屏幕 (xsmall) - 320px ~ 480px
  const isXSmall = useMediaQuery({
    minWidth: BREAKPOINTS.xsmall,
    maxWidth: BREAKPOINTS.small - 1,
  });

  // 中小屏幕 (small) - 481px ~ 767px
  const isSmall = useMediaQuery({
    minWidth: BREAKPOINTS.small,
    maxWidth: BREAKPOINTS.medium - 1,
  });

  // 中等屏幕 (medium) - 768px ~ 1023px
  const isMedium = useMediaQuery({
    minWidth: BREAKPOINTS.medium,
    maxWidth: BREAKPOINTS.large - 1,
  });

  // 大屏幕 (large) - 1024px ~ 1439px
  const isLarge = useMediaQuery({
    minWidth: BREAKPOINTS.large,
    maxWidth: BREAKPOINTS.xlarge - 1,
  });

  // 超大屏幕 (xlarge) - ≥1440px
  const isXLarge = useMediaQuery({
    minWidth: BREAKPOINTS.xlarge,
  });

  return {
    // 基础断点检查
    isXSmall, // 超小屏幕（手机竖屏）
    isSmall, // 中小屏幕（手机横屏/大屏手机）
    isMedium, // 中等屏幕（平板/折叠屏展开）
    isLarge, // 大屏幕（桌面端/笔记本）
    isXLarge, // 超大屏幕（宽屏显示器）

    // 实用组合
    isMobile: isXSmall || isSmall, // 所有手机尺寸
    isTablet: isMedium, // 平板尺寸
    isDesktop: isLarge || isXLarge, // 所有桌面尺寸

    // 当前断点名称
    currentBreakpoint: isXSmall
      ? 'xsmall'
      : isSmall
      ? 'small'
      : isMedium
      ? 'medium'
      : isLarge
      ? 'large'
      : 'xlarge',
  } as const;
};
