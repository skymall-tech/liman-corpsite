import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

import logo from '../../assets/icons/logo.svg';
import { PAGE_PATH } from '../../consts/pagePath';
import PopupMenu from '../PopupMenu';
import { LanguageSwitcher } from './LanguageSwitcher';
import { NavItem } from './types';
import { DesktopNav, Logo, TabButton } from './style';

export const DesktopMenu: React.FC<{
  navItems: NavItem[];
}> = ({ navItems }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const itemRefs = useMemo(
    () => navItems.map(() => React.createRef<HTMLButtonElement>()),
    [navItems]
  );

  const subMenuItemIndex = navItems.findIndex((item) => item.subMenu);
  const subMenuRef =
    subMenuItemIndex !== -1 ? itemRefs[subMenuItemIndex] : null;

  return (
    <DesktopNav>
      <Logo
        src={logo}
        style={{ marginRight: '60px' }}
        onClick={() => navigate(PAGE_PATH.learnAboutUs)}
      />

      {navItems.map((item, index) => (
        <TabButton
          key={item.path}
          ref={itemRefs[index]}
          isActive={item.activeFn()}
          onClick={item.onClick}
          onMouseEnter={() => item.subMenu && setShowPopup(true)}
          onMouseLeave={() => item.subMenu && setShowPopup(false)}
        >
          {item.label}
        </TabButton>
      ))}

      <LanguageSwitcher style={{ marginLeft: '60px' }} />

      {showPopup && navItems.find((item) => item.subMenu)?.subMenu && (
        <PopupMenu
          isLarge={true}
          items={
            navItems
              .find((item) => item.subMenu)
              ?.subMenu?.map((subItem) => ({
                label: subItem.label,
                isActive: subItem.activeFn(),
                action: () => {
                  setShowPopup(false);
                  subItem.onClick();
                },
              })) || []
          }
          referenceElement={subMenuRef?.current || null}
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        />
      )}
    </DesktopNav>
  );
};
