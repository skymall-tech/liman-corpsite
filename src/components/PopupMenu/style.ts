/* src/components/PopupMenu/style.ts */
import styled from '@emotion/styled';

export const PopupContainer = styled.div`
  position: absolute;
  z-index: 10;
  padding-top: 10px;
`;

export const PopupItem = styled.div<{ isActive: boolean }>`
  margin-top: 10px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? 'var(--color-primary)' : '#b3b3b3')};
  &:hover {
    color: var(--color-primary);
  }
`;

export const PopUpItemContainer = styled.div<{ isLarge: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #faf9f8;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: ${({ isLarge }) => (isLarge ? '20px 50px' : '20px 27px')};
  border-radius: 10px;
`;
