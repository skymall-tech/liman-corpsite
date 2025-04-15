/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Logo = styled.img`
  width: 93x;
  height: 41px;
  cursor: pointer;
`;

export const LangIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
`;

export const DesktopNav = styled.div`
  width: 100%;
  background-color: var(--color-background-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  gap: 20px;
`;

export const MobileNav = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? '0' : undefined)};
  background: var(--color-background-primary);
  z-index: 100;
  padding: 25px 32px;

  /* Logo container */
  & > :nth-child(2) {
    margin: 0 auto;
  }

  /* MenuIcon and LanguageSwitcher */
  & > :first-child,
  & > :last-child {
    flex: 0 0 auto;
    transition: all 0.3s ease;
  }
`;

export const MenuIcon = styled.img<{ isOpen?: boolean }>`
  width: 24px;
  height: 24px;
  cursor: pointer;
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  visibility: ${({ isOpen }) => (isOpen ? 'hidden' : 'visible')};
  transition: all 0.3s ease;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
`;

export const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
`;

export const MobileMenuItem = styled.div<{
  isActive: boolean;
  hasSubMenu?: boolean;
  isExpanded?: boolean;
}>`
  padding: 20px;
  width: 100%;
  text-align: center;
  font-size: var(--font-size-h3);
  color: var(--color-primary);
  cursor: pointer;
  border-bottom: 1px solid rgba(181, 145, 82, 0.2);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const ExpandIcon = styled.img<{ isExpanded: boolean }>`
  position: absolute;
  right: 20px;
  width: 24px;
  height: 24px;
  transform: ${({ isExpanded }) =>
    isExpanded ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.3s ease;
`;

export const SubMenuItem = styled(MobileMenuItem)`
  font-size: calc(var(--font-size-h3) - 2px);
  padding: 15px;
  color: var(--color-primary);
  background-color: var(--color-background-tertiary);
  border-bottom: 1px solid rgba(181, 145, 82, 0.2);

  &:hover {
    opacity: 0.8;
  }
`;

export const MobileMenuContainer = styled(motion.div)`
  position: fixed;
  top: 91px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 91px);
  height: calc(100dvh - 91px);
  background-color: var(--color-background-primary);
  z-index: 99;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  color: var(--color-secondary);
  font-size: 14px;
  @media screen and (min-width: 1800px) {
    font-size: 14px;
  }
  @media screen and (min-width: 2000px) {
    font-size: 18px;
  }
  cursor: pointer;
  border-bottom: ${({ isActive }) =>
    isActive ? '2px solid var(--color-primary)' : 'none'};
  transition: color 0.1s, border-bottom 0.1s;
  &:hover {
    color: var(--color-primary);
  }
`;
