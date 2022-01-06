import React, {useRef,useEffect} from 'react';
import './ProductBookingBox.scss';
import ClockIcon from '../../assets/icons/ClockIcon.svg';
import FlashIcon from '../../assets/icons/FlashIcon.svg';
import {Button} from '@chakra-ui/react';

const ProductBookingBox: React.FC<ProductBookingBoxProps> = (props) => {
  const {price,getTurnType} = props;

  return <div className="product-booking-box">
    <div className="product-booking-box-top">
      <div className="product-booking-box-top-left">
        只要
      </div>
      <div className="product-booking-box-top-right">
        <span className="price-unit">¥</span>
        <span className="price-value">{price}</span>
        <span className="price-suffix">起</span>
      </div>
    </div>
    <div className="product-booking-box-content">
      <div className="notice-item">
        <img className="icon" src={ClockIcon}/>
        <span className="text">
          现在预订，当日使用
        </span>
      </div>
      <div className="notice-item">
        <img className="icon" src={FlashIcon}/>
        <span className="text">
          立即确认并获得凭证，若售罄将取消
        </span>
      </div>
    </div>
    <div  className="product-booking-box-bottom">
      <Button className="btn location" onClick={() => getTurnType("location")}>查看地点</Button>
      <Button className="btn select" onClick={() => getTurnType("program")}>选择方案</Button>
    </div>
  </div>;
};

export default ProductBookingBox;
