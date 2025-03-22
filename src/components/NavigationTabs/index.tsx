/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, useRef } from 'react';
import logo from '../../assets/logo.svg'; // Adjust the path as necessary
import langIcon from '../../assets/langIcon.svg';
import {
  Center,
  Container,
  LangIcon,
  Logo,
  TabButton,
  TabsContainer,
} from './style';
import { useLocation, useNavigate } from 'react-router';
import { PAGE_PATH } from '../../consts/pagePath';
import PopupMenu from '../PopupMenu';

const NavigationTabs: React.FC = () => {
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
    setActiveTab(location.pathname.substring(1) || 'business-map');
  }, [location.pathname]);

  return (
    <Container>
      <Center>
        <TabsContainer>
          <Logo src={logo} />
          <TabButton
            isActive={activeTab === PAGE_PATH.learnAboutUs}
            onClick={() => clickTab(PAGE_PATH.learnAboutUs)}
          >
            Learn about Leman
          </TabButton>
          <TabButton
            ref={businessMapRef}
            isActive={activeTab === PAGE_PATH.businessMap}
            onClick={() => clickTab(PAGE_PATH.businessMap)}
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
          >
            Business Map
          </TabButton>
          <TabButton
            isActive={activeTab === PAGE_PATH.cooperateCulture}
            onClick={() => clickTab(PAGE_PATH.cooperateCulture)}
          >
            Corporate Culture
          </TabButton>
          <TabButton
            isActive={activeTab === PAGE_PATH.contactUs}
            onClick={() => clickTab(PAGE_PATH.contactUs)}
          >
            Contact Us
          </TabButton>
          <LangIcon
            ref={langIconRef}
            src={langIcon}
            onMouseEnter={() => setShowLangPopup(true)}
            onMouseLeave={() => setShowLangPopup(false)}
          />
          {showLangPopup && (
            <PopupMenu
              items={['EN', 'CN', 'TC']}
              referenceElement={langIconRef.current}
            />
          )}

          {showPopup && (
            <PopupMenu
              items={['Travel Agent', 'Culture Property']}
              referenceElement={businessMapRef.current}
            />
          )}
        </TabsContainer>
      </Center>
    </Container>
  );
};

export default NavigationTabs;
