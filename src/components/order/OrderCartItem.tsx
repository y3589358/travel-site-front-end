import React from 'react';
import './OrderCartItem.scss';
import exampleCartItemImage from './exampleCartItemImage.png';
import {Checkbox} from '@chakra-ui/react';

const OrderCartItem: React.FC<OrderCartItemProps> = (props) => {
  const {
    title,
    subItems,
    date,
    type,
    totalAmount,
    warning,
    toConfirm,
    invalid,
    selected,
    onSelect: _onSelect,
    onDelete,
    onSubItemsChange,
    onEdit,
  } = props;

  const onSelect = (ev: React.ChangeEvent<HTMLInputElement>) => {
    _onSelect?.(ev.target.checked);
  };

  const onSubItemChange = (i: number, count: number) => {
    const _subItems = JSON.parse(JSON.stringify(subItems)) as OrderCartSubItem[];
    _subItems[i].count = count;
    onSubItemsChange?.(_subItems);
  };

  return <div className={[
    'order-cart-item',
    toConfirm ? 'to-confirm' : '',
    invalid ? 'invalid' : '',
  ].filter(c => !!c).join(' ')}>
    <div className="order-cart-item-checkbox">
      {toConfirm || invalid ? null : <Checkbox isChecked={selected} onChange={onSelect}/>}
    </div>
    <div className="order-cart-item-image">
      <img src={exampleCartItemImage}/>
    </div>
    <div className="order-cart-item-content">
      <div className="order-cart-item-content-top">
        <div className="order-cart-item-content-title">
          {title}
        </div>
        <div className="order-cart-item-content-actions">
          {!invalid ? <span className="label btn" onClick={() => onEdit?.()}>修改</span> : null}
          <span className="label btn" onClick={onDelete}>删除</span>
        </div>
      </div>

      <div className="order-cart-item-content-bottom">
        <div className="order-cart-item-content-notice-list">
          <div className="order-cart-item-content-notice-item">
            <span className="label">出游日期:</span>
            <span className="value">{date}</span>
          </div>
          <div className="order-cart-item-content-notice-item">
            <span className="label">方案类型:</span>
            <span className="value">{type}</span>
          </div>
        </div>
        <div className="order-cart-item-content-sub-item-list">
          {subItems?.map((subItem, i) => <div key={i} className="order-cart-item-content-sub-item">
            <div className="order-cart-item-content-sub-item-name">
              {subItem.name}
            </div>
            <div className="order-cart-item-content-sub-item-count">
              <span className="btn minus" onClick={() => onSubItemChange(i, (subItem.count || 1) - 1)}>-</span>
              <span className="value">{subItem.count}</span>
              <span className="btn plus" onClick={() => onSubItemChange(i, subItem.count + 1)}>+</span>
            </div>
            <div className="order-cart-item-content-sub-item-price">
              <span className="unit">¥</span>
              <span className="value">{subItem.price}</span>
            </div>
          </div>)}
          {warning ? <div className="order-cart-item-content-warning">
            {warning}
          </div> : null}
        </div>
      </div>

      <div className="order-cart-item-content-footer">
        <div className="order-cart-item-content-total-amount">
          <span className="unit">¥</span>
          <span className="value">{totalAmount}</span>
        </div>
      </div>
    </div>
  </div>;
};

export default OrderCartItem;
