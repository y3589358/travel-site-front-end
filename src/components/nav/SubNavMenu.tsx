import React from 'react';
import './SubNavMenu.scss';
import {useNavigate} from 'react-router-dom';

const SubNavMenu: React.FC<SubNavMenuProps> = (props) => {
  const {subNavItems, dropdown} = props;

  const navigate = useNavigate();

  return <div
    className={[
      'sub-nav-menu',
    ].filter(c => !!c).join(' ')}
  >
    {subNavItems.map((subItem, i) => <div
      key={i}
      className={[
        'sub-nav-menu-item',
        subItem.className || '',
      ].filter(c => !!c).join(' ')}
      onClick={() => subItem.onClick?.()}
    >
      <div
        className={[
          'sub-nav-menu-item-label',
        ].filter(c => !!c).join(' ')}
      >
        {dropdown ?
          <div className="label-wrapper">
            {subItem.name}
          </div>
          : subItem.name}
      </div>
      <div className="sub-nav-menu-item-content">
        {subItem.children?.map((leafItem, j) => <div
          key={j}
          className='leaf-item'
          onClick={() => navigate('/location/hk')}
        >
          {leafItem.name}
        </div>)}
      </div>
    </div>)}
  </div>;
};

export default SubNavMenu;
