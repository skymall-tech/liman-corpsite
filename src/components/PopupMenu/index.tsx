import React from 'react';
import { usePopper } from 'react-popper';
import { PopupContainer, PopupItem } from './style';

const PopupMenu: React.FC<{
  items: string[];
  referenceElement: HTMLElement | null;
}> = ({ items, referenceElement }) => {
  const [popperElement, setPopperElement] = React.useState<HTMLElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 15],
        },
      },
    ],
  });

  return (
    <PopupContainer
      isLarge={false}
      ref={setPopperElement}
      style={styles.popper}
      {...attributes.popper}
    >
      {items.map((item, index) => (
        <PopupItem key={index}>{item}</PopupItem>
      ))}
    </PopupContainer>
  );
};

export default PopupMenu;
