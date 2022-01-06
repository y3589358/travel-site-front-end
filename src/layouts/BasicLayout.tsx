import React from 'react';
import {Outlet} from 'react-router-dom';
import './BasicLayout.scss';
import Header from './components/Header';
import Footer from './components/Footer';

export const BasicLayout: React.FC = () => {
  return <div className="basic-layout">
    <Header/>

    <div className="content-wrapper">
      <Outlet/>
    </div>

    <Footer/>
  </div>;
};
