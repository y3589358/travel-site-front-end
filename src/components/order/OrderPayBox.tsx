import React from 'react';
import './OrderPayBox.scss';
import {Radio, RadioGroup, Stack} from '@chakra-ui/react';
import LockItem from '../../assets/icons/LockItem.svg';

const OrderPayBox: React.FC<OrderPayBoxProps> = (props) => {
  const {items, balance, onChange} = props;

  return <div className="order-pay-box">
    <div className="order-pay-box-notice">
      <span className="icon">
        <img src={LockItem}/>
      </span>
      <span className="title">
        所有支付信息以获得安全加密保护
      </span>
    </div>
    <RadioGroup onChange={onChange}>
      <Stack direction="column">
        <Radio value="balance">
          <span className="label">余额支付</span>
          <span className="info">剩余金额</span>
          <span className="balance">
            <span className="unit">¥</span>
            {balance.toLocaleString()}
          </span>
        </Radio>
        {items.map((d, i) => <Radio key={i} value={d.key}>
          <span className="label">{d.label}</span>
          <span className="image">{d.image}</span>
        </Radio>)}
      </Stack>
    </RadioGroup>
  </div>;
};

export default OrderPayBox;
