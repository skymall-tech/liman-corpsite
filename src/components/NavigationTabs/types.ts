interface MenuItem {
  path: string;
  label: string;
  activeFn: () => boolean;
  onClick: () => void;
}

export interface NavItem extends MenuItem {
  subMenu?: NavItem[];
}
