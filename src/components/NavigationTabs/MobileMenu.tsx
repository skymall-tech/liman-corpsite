import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import {
  MobileNav,
  MenuIcon,
  Logo,
  MobileMenuContainer,
  MobileMenuItem,
  CloseIcon,
  SubMenuItem,
  ExpandIcon,
} from './style';
import menuIcon from '../../assets/icons/menu.svg';
import logo from '../../assets/icons/logo.svg';
import closeIcon from '../../assets/icons/close.svg';
import expandDownIcon from '../../assets/icons/expand-down.svg';
import { NavItem } from './types';
import { LanguageSwitcher } from './LanguageSwitcher';

export const MobileMenu: React.FC<{
  navItems: NavItem[];
}> = ({ navItems }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    navItems.forEach((item) => {
      if (item.subMenu) {
        const hasActiveChild = item.subMenu.some((subItem) =>
          subItem.activeFn()
        );
        if (hasActiveChild) {
          setExpandedItem(item.path);
        }
      }
    });
  }, [navItems]);

  return (
    <>
      <MobileNav id='mobile-navigation-container' isOpen={isMobileMenuOpen}>
        <MenuIcon
          src={menuIcon}
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        <Logo src={logo} />
        {isMobileMenuOpen ? (
          <CloseIcon
            src={closeIcon}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        ) : (
          <LanguageSwitcher />
        )}
      </MobileNav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenuContainer
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          >
            {navItems.map((item) => (
              <React.Fragment key={item.path}>
                <MobileMenuItem
                  isActive={item.activeFn()}
                  hasSubMenu={!!item.subMenu}
                  isExpanded={expandedItem === item.path}
                  onClick={() => {
                    if (item.subMenu) {
                      setExpandedItem(
                        expandedItem === item.path ? null : item.path
                      );
                    } else {
                      navigate(item.path);
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  {item.label}
                  {item.subMenu && (
                    <ExpandIcon
                      src={expandDownIcon}
                      isExpanded={expandedItem === item.path}
                    />
                  )}
                </MobileMenuItem>
                {item.subMenu && expandedItem === item.path && (
                  <>
                    {item.subMenu.map((subItem) => (
                      <SubMenuItem
                        key={subItem.path}
                        isActive={subItem.activeFn()}
                        onClick={() => {
                          navigate(subItem.path);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {subItem.label}
                      </SubMenuItem>
                    ))}
                  </>
                )}
              </React.Fragment>
            ))}
          </MobileMenuContainer>
        )}
      </AnimatePresence>
    </>
  );
};
