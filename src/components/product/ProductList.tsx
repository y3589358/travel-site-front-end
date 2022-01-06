import React, {useRef, useState, Component} from 'react';
import Select, { Option } from 'rc-select';

import './ProductList.scss';
import '../select/select.scss'
import ProductThumbnail from './ProductThumbnail';
import Pagination from '../nav/Pagination';
import {Button} from '@chakra-ui/react';
import selectState from '../../recoil/selectState';
import {useRecoilState} from 'recoil';

import ArrowRightCircleIcon from '../../assets/icons/ArrowRightCircleIcon.png';
import ArrowLeftCircleIcon from '../../assets/icons/ArrowLeftCircleIcon.png';
import {useNavigate} from 'react-router-dom';

const ProductList: React.FC<ProductListProps> = (props) => {
  const navigate = useNavigate();

  const {title, products, pagination, className, scrollable, sort, noSort} = props;

  const [_selectState, setSelectState] = useRecoilState<SelectState>(selectState);
  const {
    colourOptions
  } = _selectState;

  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(480);
  const onPaginationChange = (page: number, pageSize: number) => {
    setCurrent(page);
  };

  const [itemWidth, setItemWidth] = useState(270);
  const [index, setIndex] = useState(0);


  const productListRef = useRef<HTMLDivElement>(null);

  const getStyle = () => {
    return {
      transform: `translateX(${-index * itemWidth}px)`
    };
  };

  const incidencesStateResource = [
    { value: 1, label: '热门推荐' },
    { value: 2, label: '金额高至低' },
    { value: 3, label: '金额低至高' },
  ];
  
  const sorterByLabel = (optionA:any, optionB:any) => optionA.label.localeCompare(optionB.label);

  const getVisibleProductCount = (): number => {
    if (productListRef.current?.clientWidth === undefined) return 0;
    return Math.floor(productListRef.current.clientWidth / itemWidth);
  };

  const getRemainingProductThumbnails = (): React.ReactNode[] => {
    const res = [];
    const n = 15 - products.length;
    for (let i = 0; i < n; i++) {
      res.push(<div className="product-thumbnail-placeholder"/>);
    }
    return res;
  };

  return <div className={[
    'product-list-wrapper',
    className,
    scrollable ? 'scrollable' : '',
  ].filter(c => !!c).join(' ')}
  >
    {title ?
      <div className="product-list-top">
        <div className="product-list-title">
          {title}
        </div>
        <div className="product-list-sort-wrapper" style={{display: noSort ? 'none' : ''}}>
          <span className="product-list-sort-title">排序方法: </span>
         <Select
            showSearch
            filterSort={sorterByLabel}
            optionFilterProp="label"
            defaultValue="热门推荐"
            options={incidencesStateResource}
         ></Select>
        </div>
      </div>
      : null}
    {products.length > 0 ? <div
        ref={productListRef}
        className={[
          'product-list',
        ].filter(c => !!c).join(' ')}
      >
        {products.map((product, i) =>
          <ProductThumbnail
            key={i}
            title={product.title}
            category={product.category}
            price={product.price}
            style={getStyle()}
          />)}
        {getRemainingProductThumbnails()}
      </div>
      :
      <div className="product-list-not-found">
        <div className="title">抱歉，我们没有找到相关的产品，請重新搜索</div>
        <div className="actions">
          <Button className="btn warning" onClick={() => navigate('/')}>返回页面</Button>
        </div>
      </div>}
    {scrollable && index > 0 ? <div className="prev" onClick={() => setIndex(index - 1)}>
      <img src={ArrowLeftCircleIcon}/>
    </div> : null}
    {scrollable && index <= products.length - 1 - getVisibleProductCount() ?
      <div className="next" onClick={() => setIndex(index + 1)}>
        <img src={ArrowRightCircleIcon}/>
      </div> : null}
    {pagination && products.length > 0 ?
      <div className="product-list-pagination">
        <Pagination total={total} current={current} onChange={onPaginationChange}/>
      </div>
      : null}
  </div>;
};

export default ProductList;
