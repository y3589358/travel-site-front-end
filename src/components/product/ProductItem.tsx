import React from 'react';
import './ProductItem.scss';

const ProductItem: React.FC<ProductItemProps> = (props) => {
  const {name, price, count, onChange} = props;
  return <div className="product-item">
    <div className="name">{name}</div>
    <div className="price">
      <span className="unit">¥</span>
      {price?.toLocaleString()}
    </div>
    <div className="count-wrapper">
      <span className="btn minus" onClick={() => onChange?.((count || 1) - 1)}>-</span>
      <span className="value">{count}</span>
      <span className="btn plus" onClick={() => onChange?.((count || 0) + 1)}>+</span>
    </div>
  </div>;
};

export default ProductItem;
