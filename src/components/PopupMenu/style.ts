/* src/components/PopupMenu/style.ts */
import styled from '@emotion/styled';

export const PopupContainer = styled.div<{ isLarge: boolean }>`
  position: absolute;
  background-color: #faf9f8;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: ${({ isLarge }) => (isLarge ? '20px 55px' : '20px 27px')};
  z-index: 10;
  border-radius: 10px;
`;

export const PopupItem = styled.div<{ isActive: boolean }>`
  margin-top: 10px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? 'var(--color-primary)' : '#b3b3b3')};
  &:hover {
    color: var(--color-primary);
  }
`;
