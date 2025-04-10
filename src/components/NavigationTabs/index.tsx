/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useResponsive } from '../../hooks/useResponsive';
import { Container } from './style';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import { PAGE_PATH } from '../../consts/pagePath';
import { useTranslation } from 'react-i18next';
import { NavItem } from './types';

const NavigationTabs: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('business-map');
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();

  const navItems: NavItem[] = [
    {
      path: PAGE_PATH.learnAboutUs,
      label: t('menu.learn_about_us'),
      activeFn: () => activeTab === PAGE_PATH.learnAboutUs,
      onClick: () => {
        navigate(PAGE_PATH.learnAboutUs);
      },
    },
    {
      path: PAGE_PATH.businessMap,
      label: t('menu.business_map'),
      subMenu: [
        {
          path: PAGE_PATH.businessMap,
          label: t('common.travel_retail'),
          activeFn: () => activeTab === PAGE_PATH.businessMap,
          onClick: () => {
            navigate(PAGE_PATH.businessMap);
          },
        },
        {
          path: PAGE_PATH.satellite,
          label: t('common.satellite_paris'),
          activeFn: () => activeTab === PAGE_PATH.satellite,
          onClick: () => {
            navigate(PAGE_PATH.satellite);
          },
        },
        {
          path: PAGE_PATH.estate,
          label: t('common.culture_estate'),
          activeFn: () => activeTab === PAGE_PATH.estate,
          onClick: () => {
            navigate(PAGE_PATH.estate);
          },
        },
      ],
      activeFn: () =>
        activeTab === PAGE_PATH.businessMap ||
        activeTab === PAGE_PATH.estate ||
        activeTab === PAGE_PATH.satellite,
      onClick: () => {
        navigate(PAGE_PATH.businessMap);
      },
    },
    {
      path: PAGE_PATH.cooperateCulture,
      label: t('menu.cooperate_culture'),
      activeFn: () => activeTab === PAGE_PATH.cooperateCulture,
      onClick: () => {
        navigate(PAGE_PATH.cooperateCulture);
      },
    },
    {
      path: PAGE_PATH.contactUs,
      label: t('menu.contact_us'),
      activeFn: () => activeTab === PAGE_PATH.contactUs,
      onClick: () => {
        navigate(PAGE_PATH.contactUs);
      },
    },
  ];

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <Container id='navigation-container'>
      {isMobile || isTablet ? (
        <MobileMenu navItems={navItems} />
      ) : (
        <DesktopMenu navItems={navItems} />
      )}
    </Container>
  );
};

export default NavigationTabs;
