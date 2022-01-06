import React from 'react';
import './OrderPayActionBox.scss';
import {Button} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';

const OrderPayActionBox: React.FC<OrderPayActionBox> = (props) => {
  const {
    amount,
    discount,
    payAmount,
    paid,
    paidMethod,
    paidTime,
    paidStatus,
    onClickPay,
  } = props;

  return <div className="order-pay-action-box">
    <div className="order-pay-action-box-payment-detail order-pay-action-box-top">
      <div className="title">支付明细</div>
      <div className="order-pay-action">
        <span className="label">支付方式</span>
        <span className="value">{paidMethod}</span>
      </div>
      <div className="order-pay-action">
        <span className="label">支付时间</span>
        <span className="value">{paidTime}</span>
      </div>
      <div className="order-pay-action">
        <span className="label">支付状态</span>
        <span className="value">{paidStatus}</span>
      </div>
    </div>
    <div className="order-pay-action-box-top">
      <div className="order-pay-action">
        <span className="label">结算金额</span>
        <span className="value">
          <span className="unit">¥</span>
          {amount.toLocaleString()}
        </span>
      </div>
      <div className="order-pay-action-discount">
        <span className="label">优惠金额</span>
        <span className="value">
          <span className="unit">¥</span>
          {discount.toLocaleString()}
        </span>
      </div>
    </div>
    <div className="order-pay-action-box-bottom">
      <div className="order-pay-action-pay-amount">
        <span className="label">支付金额</span>
        <span className="value">
          <span className="unit">¥</span>
          {payAmount.toLocaleString()}
        </span>
      </div>
      {paid ? null :
        <Button className="btn-pay btn warning" onClick={onClickPay}>前往支付</Button>}
    </div>
  </div>;
};

export default OrderPayActionBox;
