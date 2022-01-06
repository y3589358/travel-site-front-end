import React, {useEffect, useState} from 'react';
import './DateRangePicker.scss';
import {Moment} from 'moment';
import {
  DateRangePicker as ReactDatesDateRangePicker,
  SingleDatePicker as ReactDatesSingleDatePicker,
  FocusedInputShape, ModifiersShape,
} from 'react-dates';
import {Button} from '@chakra-ui/react';
import CalendarIcon from '../../assets/icons/CalendarIcon.svg';
import CalendarWhiteIcon from '../../assets/icons/CalendarWhiteIcon.svg';
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';


const DateRangePicker: React.FC<DateRangePickerProps> = (props) => {
  const {
    dates,
    onChange,
    renderDayContents: _renderDayContents,
    isDayBlocked,
    singleDate,
    open,
    onOpenChange,
    extra,
    placeholder,
    renderValue,
  } = props;

  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);

  const onDatesChange = ({startDate, endDate}: { startDate: Moment | null; endDate: Moment | null }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const onDateChange = (date: Moment | null) => {
    console.debug(date);
    setStartDate(date);
  };

  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(null);
  const onFocusChange = (focusedInput: FocusedInputShape | null) => {
    setFocusedInput(focusedInput);
  };

  const [focused, setFocused] = useState<boolean>(false);
  const onFocusedChange = ({focused}: { focused: boolean }) => {
    setFocused(focused);
    onOpenChange?.(focused);
  };

  useEffect(() => {
    if (open !== undefined) {
      setFocused(open);
    }
  }, [open]);

  const onClear = () => {
    if (singleDate) {
      setStartDate(null);
      setEndDate(null);
      setFocused(false);
      onChange?.([null, null]);
    } else {
      setStartDate(null);
      setEndDate(null);
      setFocusedInput(null);
      onChange?.([null, null]);
    }
  };

  const onConfirm = () => {
    if (singleDate) {
      if (!startDate) return;
      onChange?.([startDate, null]);
      setFocused(false);
    } else {
      if (!startDate) return;
      onChange?.([startDate, endDate || startDate]);
      setFocusedInput(null);
    }
  };

  const renderDayContents = (day: Moment, modifiers: ModifiersShape): React.ReactNode => {
    return <div className="day-wrapper">
      {startDate && endDate ? <span className="selected-range-background"/> : null}
      <span className="selected-background"/>
      <span className="day-content">
        {_renderDayContents ? _renderDayContents(day) : day.format('D')}
      </span>
    </div>;
  };

  const renderCalendarInfo = (): React.ReactNode => {
    return <div className="date-range-picker-bottom">
      <div className="extra">
        {extra}
      </div>
      <div className="buttons">
        <Button className="btn plain" onClick={onClear}>清空</Button>
        <Button className="btn primary" onClick={onConfirm}>确认</Button>
      </div>
    </div>;
  };

  const renderDateTimeInput = (): React.ReactNode => {
    if (!dates?.[0]) {
      return <div
        className="date-time-input"
        onClick={() => singleDate ? setFocused(true) : setFocusedInput('startDate')}
      >
          <span className="date-time-input-icon">
            <img src={CalendarIcon}/>
          </span>
        <span>{placeholder || '查看可预定日期'}</span>
      </div>;
    }

    if (singleDate || dates?.[0] === dates?.[1]) {
      return <div
        className="date-time-input selected"
        onClick={() => singleDate ? setFocused(true) : setFocusedInput('startDate')}
      >
        <span className="date-time-input-icon">
          <img src={CalendarWhiteIcon}/>
        </span>
        <span>{dates?.[0]?.format('YYYY年M月D日')}</span>
      </div>;
    }

    if (renderValue) {
      return <div className="date-time-input-wrapper">
        <div
          className="date-time-input"
          onClick={() => setFocusedInput('startDate')}
        >
          {renderValue(dates)}
        </div>
      </div>;
    }

    return (
      <div className="date-time-input-wrapper">
        <div
          className="date-time-input selected start-date"
          onClick={() => setFocusedInput('startDate')}
        >
          <span className="date-time-input-icon">
            <img src={CalendarWhiteIcon}/>
          </span>
          <span>{dates?.[0]?.format('YYYY年M月D日')}</span>
        </div>
        <div
          className="date-time-input selected end-date"
          onClick={() => setFocusedInput('endDate')}
        >
          <span className="date-time-input-icon">
            <img src={CalendarWhiteIcon}/>
          </span>
          <span>{dates?.[1]?.format('YYYY年M月D日')}</span>
        </div>

        <div className="date-sep-line"/>
      </div>
    );
  };

  const renderNavPrev = (): React.ReactNode => {
    return <ChevronLeftIcon className="prev" w="24px" h="24px" color="#002C5E"/>;
  };

  const renderNavNext = (): React.ReactNode => {
    return <ChevronRightIcon className="next" w="24px" h="24px" color="#002C5E"/>;
  };

  const renderMonthText = (month: Moment): React.ReactNode | null | string => {
    return month.format('YYYY 年 M 月');
  };

  useEffect(() => {
    return () => {
      onChange?.([null, null]);
    };
  }, []);

  useEffect(() => {
    setStartDate(dates?.[0] || null);
    setEndDate(dates?.[1] || null);
  }, [dates]);

  return <div className="date-range-picker">
    {singleDate ?
      <ReactDatesSingleDatePicker
        id="single-date-picker"
        transitionDuration={0}
        date={startDate}
        onDateChange={onDateChange}
        focused={focused}
        onFocusChange={onFocusedChange}
        renderDayContents={renderDayContents}
        calendarInfoPosition="bottom"
        renderCalendarInfo={renderCalendarInfo}
        noBorder
        keepOpenOnDateSelect
        navPrev={renderNavPrev()}
        navNext={renderNavNext()}
        isDayBlocked={isDayBlocked}
        daySize={50}
        // renderMonthText={renderMonthText}
      />
      :
      <ReactDatesDateRangePicker
        transitionDuration={0}
        startDate={startDate} // momentPropTypes.momentObj or null,
        startDateId="start_date_id" // PropTypes.string.isRequired,
        endDate={endDate} // momentPropTypes.momentObj or null,
        endDateId="end_date_id" // PropTypes.string.isRequired,
        onDatesChange={onDatesChange} // PropTypes.func.isRequired,
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={onFocusChange} // PropTypes.func.isRequired,
        renderDayContents={renderDayContents}
        calendarInfoPosition="bottom"
        renderCalendarInfo={renderCalendarInfo}
        noBorder
        keepOpenOnDateSelect
        minimumNights={0}
        navPrev={renderNavPrev()}
        navNext={renderNavNext()}
        isDayBlocked={isDayBlocked}
        daySize={50}
        // renderMonthText={renderMonthText}
      />}
    {renderDateTimeInput()}
  </div>;
};

export default DateRangePicker;
