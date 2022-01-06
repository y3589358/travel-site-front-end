import {useRecoilState} from 'recoil';
import './Header.scss';
import logo from './logo.png';
import layoutState from '../../recoil/layoutState';
import userState from '../../recoil/userState';
import NavMenu from '../../components/nav/NavMenu';
import Container from './Container';
import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

const navMenuVisiblePaths = [
  '^/$', 
  '^/search', 
  '^/location', 
  '^/products', 
  '^/orders/cart',
];

const locationNavMenuVisible = (path: string): boolean => {
  for (const p of navMenuVisiblePaths) {
    if (path.match(p)) {
      return true;
    }
  }
  return false;
};

export default () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [_layoutState, setLayoutState] = useRecoilState(layoutState);
  const [_userState, setUserState] = useRecoilState(userState);

  const {
    headerNavItemsLeft,
    headerNavItemsRight,
    headerNavItemsRightLoggedOut,
    navMenuItems,
  } = _layoutState;

  const {
    userId,
  } = _userState;

  const isLoggedOut = () => {
    return location.pathname === '/login';
  };

  return <div className="layout-header">
    <div className="header-top">
      <div className="logo-wrapper" onClick={() => navigate('/')}>
        <img className="logo" src={logo} alt=""/>
        <div className="separator-line"/>
      </div>
      <div className="navbar">
        <div className="left">
          <NavMenu navItems={headerNavItemsLeft}/>
        </div>
        <div className="right">
          {
            !isLoggedOut() ?
              <NavMenu navItems={headerNavItemsRight}/>
              :
              <NavMenu navItems={headerNavItemsRightLoggedOut}/>
          }
        </div>
      </div>
    </div>

    {locationNavMenuVisible(location.pathname) ?
      <div className="location-nav-menu-wrapper">
        <Container>
          <NavMenu navItems={navMenuItems}/>
        </Container>
      </div>
      : null}
  </div>;
};
