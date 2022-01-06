interface NavItem {
  name: string;
  path?: string;
  children?: NavItem[];
  onClick?: Function;
  dropdown?: boolean;
  className?: string;
}
