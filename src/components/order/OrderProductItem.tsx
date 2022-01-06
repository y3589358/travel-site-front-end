import React from 'react';
import './OrderProductItem.scss';
import QuestionMarkCircleIcon from '../../assets/icons/QuestionMarkCircleIcon.svg';

const OrderProductItem: React.FC<OrderProductItemProps> = (props) => {
  const {
    orderNo,
    title,
    subtitle,
    quantity,
    date,
    price,
  } = props;
  return <div className="order-product-item">
    {!orderNo ? null :
      <div className="order-product-item-no">
        <div className="label">订单号</div>
        <div className="value">{orderNo}</div>
      </div>}
    <div className="order-product-item-title">
      {title}
    </div>
    <div className="order-product-item-subtitle">
      {subtitle}
    </div>
    <div className="order-product-item-notice-list">
      <div className="order-product-item-notice-item">
        <div className="label">数量</div>
        <div className="value">{quantity}</div>
      </div>
      <div className="order-product-item-notice-item">
        <div className="label">出游日期</div>
        <div className="value">{date}</div>
      </div>
    </div>
    <div className="order-product-item-cancel-policy">
      <span className="icon">
        <img src={QuestionMarkCircleIcon}/>
      </span>
      <span className="text">不可取消政策</span>
    </div>
    <div className="order-product-item-price">
      <span className="unit">
        ¥
      </span>
      <span className="value">
        {price.toLocaleString()}
      </span>
    </div>
  </div>;
};

export default OrderProductItem;
