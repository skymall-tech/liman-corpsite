export const LAST_SELECT_LANG = 'LAST_SELECT_LANG';

export const getNavBottom = (): string => {
  const isWechat = /MicroMessenger/i.test(navigator.userAgent);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isSafari =
    /Safari/i.test(navigator.userAgent) && !/Chrome/i.test(navigator.userAgent);
  const isChrome = /Chrome/i.test(navigator.userAgent) && !isWechat;

  let navBottom = '0px'; // Default for desktop and WeChat

  if (isMobile) {
    if (isChrome) {
      navBottom = '80px';
    } else if (isSafari) {
      navBottom = '70px';
    }
  }

  return navBottom;
};
