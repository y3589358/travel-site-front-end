import React from 'react';
import './ProductThumbnail.scss';
import exampleImage from './exampleImage.png';
import TicketIcon from '../../assets/icons/TicketIcon.svg';
import {useNavigate} from 'react-router-dom';

const ProductThumbnail: React.FC<ProductThumbnailProps> = (props) => {
  const navigate = useNavigate();

  const {
    title,
    category,
    price,
    style,
  } = props;

  const onClick = () => {
    navigate('/products/1');
  };

  return <div className="product-thumbnail" style={style} onClick={onClick}>
    <img className="product-thumbnail-image" src={exampleImage} alt=""/>
    <div className="product-thumbnail-content">
      <div className="product-thumbnail-content-top">
        <div className="product-thumbnail-category">
          <img className="product-thumbnail-category-icon" src={TicketIcon} alt=""/>
          <span className="product-thumbnail-category-text">{category}</span>
        </div>
        <div className="product-thumbnail-title">
          {title}
        </div>
      </div>
      <div className="product-thumbnail-content-bottom">
        <div className="product-thumbnail-tip-wrapper">
          <div className="product-thumbnail-tip">
            View Details
          </div>
        </div>
        <div className="product-thumbnail-price">
          <span className="price-unit">$</span>
          <span className="price-value">
            {price.toLocaleString()}
          </span>
          {/* <span className="price-suffix"></span> */}
        </div>
      </div>
    </div>
  </div>;
};

export default ProductThumbnail;
