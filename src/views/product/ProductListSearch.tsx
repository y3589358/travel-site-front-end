import React, {useState} from 'react';
import './ProductListSearch.scss';
import Container from '../../layouts/components/Container';
import TreeFilter from '../../components/filter/TreeFilter';
import ProductList from '../../components/product/ProductList';
import DateFilter from '../../components/filter/DateFilter';
import RangeFilter from '../../components/filter/RangeFilter';
import {useRecoilState} from 'recoil';
import filterState from '../../recoil/filterState';
import {Moment} from 'moment';
import Cart from '../../components/cart/Cart';

export default () => {
  const getIsNotFound = (): boolean => {
    return window.location.pathname.endsWith('/404');
  };

  const [keyword, setKeyword] = useState('香港');
  const [category, setCategory] = useState('景点门票&表演');
  const [productTotal, setProductTotal] = useState(getIsNotFound() ? 0 : 480);

  const products: Product[] = [
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 1418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 1418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 1418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 418,
    },
    {
      title: '香港迪士尼乐园',
      category: '景点门票 & 表演',
      price: 418,
    }
  ];

  const [_filterState, setFilterState] = useRecoilState<FilterState>(filterState);

  const {
    locationFilterItems,
    categoryFilterItems,
    languageFilterItems,
    dates,
  } = _filterState;

  const onLocationFilterItemsChange = (items: FilterItem[]) => {
    setFilterState({
      ..._filterState,
      locationFilterItems: items,
    });
  };

  const onCategoryFilterItems = (items: FilterItem[]) => {
    setFilterState({
      ..._filterState,
      categoryFilterItems: items,
    });
  };

  const onLanguageFilterItems = (items: FilterItem[]) => {
    setFilterState({
      ..._filterState,
      languageFilterItems: items,
    });
  };

  const onDatesChange = (dates: [Moment | null, Moment | null]) => {
    setFilterState({
      ..._filterState,
      dates,
    });
  };

  return <Container>
    <div className="product-list-search">
      <div className="filter-list">
        <TreeFilter title="目的地" items={locationFilterItems} onChange={onLocationFilterItemsChange}/>
        <TreeFilter title="产品分类" items={categoryFilterItems} onChange={onCategoryFilterItems}/>
        <DateFilter title="可预定日期" dates={dates} onChange={onDatesChange}/>
        <RangeFilter title="产品价格"/>
        <TreeFilter title="服务语言" items={languageFilterItems} onChange={onLanguageFilterItems}/>
      </div>
      <ProductList
        title={<div className="product-list-title">
          <span>搜索</span>
          <span className="product-list-title-highlight">{keyword}+{category}</span>
          <span style={{marginLeft: '20px'}}>找到</span>
          <span className="product-list-title-highlight">{productTotal}</span>
          <span>个产品</span>
        </div>}
        products={getIsNotFound() ? [] : products}
        pagination
        sort="hot"
      />
    </div>

    <Cart/>
  </Container>;
};

