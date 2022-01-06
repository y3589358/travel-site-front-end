import React, {useState} from 'react';
import './OrderPay.scss';
import NavBack from '../../components/nav/NavBack';
import NavStepList from '../../components/nav/NavStepList';
import {useRecoilState} from 'recoil';
import orderState from '../../recoil/orderState';
import Container from '../../layouts/components/Container';
import OrderTitle from '../../components/order/OrderTitle';
import OrderPayBox from '../../components/order/OrderPayBox';
import wepay from '../../assets/images/pay/wepay.png';
import alipay from '../../assets/images/pay/alipay.png';
import creditCard from '../../assets/images/pay/creditCard.png';
import OrderContactInfoBox from '../../components/order/OrderContactInfoBox';
import OrderTravelInfoBox from '../../components/order/OrderTravelInfoBox';
import OrderProductItem from '../../components/order/OrderProductItem';
import OrderPayActionBox from '../../components/order/OrderPayActionBox';
import OrderPayNoticeBox from '../../components/order/OrderPayNoticeBox';
import {useNavigate} from 'react-router-dom';
import WarnIcon from '../../assets/icons/WarnIcon.svg';
import {Button, Modal, ModalContent, ModalOverlay} from '@chakra-ui/react';

export default () => {
  const navigate = useNavigate();

  const [_orderState, _setOrderState] = useRecoilState(orderState);
  const {
    steps,
  } = _orderState;

  const activeKey = 'pay';

  const productItems: OrderProductItemProps[] = [
    {
      orderNo: '14525465729',
      title: '香港迪士尼乐园门票',
      subtitle: '普通日子1日门票',
      quantity: '成人 x 1 / 儿童 ( 3-11岁) x 2',
      date: '2021年12月18日',
      price: 1304,
    },
    {
      orderNo: '14525465729',
      title: '香港迪士尼乐园门票',
      subtitle: '普通日子1日门票',
      quantity: '成人 x 1 / 儿童 ( 3-11岁) x 2',
      date: '2021年12月18日',
      price: 1304,
    }
  ];

  const [amount, setAmount] = useState(1304);
  const [discount, setDiscount] = useState(10);
  const [payAmount, setPayAmount] = useState(1294);

  const payItems: OrderPayItem[] = [
    {
      key: 'wepay',
      label: '微信支付',
      image: <img src={wepay}/>
    },
    {
      key: 'alipay',
      label: '支付宝',
      image: <img src={alipay}/>
    },
    {
      key: 'creditCard',
      label: '境外信用卡',
      image: <img src={creditCard}/>
    },
  ];

  const [balance, setBalance] = useState(1294);

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

  const [payMethod, setPayMethod] = useState('');
  const onPayChange = (key: string) => {
    setPayMethod(key);
  };

  const onClickPay = () => {
    if (!payMethod) {
      setOpenPayWayModal(!isOpenPayWay);
      // alert('请选择支付方式');
      return;
    }

    if (payMethod === 'balance') {
      setIsModalOpen(true);
      return;
    }

    setIsModalOpen(true);
    setTimeout(() => {
      navigate('/orders/paid');
    }, 3000);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenPayWay, setOpenPayWayModal] = useState(false);

  const getModalTitle = () => {
    if (timeLeft < 0) {
      return '时间逾期';
    }
    if (payMethod === 'balance') {
      if (balance < 5) {
        return '余额不足';
      }
      return '余额支付';
    } else {
      return '跳转页面中';
    }
  };
  const getModalContent = () => {
    if (timeLeft < 0) {
      return <div className="overdue">
        <div>已超过支付时间，</div>
        <div>请重新再预定下单</div>
      </div>;
    }
    if (payMethod === 'balance') {
      return <div className="balance-content">
        <div className="label">目前余额为</div>
        <div className="value">
          <span className="unit">¥</span>
          {balance.toLocaleString()}
        </div>
      </div>;
    } else {
      return <div className="redirect-content">
        <div>页面正前往跳转支付页面中，</div>
        <div>请勿进行任何操作，避免出现错误</div>
      </div>;
    }
  };
  const getModalActions = () => {
    if (timeLeft < 0) {
      return <Button className="btn warning" onClick={() => setIsModalOpen(false)}>返回页面</Button>;
    }
    if (payMethod === 'balance') {
      return <Button className="btn warning" onClick={() => navigate('/orders/paid')}>前往支付</Button>;
    }
  };

  const [timeLeft, setTimeLeft] = useState(1800e3 - 29e3);

  return <div className="order-pay">
    <Container>
      <div className="order-pay-top">
        <NavBack label="> 返回购物车"/>
        <div className="order-pay-nav-step-list-wrapper">
          <NavStepList activeKey={activeKey} steps={steps}/>
        </div>
      </div>

      <div className="order-pay-title">
        前往支付
      </div>

      <div className="order-pay-container">
        <div className="order-pay-content">
          <OrderTitle title="出行信息"/>
          <OrderPayBox items={payItems} balance={balance} onChange={onPayChange}/>

          <OrderTitle title="联系信息"/>
          <OrderTravelInfoBox contact={traveller} readonly/>
          <OrderContactInfoBox contact={contact} readonly/>
        </div>

        <div className="order-pay-sidebar">
          <OrderPayNoticeBox timeLeft={timeLeft} onChange={(t) => setTimeLeft(t)}/>

          {productItems.map((item, i) => <OrderProductItem key={i} {...item}/>)}

          <OrderPayActionBox
            amount={amount}
            discount={discount}
            payAmount={payAmount}
            onClickPay={onClickPay}
          />
        </div>
      </div>
    </Container>

    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <ModalOverlay/>
      <ModalContent>
        <div className="modal-content">
            <div className="modal-title">
              <div className="icon">
                <img src={WarnIcon}/>
              </div>
              {getModalTitle()}
            </div>
            <div className="modal-content">
              {getModalContent()}
            </div>
            <div className="modal-actions">
              {getModalActions()}
            </div>
          </div>
      </ModalContent>
    </Modal>
    <Modal
      isOpen={isOpenPayWay}
      onClose={() => setOpenPayWayModal(false)}
    >
      <ModalOverlay/>
      <ModalContent>
      <div className="modal-content">
          <div className="modal-title">
            <div className="icon">
              <img src={WarnIcon}/>
            </div>
            请选择支付方式
          </div>
          <div className="modal-content">
            请选择任一方式，进行订单支付
          </div>
          <div className="modal-actions">
            <Button className="btn warning" onClick={() => setOpenPayWayModal(false)}>返回页面</Button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  </div>;
};

