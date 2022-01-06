import React, {useState} from 'react';
import './OrderPaid.scss';
import OrderPaySuccessBox from '../../components/order/OrderPaySuccessBox';
import Container from '../../layouts/components/Container';
import OrderTitle from '../../components/order/OrderTitle';
import OrderPayActionBox from '../../components/order/OrderPayActionBox';
import OrderTravelInfoBox from '../../components/order/OrderTravelInfoBox';
import OrderContactInfoBox from '../../components/order/OrderContactInfoBox';
import {useNavigate} from 'react-router-dom';

export default () => {
  const navigate = useNavigate();

  const [amount, setAmount] = useState(1304);
  const [discount, setDiscount] = useState(10);
  const [payAmount, setPayAmount] = useState(1294);

  const [paidMethod, setPaidMethod] = useState('微信');
  const [paidTime, setPaidTime] = useState('2021/11/10 18:01:21');
  const [paidStatus, setPaidStatus] = useState('已付款');

  const [traveller, setTraveller] = useState<Contact>({
    givenName: 'DaMing',
    lastName: 'Wang',
    email: 'adawang@qq.com',
    phone: '12345678901',
    nationality: '中国',
  });

  const [contact, setContact] = useState<Contact>({
    givenName: 'DaTian',
    lastName: 'Lin',
    email: 'lin@gmail.com',
    phone: '12345678901',
  });

  const [orderNo, setOrderNo] = useState('14525465729');
  const [orderStatus, setOrderStatus] = useState('待确认');

  return <div className="order-paid">
    <div className="order-paid-top">
      <OrderPaySuccessBox/>
    </div>

    <Container>
      <div className="order-paid-container">
        <div className="order-paid-content">
          <OrderTitle title="订单信息"/>
          <OrderTravelInfoBox
            contact={traveller}
            readonly
            orderNo={orderNo}
            orderStatus={orderStatus}
          />
          <OrderTravelInfoBox
            contact={traveller}
            readonly
            orderNo={orderNo}
            orderStatus={orderStatus}
          />
          <OrderContactInfoBox
            contact={contact}
            readonly
          />
        </div>

        <div className="order-paid-sidebar">
          <OrderPayActionBox
            amount={amount}
            discount={discount}
            payAmount={payAmount}
            paid
            paidMethod={paidMethod}
            paidTime={paidTime}
            paidStatus={paidStatus}
          />
        </div>
      </div>
    </Container>
  </div>;
};
