import React, {useState} from 'react';
import './OrderSubmit.scss';
import NavBack from '../../components/nav/NavBack';
import Container from '../../layouts/components/Container';
import NavStepList from '../../components/nav/NavStepList';
import {useRecoilState} from 'recoil';
import orderState from '../../recoil/orderState';
import OrderTitle from '../../components/order/OrderTitle';
import OrderTravelInfoBox from '../../components/order/OrderTravelInfoBox';
import OrderContactInfoBox from '../../components/order/OrderContactInfoBox';
import {Button} from '@chakra-ui/react';
import Select, { Option } from 'rc-select';
import '../../components/select/select.scss'
import OrderProductItem from '../../components/order/OrderProductItem';
import OrderPayActionBox from '../../components/order/OrderPayActionBox';
import {useNavigate} from 'react-router-dom';

export default () => {
  const navigate = useNavigate();


  const [_orderState, _setOrderState] = useRecoilState(orderState);
  const {
    steps,
  } = _orderState;

  const activeKey = 'info';

  const productItems: OrderProductItemProps[] = [
    {
      title: '香港迪士尼乐园门票',
      subtitle: '普通日子1日门票',
      quantity: '成人 x 1 / 儿童 ( 3-11岁) x 2',
      date: '2021年12月18日',
      price: 1304,
    },
    {
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
  const onFrequentTravellerChange = (value: string) => {
    if (value === '1') {
      setTraveller({
        givenName: 'DaMing',
        lastName: 'Wang',
        email: 'adawang@qq.com',
        phone: '12345678901',
        nationality: '中国',
      });
    } else if (value === '2') {
      setTraveller({
        givenName: 'SiaoMing',
        lastName: 'Wang',
        email: 'adawang@qq.com',
        phone: '12345678901',
        nationality: '中国',
      });
    } else if (value === '3') {
      setTraveller({
        givenName: 'JhongMing',
        lastName: 'Wang',
        email: 'adawang@qq.com',
        phone: '12345678901',
        nationality: '中国',
      });
    }
  };

  const onClickPay = () => {
    if (!traveller.givenName ||
      !traveller.lastName ||
      !traveller.email ||
      !traveller.phone ||
      !traveller.nationality) {
      alert('信息不全1');
      return;
    }
    if (!contact.givenName ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone) {
      alert('信息不全1');
      return;
    }

    navigate('/orders/pay');
  };

  const onTravellerChange = (contact: Contact) => {
    setTraveller(contact);
  };

  const onContactChange = (contact: Contact) => {
    setContact(contact);
  };

  return <div className="order-submit">
    <Container>
      <div className="order-submit-top">
        <NavBack label="> 返回购物车"/>
        <div className="order-submit-nav-step-list-wrapper">
          <NavStepList activeKey={activeKey} steps={steps}/>
        </div>
      </div>

      <div className="order-submit-title">
        填写信息
      </div>

      <div className="order-submit-container">
        <div className="order-submit-content">
          <OrderTitle title="出行信息"/>
          <OrderTravelInfoBox
            contact={traveller}
            onChange={onTravellerChange}
            onFrequentTravellerChange={onFrequentTravellerChange}
          />

          <OrderTitle title="联系信息"/>
          <OrderContactInfoBox
            contact={contact}
            onChange={onContactChange}
          />

          <OrderTitle title="优惠券"/>
          <div className="order-submit-coupon">
            <span className="label">选择</span>
            <Select defaultValue="使用优惠券" placeholder="使用优惠券">
              <option value="折抵10元">折抵10元</option>
              <option value="折抵20元">折抵20元</option>
              <option value="折抵30元">折抵30元</option>
              <option value="折抵40元">折抵40元</option>
            </Select>
          </div>
        </div>

        <div className="order-submit-sidebar">
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
  </div>;
};

