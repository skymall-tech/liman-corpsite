/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding: 25px 0;
  background-color: var(--color-background-primary);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Logo = styled.img`
  width: 93x;
  height: 41px;
  margin-right: 60px;
`;

export const LangIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 60px;
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
