/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, useRef } from 'react';
import logo from '../../assets/icons/logo.svg'; // Adjust the path as necessary
import langIcon from '../../assets/icons/langIcon.svg';
import {
  Center,
  Container,
  HeaderContainer,
  LangIcon,
  Logo,
  TabButton,
  TabsContainer,
} from './style';
import { useLocation, useNavigate } from 'react-router';
import { PAGE_PATH } from '../../consts/pagePath';
import PopupMenu from '../PopupMenu';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

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
    navigate(`/${tab}`);
  };

  useEffect(() => {
    setActiveTab(location.pathname.substring(1) || '');
  }, [location.pathname]);

  return (
    <Container id="navigation-container">
      <Center>
        <HeaderContainer>
          <Logo src={logo} />
          <TabsContainer>
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
          </TabsContainer>
          <LangIcon
            ref={langIconRef}
            src={langIcon}
            onMouseEnter={() => setShowLangPopup(true)}
            onMouseLeave={() => setShowLangPopup(false)}
          />
          {showLangPopup && (
            <PopupMenu
              items={[
                { label: 'EN', action: () => i18n.changeLanguage('en') },
                { label: 'CN', action: () => i18n.changeLanguage('zh') },
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
                  label: 'Travel Agent',
                  action: () => {
                    setShowPopup(false);
                    navigate(`/${PAGE_PATH.businessMap}`);
                  },
                },
                {
                  label: 'Satellite Paris',
                  action: () => {
                    setShowPopup(false);
                    navigate(`/${PAGE_PATH.satellite}`);
                  },
                },
                {
                  label: 'Culture Estate',
                  action: () => {
                    setShowPopup(false);
                    navigate(`/${PAGE_PATH.estate}`);
                  },
                },
              ]}
              referenceElement={businessMapRef.current}
              onMouseEnter={() => setShowPopup(true)}
              onMouseLeave={() => setShowPopup(false)}
            />
          )}
        </HeaderContainer>
      </Center>
    </Container>
  );
};

export default NavigationTabs;
