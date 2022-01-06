import React, {useEffect, useState} from 'react';
import './OrderPayNoticeBox.scss';
import ClockLargeIcon from '../../assets/icons/ClockLargeIcon.svg';
import moment from 'moment';

const OrderPayNoticeBox: React.FC<OrderPayNoticeBoxProps> = (props) => {
  const {timeLeft, onChange} = props;

  const [t, setT] = useState<number>(timeLeft);

  useEffect(() => {
    // decrement by 1 second
    const handle = setInterval(() => {
      setT(t => t - 1000);
      onChange?.(t);
    }, 1000);

    // cleanup
    return () => clearInterval(handle);
  }, []);

  const getTime = (t: number) => {
    const m = moment(t).utc();
    return m.format('HH:mm:ss');
  };

  return <div className="order-pay-notice-box">
    <div className="order-pay-notice-box-top">
      <img className="icon" src={ClockLargeIcon}/>
      <span className="text">订单提交成功</span>
    </div>
    <div className="order-pay-notice-box-bottom">
      为避免订单被取消，请在
      <span className="time">{getTime(t)}</span>
      内付款
    </div>
  </div>;
};

export default OrderPayNoticeBox;
