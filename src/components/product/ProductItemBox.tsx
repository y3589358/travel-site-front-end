import React from 'react';
import './ProductItemBox.scss';
import ProductItem from './ProductItem';

const ProductItemBox: React.FC<ProductItemBoxProps> = (props) => {
  const {
    maxItemCount,
    items,
    onChange,
    totalAmount,
  } = props;

  const onItemChange = (i: number) => (count: number) => {
    const _items = JSON.parse(JSON.stringify(items || []));
    _items[i].count = count;
    onChange?.(_items);
  };

  return <div className="product-item-box">
    <div className="product-item-box-top">
      <div className="label">数量</div>
      <div className="label">此套餐最多预定数量为
        <span className="max-item-count">{maxItemCount || 0}</span>
      </div>
    </div>
    <div className="product-item-box-content">
      {items?.map((item, i) => <ProductItem
        key={i} {...item}
        onChange={onItemChange(i)}
      />)}
    </div>
    <div className="product-item-box-bottom">
      <div className="summary">
        <div className="label">费用总计</div>
        <div className="total-amount">
          <span className="unit">¥</span>
          {totalAmount?.toLocaleString()}
        </div>
      </div>
    </div>
  </div>;
};

export default ProductItemBox;
