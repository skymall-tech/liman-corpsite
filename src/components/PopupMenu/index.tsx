import React from 'react';
import { usePopper } from 'react-popper';
import { PopupContainer, PopupItem } from './style';

interface PopUpItem {
  label: string;
  action?: () => void;
}

const PopupMenu: React.FC<{
  items: PopUpItem[];
  referenceElement: HTMLElement | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ items, referenceElement, onMouseEnter, onMouseLeave }) => {
  const [popperElement, setPopperElement] = React.useState<HTMLElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
  });

  return (
    <PopupContainer
      isLarge={false}
      ref={setPopperElement}
      style={styles.popper}
      {...attributes.popper}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.map((item, index) => (
        <PopupItem key={index} onClick={item.action}>
          {item.label}
        </PopupItem>
      ))}
    </PopupContainer>
  );
};

export default PopupMenu;
