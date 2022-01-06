import React from 'react';
import './OrderTitle.scss';

const OrderTitle: React.FC<OrderTitleProps> = (props) => {
  const {title} = props;
  return <div className="order-title">
    {title}
  </div>;
};

export default OrderTitle;
