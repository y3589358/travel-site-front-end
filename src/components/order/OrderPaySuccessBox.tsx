import React from 'react';
import './OrderPaySuccessBox.scss';
import CheckCircleIcon from '../../assets/icons/CheckCircleIcon.svg';
import {Button} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';

const OrderPaySuccessBox: React.FC<OrderPaySuccessBoxProps> = (props) => {
  const navigate = useNavigate();

  return <div className="order-pay-success-box">
    <div className="order-pay-success-box-top">
      <img className="icon" src={CheckCircleIcon}/>
      <span className="text">订单成功支付</span>
    </div>
    <div className="order-pay-success-box-bottom">
      <Button className="btn warning" onClick={() => navigate('/')}>继续购物</Button>
      <Button className="btn primary" onClick={() => navigate('/orders')}>查看订单列表</Button>
    </div>
  </div>;
};

export default OrderPaySuccessBox;
