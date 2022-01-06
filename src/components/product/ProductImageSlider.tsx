import React, {Ref, useEffect, useRef, useState} from 'react';
import './ProductImageSlider.scss';
import LeftCircleIcon from '../../assets/icons/LeftCircleIcon.svg';
import RightCircleIcon from '../../assets/icons/RightCircleIcon.svg';

const ProductImageSlider: React.FC<ProductImageSliderProps> = (props) => {
  const {images} = props;

  const [currentSlide, setCurrentSlide] = useState(1);
  const [itemWidth, setItemWidth] = useState(1148);
  const [itemHeight, setItemHeight] = useState(511);

  const onClickNext = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const onClickPrevious = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const getDefaultTransform = () => {
    return (window.innerWidth - itemWidth) / 2;
  };

  const getStyle = () => {
    return {
      transform: `translateX(${-(currentSlide * itemWidth - getDefaultTransform())}px)`
    };
  };

  return <div className="product-image-slider">
    <div
      className="product-image-slider-list"
      style={getStyle()}
    >
      {images?.map((img, i) => <div key={i} className="product-image-slider-item">
        <div
          className="product-image-slider-image"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div className="product-image-slider-mask"/>
        </div>
      </div>)}
    </div>

    <div
      className={
        [
          'product-image-slider-arrow-left',
          currentSlide == 0 ? 'hidden' : undefined,
        ]
          .filter(c => !!c)
          .join(' ')
      }
      onClick={onClickPrevious}
    >
      <img src={LeftCircleIcon}/>
    </div>
    <div
      className={
        [
          'product-image-slider-arrow-right',
          currentSlide >= ((images?.length ?? 0) - 1) ? 'hidden' : undefined,
        ]
          .filter(c => !!c)
          .join(' ')
      }
      onClick={onClickNext}
    >
      <img src={RightCircleIcon}/>
    </div>
  </div>;
};

export default ProductImageSlider;
