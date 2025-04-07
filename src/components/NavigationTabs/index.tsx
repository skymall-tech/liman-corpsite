/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, useRef } from 'react';
import logo from '../../assets/icons/logo.svg'; // Adjust the path as necessary
import langIcon from '../../assets/icons/langIcon.svg';
import {
  // Center,
  Container,
  HeaderContainer,
  LangIcon,
  Logo,
  TabButton,
} from './style';
import { useLocation, useNavigate } from 'react-router';
import { PAGE_PATH } from '../../consts/pagePath';
import PopupMenu from '../PopupMenu';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { LAST_SELECT_LANG } from '../../utils';

const NavigationTabs: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('business-map');
  const [showPopup, setShowPopup] = useState(false);
  const [showLangPopup, setShowLangPopup] = useState(false);
  const navigate = useNavigate();
  const businessMapRef = useRef<HTMLButtonElement | null>(null);
  const langIconRef = useRef<HTMLImageElement | null>(null);

  const clickTab = (tab: string) => {
    navigate(tab);
  };

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <Container id="navigation-container">
      {/* <Center> */}
      <HeaderContainer>
        <Logo src={logo} />

        <TabButton
          isActive={activeTab === PAGE_PATH.learnAboutUs}
          onClick={() => clickTab(PAGE_PATH.learnAboutUs)}
        >
          {t('menu.learn_about_us')}
        </TabButton>
        <TabButton
          ref={businessMapRef}
          isActive={
            activeTab === PAGE_PATH.businessMap ||
            activeTab === PAGE_PATH.estate ||
            activeTab === PAGE_PATH.satellite
          }
          onClick={() => clickTab(PAGE_PATH.businessMap)}
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          {t('menu.business_map')}
        </TabButton>
        <TabButton
          isActive={activeTab === PAGE_PATH.cooperateCulture}
          onClick={() => clickTab(PAGE_PATH.cooperateCulture)}
        >
          {t('menu.cooperate_culture')}
        </TabButton>
        <TabButton
          isActive={activeTab === PAGE_PATH.contactUs}
          onClick={() => clickTab(PAGE_PATH.contactUs)}
        >
          {t('menu.contact_us')}
        </TabButton>

        <LangIcon
          ref={langIconRef}
          src={langIcon}
          onMouseEnter={() => setShowLangPopup(true)}
          onMouseLeave={() => setShowLangPopup(false)}
        />
        {showLangPopup && (
          <PopupMenu
            items={[
              {
                label: 'English',
                action: () => {
                  i18n.changeLanguage('en');
                  localStorage.setItem(LAST_SELECT_LANG, 'en');
                },
                isActive: i18n.language == 'en',
              },
              {
                label: '简体中文',
                action: () => {
                  i18n.changeLanguage('zh');
                  localStorage.setItem(LAST_SELECT_LANG, 'zh');
                },
                isActive: i18n.language == 'zh',
              },
              {
                label: '繁体中文',
                action: () => {
                  i18n.changeLanguage('zh-MO');
                  localStorage.setItem(LAST_SELECT_LANG, 'zh-MO');
                },
                isActive: i18n.language == 'zh-MO',
              },
            ]}
            referenceElement={langIconRef.current}
            onMouseEnter={() => setShowLangPopup(true)}
            onMouseLeave={() => setShowLangPopup(false)}
          />
        )}

        {showPopup && (
          <PopupMenu
            items={[
              {
                label: t('common.travel_retail'),
                isActive: activeTab === PAGE_PATH.businessMap,
                action: () => {
                  setShowPopup(false);
                  navigate(PAGE_PATH.businessMap);
                },
              },
              {
                label: t('common.satellite_paris'),
                isActive: activeTab === PAGE_PATH.satellite,
                action: () => {
                  setShowPopup(false);
                  navigate(PAGE_PATH.satellite);
                },
              },
              {
                label: t('common.culture_estate'),
                isActive: activeTab === PAGE_PATH.estate,
                action: () => {
                  setShowPopup(false);
                  navigate(PAGE_PATH.estate);
                },
              },
            ]}
            referenceElement={businessMapRef.current}
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
          />
        )}
      </HeaderContainer>
      {/* </Center> */}
    </Container>
  );
};

export default NavigationTabs;
