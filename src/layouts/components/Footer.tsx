import React from 'react';
import logo from './logo.png';

import wechat from './wechat.png';
import './Footer.scss';
import Container from './Container';
import {useLocation} from 'react-router-dom';

export default () => {
  const location = useLocation();

  const isLoggedOut = () => {
    return location.pathname === '/login';
  };

  return <div className="layout-footer">
    {
      isLoggedOut() ? 
      null
      :
      <div className="footer-top">
        <div className="logo-wrapper">
          <img className="logo" src={logo} alt=""/>
        </div>
        <div className="about">
          <div className="info-container">
            <div className="title">About Utrip</div>
            <div className="item">Know Utrip</div>
            <div className="item">Utrip Purchase</div>
          </div>
        </div>
        <div className="contact">
          <div className="info-container">
            <div className="title">Contact us</div>
            <div className="item">3445 S Rhodes Ave, Chicago, Illinois, 60616</div>
            <div className="item">+1 3122167217</div>
            <div className="item">y3589358@hotmail.com</div>
          </div>
        </div>
        <div className="wechat">
          <div className="info-container">
            <div className="title">QRcode</div>
            <img className="wechat-image" src={wechat} alt=""/>
          </div>
        </div>
      </div>
    }
    

    <div className="footer-bottom">
      <div>
        <div className="links">
        Privacy policy |  company policy | terms and conditions
        </div>
        <div className="copyright">
          © 2022 utrip
        </div>
      </div>
    </div>
  </div>;
};
