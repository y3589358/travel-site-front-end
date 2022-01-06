import React from 'react';
import './Filter.scss';

const Filter: React.FC<FilterProps> = (props) => {
  const {title, className, onClear} = props;
  return <div className={['filter', className].filter(cls => !!cls).join(' ')}>
    <div className="filter-top">
      <div className="filter-title">{title}</div>
      <div className="filter-clean" onClick={() => onClear?.()}>清空</div>
    </div>
    <div className="filter-content">
      {props.children}
    </div>
  </div>;
};

export default Filter;
