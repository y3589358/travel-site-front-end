import React, {useRef} from 'react';
import './DateFilter.scss';
import Filter from './Filter';
import 'moment';
import 'moment/locale/zh-cn';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import DateRangePicker from '../date/DateRangePicker';

const DateFilter: React.FC<DateFilterProps> = (props) => {
  const {title, onChange, dates} = props;

  const onClear = () => {
    onChange?.([null, null]);
  };

  const dateRangePickerRef = useRef<typeof DateRangePicker>(null);

  return <Filter title={title} className="date-filter" onClear={onClear}>
    <DateRangePicker
      dates={dates}
      onChange={onChange}
      extra={<div className="extra-date-info">
        <div>展示产品當地時間</div>
        <div/>
      </div>}
    />
  </Filter>;
};

export default DateFilter;
