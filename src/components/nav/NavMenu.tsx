import React from 'react';
import './NavMenu.scss';
import NavMenuItem from './NavMenuItem';

const NavMenu: React.FC<NavMenuProps> = (props) => {
  const {navItems} = props;
  return <div className="nav-menu">
    {navItems.map((d, i) => <NavMenuItem key={i} item={d}/>)}
  </div>;
};

export default NavMenu;
