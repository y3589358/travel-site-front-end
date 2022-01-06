import React, {useState} from 'react';
import './OrderListFilter.scss';
import {Button, Input, Radio, RadioGroup, Stack} from '@chakra-ui/react';
import Select, { Option } from 'rc-select';
import '../../components/select/select.scss'
import {Moment} from 'moment';
import DateRangePicker from '../date/DateRangePicker';
import {ChevronDownIcon} from '@chakra-ui/icons';

const OrderListFilter: React.FC<OrderListFilterProps> = (props) => {
  const [dates, setDates] = useState<[Moment | null, Moment | null]>([null, null]);

  const renderValue = (dates: [Moment | null, Moment | null]): React.ReactNode => {
    return <div className="date-value">
      {dates?.[0]?.format('YYYY年M月D日')} - {dates?.[1]?.format('YYYY年M月D日')}
    </div>
  };

  return <div className="order-list-filter">
    <div className="order-list-filter-top">
      <Input className="search" placeholder="输入订单号、联系人、手机"/>
      <Select className="order-status" placeholder="全部订单状态">
        <option value="all">全部订单状态</option>
        <option value="paying">待付款</option>
        <option value="bookfail">预定失败</option>
        <option value="confirming">确认中</option>
        <option value="confirmed">已确认</option>
        <option value="cancled">已取消</option>
        <option value="failed">已失效</option>
        <option value="done">已出行</option>
      </Select>
      <Select className="pay-method" placeholder="全部支付方式">
        <option value="all">全部支付方式</option>
        <option value="wepay">微信</option>
        <option value="alipay">支付宝</option>
        <option value="creditCard">信用卡</option>
      </Select>
    </div>
    <div className="order-list-filter-bottom">
      <div className="select-group">
        <RadioGroup>
          <Radio value="all">所有时间</Radio>
          <Radio value="submit">预定提交时间</Radio>
          <Radio value="booking">预定出行时间</Radio>
        </RadioGroup>
        <div className="time-select">
          <DateRangePicker
            dates={dates}
            placeholder="选择时间"
            onChange={(dates) => setDates(dates)}
            renderValue={renderValue}
          />
          {dates?.[0] ? null : <ChevronDownIcon w="24px" h="16px" className="down-icon"/>}
        </div>
      </div>
      <div className="btn-group">
        <Button className="btn plain">清空</Button>
        <Button className="btn primary">筛选</Button>
      </div>
    </div>
  </div>;
};

export default OrderListFilter;
