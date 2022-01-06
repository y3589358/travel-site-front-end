import React from 'react';
import './NavBack.scss';

const NavBack: React.FC<NavBackProps> = (props) => {
  const {label, onClick} = props;

  return <div className="nav-back" onClick={onClick}>
    {label}
  </div>;
};

export default NavBack;
