import React, {FormEvent, useEffect, useRef, useState} from 'react';
import './RangeFilter.scss';
import Filter from './Filter';
import {Input} from '@chakra-ui/react';

const RangeFilter: React.FC<RangeFilterProps> = (props) => {
  const {title, value, onChange} = props;
  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();

  const inputMinRef = useRef<HTMLInputElement>(null);
  const inputMaxRef = useRef<HTMLInputElement>(null);

  const onMinInput = (e: FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setMin(Number(value));
    onChange?.([Number(value), max]);
  };

  const onMaxInput = (e: FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setMax(Number(value));
    onChange?.([min, Number(value)]);
  };

  const onClear = () => {
    setMin(undefined);
    setMax(undefined);
    if (inputMinRef.current) inputMinRef.current.value = '';
    if (inputMaxRef.current) inputMaxRef.current.value = '';
  };

  useEffect(() => {
    setMin(value?.[0]);
    setMax(value?.[1]);
  }, []);

  return <Filter title={title} className="range-filter" onClear={onClear}>
    <div className="range-filter-content">
      <Input ref={inputMinRef} className="range-filter-input" type="number" placeholder="最低金额" onInput={onMinInput}/>
      <span className="range-filter-sep"/>
      <Input ref={inputMaxRef} className="range-filter-input" type="number" placeholder="最高金额" onInput={onMaxInput}/>
    </div>
  </Filter>;
};

export default RangeFilter;
