import React, {useState,useRef} from 'react';
import './ProductListLocation.scss';
import banner from './exampleBanner.png';
import FeatureTag from '../../components/tag/FeatureTag';
import Container from '../../layouts/components/Container';
import ProductList from '../../components/product/ProductList';
import TreeFilter from '../../components/filter/TreeFilter';
import DateFilter from '../../components/filter/DateFilter';
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom';
import RangeFilter from '../../components/filter/RangeFilter';

import {useRecoilState} from 'recoil';
import filterState from '../../recoil/filterState';
import TicketBlueIcon from '../../assets/icons/TicketBlueIcon.svg';
import TicketWhiteIcon from '../../assets/icons/TicketWhiteIcon.svg';
import FlagBlueIcon from '../../assets/icons/FlagBlueIcon.svg';
import FlagWhiteIcon from '../../assets/icons/FlagWhiteIcon.svg';
import PerformerBlueIcon from '../../assets/icons/PerformerBlueIcon.svg';
import PerformerWhiteIcon from '../../assets/icons/PerformerWhiteIcon.svg';
import ForkKnifeBlueIcon from '../../assets/icons/ForkKnifeBlueIcon.svg';
import ForkKnifeWhiteIcon from '../../assets/icons/ForkKnifeWhiteIcon.svg';
import TrainBlueIcon from '../../assets/icons/TrainBlueIcon.svg';
import TrainWhiteIcon from '../../assets/icons/TrainWhiteIcon.svg';
import {Moment} from 'moment';
import Cart from '../../components/cart/Cart';

export default () => {
  const products: Product[] = [
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
  ];

  const Section = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
  `

  const features = [
    {
      icon: <img src={TicketBlueIcon}/>,
      selectedIcon: <img src={TicketWhiteIcon}/>,
      label: '景点门票 & 表演',
      value: 'ticket',
    },
    {
      icon: <img src={FlagBlueIcon}/>,
      selectedIcon: <img src={FlagWhiteIcon}/>,
      label: '一日游 & 小团游',
      value: 'one-day',
    },
    {
      icon: <img src={PerformerBlueIcon}/>,
      selectedIcon: <img src={PerformerWhiteIcon}/>,
      label: '特色活动 & 体验',
      value: 'featured',
    },
    {
      icon: <img src={ForkKnifeBlueIcon}/>,
      selectedIcon: <img src={ForkKnifeWhiteIcon}/>,
      label: '地道美食',
      value: 'food',
    },
    {
      icon: <img src={TrainBlueIcon}/>,
      selectedIcon: <img src={TrainWhiteIcon}/>,
      label: '当地交通 & 旅行服务',
      value: 'travel',
    },
  ];

  const navigate = useNavigate();

  const [_filterState, setFilterState] = useRecoilState<FilterState>(filterState);

  const {
    categoryFilterItems,
    languageFilterItems,
    dates,
  } = _filterState;

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

  const filterListRef = useRef<HTMLDivElement>(null);

  const [locationName, setLocationName] = useState('香港');
  const [locationDescription, setLocationDescription] = useState('探索香港当地玩乐，优惠套餐，旅游攻略等');
  const [locationSearchedProductsTitle, setLocationSearchedProductsTitle] = useState('2021香港当地玩乐');
  const [productTotal, setProductTotal] = useState(480);
  const [selectedFeatureIndexes, setSelectedFeatureIndexes] = useState<number[]>([]);

  const onFeatureClick = (i: number) => () => {
    filterListRef.current?.scrollIntoView({behavior:'smooth',block:'start'})
    const _items = JSON.parse(JSON.stringify(categoryFilterItems));
    //make other checked state equal to false before make current checkbox equal to true
    for(let j=0;j<_items.length;j++){
      _items[j].checked = false;
      _items[j].children?.every((subItem:any) => subItem.checked = false);
    }
    _items[i].children?.every((subItem:any) => subItem.checked = true);
    _items[i].checked = true;
    setFilterState({
      ..._filterState,
      categoryFilterItems: _items,
    });
    let _selectedFeatureIndexes = [...selectedFeatureIndexes];
    if (_selectedFeatureIndexes.includes(i)) {
      const idx = _selectedFeatureIndexes.indexOf(i);
      _selectedFeatureIndexes.splice(idx, 1);
    } else {
      _selectedFeatureIndexes = [];//remove other activite state before add new activite
      _selectedFeatureIndexes.push(i);
    }
    setSelectedFeatureIndexes(_selectedFeatureIndexes);
  };

  const isFeatureSelected = (i: number): boolean => {
    return selectedFeatureIndexes.includes(i);
  };

  const onDatesChange = (dates: [Moment | null, Moment | null]) => {
    setFilterState({
      ..._filterState,
      dates,
    });
  };

  return <div className="product-list-location">
    <div className="banner-wrapper">
      <div className="search-wrapper">
        <div className="search-title">
          {locationName}
        </div>
        <div className="search-subtitle">
          {locationDescription}
        </div>
      </div>
      <img className="banner" src={banner} alt="banner"/>
    </div>
    <div className="feature-list">
      {features.map((f, i) => <FeatureTag
        key={i}
        label={f.label}
        icon={isFeatureSelected(i) ? f.selectedIcon : f.icon}
        color={isFeatureSelected(i) ? '#FFFFFF' : '#002C5E'}
        backgroundColor={isFeatureSelected(i) ? '#002C5E' : '#FFFFFF'}
        onClick={onFeatureClick(i)}
      />)}
    </div>
    <Container>
      <ProductList
        className="hot-products"
        title={`${locationName}最近热门产品`}
        products={products}
        scrollable
      />
    </Container>

    <Container>
      <div className="searched-products-title">
        {locationSearchedProductsTitle}
      </div>
      <div className="product-list-location">
        <div ref={filterListRef} className="filter-list">
          <TreeFilter title="产品分类" items={categoryFilterItems} onChange={onCategoryFilterItems}/>
          <DateFilter title="可预定日期" dates={dates} onChange={onDatesChange}/>
          <RangeFilter title="产品价格"/>
          <TreeFilter title="服务语言" items={languageFilterItems} onChange={onLanguageFilterItems}/>
        </div>
        <ProductList
          className="searched-products"
          title={<div className="product-list-title">
            <span>找到</span>
            <span className="product-list-title-highlight">{productTotal}</span>
            <span>个产品</span>
          </div>}
          products={products}
          pagination
        />
      </div>
    </Container>

    <Cart/>
  </div>;
};

