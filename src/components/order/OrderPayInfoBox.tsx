import React, {useEffect, useState} from 'react';
import './OrderPayInfoBox.scss';
import moment from 'moment';

const OrderPayInfoBox: React.FC<OrderPayInfoBoxProps> = (props) => {
  const {
    orderTime,
    paidMethod,
    paidTime,
    totalAmount,
    status,
  } = props;

  const [t, setT] = useState<number>(1800e3);

  const getTime = (t: number) => {
    const m = moment(t).utc();
    return m.format('HH:mm:ss');
  };

  useEffect(() => {
    if (status !== '待付款') return;

    // decrement by 1 second
    const handle = setInterval(() => {
      setT(t => t - 1000);
    }, 1000);

    // cleanup
    return () => clearInterval(handle);
  }, []);

  return <div className="order-pay-info-box">
    <div className="order-pay-info-box-title" style={{color: status === '待付款' ? '#FF6770' : ''}}>
      {status}
    </div>
    <div className="order-pay-info-box-top">
      {status === '待付款' ? <div className="row">
        <div className="label">下单时间</div>
        <div className="value">
          请于<span className="time">{getTime(t)}</span>内完成付款
        </div>
      </div> : null}
      {status === '已付款' ? <div className="row">
        <div className="label">下单时间</div>
        <div className="value">{orderTime}</div>
      </div> : null}
      {status === '已付款' ? <div className="row">
        <div className="label">支付方式</div>
        <div className="value">{paidMethod}</div>
      </div> : null}
      {status === '已付款' ? <div className="row">
        <div className="label">支付时间</div>
        <div className="value">{paidTime}</div>
      </div> : null}
    </div>
    <div className="order-pay-info-box-bottom">
      <span className="label">总金额</span>
      <span className="total-amount">
        <span className="unit">¥</span>
        <span className="value">{totalAmount.toLocaleString()}</span>
      </span>
    </div>
  </div>;
};

export default OrderPayInfoBox;
