import React, {useEffect, useState} from 'react';
import './OrderDetail.scss';
import Container from '../../layouts/components/Container';
import NavBack from '../../components/nav/NavBack';
import OrderTitle from '../../components/order/OrderTitle';
import OrderPayInfoBox from '../../components/order/OrderPayInfoBox';
import OrderTravelInfoBox from '../../components/order/OrderTravelInfoBox';
import OrderContactInfoBox from '../../components/order/OrderContactInfoBox';
import {Button, Select} from '@chakra-ui/react';
import QuestionMarkCircleIcon from '../../assets/icons/QuestionMarkCircleIcon.svg';
import {useNavigate} from 'react-router-dom';

export default () => {
  const navigate = useNavigate();

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
  const [orderStatus, setOrderStatus] = useState('确认中');

  const [orderTime, setOrderTime] = useState('2021/11/10 18:01:21');
  const [paidMethod, setPaidMethod] = useState('微信');
  const [paidTime, setPaidTime] = useState('2021/11/10 18:01:21');
  const [totalAmount, setTotalAmount] = useState(1294);
  const [status, setStatus] = useState('已付款');

  useEffect(() => {
    if (window.location.search.includes('unpaid=')) {
      setStatus('待付款');
    }
  }, []);

  const onCancel = () => {
    window.confirm('确认取消?');
  };

  return <div className="order-detail">
    <Container>
      <div className="order-detail-top">
        <NavBack label="> 返回上一页"/>
      </div>

      <div className="order-detail-title">
        订单详情
      </div>

      <div className="order-detail-container">
        <div className="order-detail-content">
          <OrderTitle title="订单信息"/>

          <OrderPayInfoBox
            orderTime={orderTime}
            paidMethod={paidMethod}
            paidTime={paidTime}
            totalAmount={totalAmount}
            status={status}
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

          <OrderTitle title="取消政策"/>
          <div className="order-detail-cancel">
            <div className="cancel-policy">
              <span className="icon">
                <img src={QuestionMarkCircleIcon}/>
              </span>
              <span className="label">
                兑换凭证前可免费取消
              </span>
            </div>
            <Button className="btn plain" onClick={onCancel}>取消订单</Button>
          </div>
        </div>

        <div className="order-detail-sidebar">
          <div className="order-info-box">
            <div className="order-info-box-top">
              <span className="label">订单号</span>
              <span className="order-no">{orderNo}</span>
            </div>
            <div className="order-info-box-content">
              <div className="row">
                <div className="label">凭证方式</div>
                <div className="value">电子凭证</div>
              </div>
              <div className="row">
                <div className="label">确认类型</div>
                <div className="value">一日内确认并发送凭证</div>
              </div>
            </div>
            <div className="order-info-box-bottom">
              {status === '已付款' ?
                <Button className="btn primary" style={{marginLeft: 0}}>查看凭证</Button> : null}
              {status === '已付款' ?
                <Button className="btn warning" style={{marginLeft: 0}}>导出行程单</Button> : null}
              {status === '待付款' ?
                <Button
                  className="btn warning"
                  style={{marginLeft: 0, flexGrow: 1}}
                  onClick={() => navigate('/orders/pay')}
                >
                  立即支付
                </Button> : null}
            </div>
          </div>
        </div>
      </div>

    </Container>
  </div>;
};

