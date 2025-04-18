import { useRef, useState, useEffect } from 'react';
import langIcon from '../../assets/icons/langIcon.svg';
import { LangIcon } from './style';
import PopupMenu from '../PopupMenu';
import { LAST_SELECT_LANG } from '../../utils';
import i18n from '../../i18n';

const languageList = [
  { label: 'English', value: 'en' },
  { label: '简体中文', value: 'zh' },
  { label: '繁体中文', value: 'zh-MO' },
];

export const LanguageSwitcher = (
  props: React.HTMLAttributes<HTMLImageElement>
) => {
  const langIconRef = useRef<HTMLImageElement | null>(null);
  const [showLangPopup, setShowLangPopup] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);

  // Force PopupMenu to recalculate position when language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      setTimeout(() => {
        setForceUpdate((prev) => prev + 1);
      }, 0);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return (
    <div>
      <LangIcon
        ref={langIconRef}
        src={langIcon}
        onMouseEnter={() => setShowLangPopup(true)}
        onMouseLeave={() => setShowLangPopup(false)}
        {...props}
      />
      {showLangPopup && (
        <PopupMenu
          key={forceUpdate}
          items={languageList.map((lang) => ({
            label: lang.label,
            action: () => {
              setShowLangPopup(false);
              i18n.changeLanguage(lang.value);
              localStorage.setItem(LAST_SELECT_LANG, lang.value);
            },
            isActive: i18n.language === lang.value,
          }))}
          referenceElement={langIconRef.current}
          onMouseEnter={() => setShowLangPopup(true)}
          onMouseLeave={() => setShowLangPopup(false)}
        />
      )}
    </div>
  );
};
