import React from 'react';
import './Container.scss';

const Container: React.FC<ContainerProps> = (props) => {
  return <div className="layout-container">
    <div className="spacing" style={{flexBasis: props.leftSpacingWidth}}/>
    <div className="content">
      {props.children}
    </div>
    <div className="spacing" style={{flexBasis: props.rightSpacingWidth}}/>
  </div>;
};

export default Container;
