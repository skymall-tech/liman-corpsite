import React from 'react';
import { usePopper } from 'react-popper';
import { PopupContainer, PopupItem, PopUpItemContainer } from './style';

interface PopUpItem {
  label: string;
  isActive: boolean;
  action?: () => void;
}

const PopupMenu: React.FC<{
  isLarge?: boolean;
  items: PopUpItem[];
  referenceElement: HTMLElement | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({
  items,
  referenceElement,
  onMouseEnter,
  onMouseLeave,
  isLarge = false,
}) => {
  const [popperElement, setPopperElement] = React.useState<HTMLElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
  });

  return (
    <PopupContainer
      ref={setPopperElement}
      style={styles.popper}
      {...attributes.popper}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <PopUpItemContainer isLarge={isLarge}>
        {items.map((item, index) => (
          <PopupItem key={index} onClick={item.action} isActive={item.isActive}>
            {item.label}
          </PopupItem>
        ))}
      </PopUpItemContainer>
    </PopupContainer>
  );
};

export default PopupMenu;
