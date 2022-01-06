import React, {useRef, useState} from 'react';
import './NavMenuItem.scss';
import {Popover, PopoverContent, PopoverTrigger, useOutsideClick} from '@chakra-ui/react';
import SubNavMenu from './SubNavMenu';

const NavMenuItem: React.FC<NavMenuItemProps> = (props) => {
  const {item} = props;

  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  const onClick = () => {
    if (!item.children) {
      // TODO: implement
    } else {
      setIsOpen(true);
    }
  };

  useOutsideClick({
    ref,
    handler: () => setIsOpen(false),
  });

  return <Popover
    isOpen={isOpen}
  >
    <PopoverTrigger>
      <div ref={ref} 
        className={["nav-menu-item",isOpen ? 'active' : ''].filter(c => !!c).join(' ')}
        onClick={onClick}>
        {item.name}
      </div>
    </PopoverTrigger>
    <PopoverContent
      className={[
        'nav-menu-item-popover-content',
        item.dropdown ? 'dropdown' : '',
      ].filter(c => !!c).join(' ')}
    >
      {item.children ? <SubNavMenu subNavItems={item.children} dropdown={item.dropdown}/> : null}
    </PopoverContent>
  </Popover>;
};

export default NavMenuItem;
