import React from 'react';
import './Home.scss';
import banner from '../../assets/images/banner.png';
import SearchBox from '../../components/search/SearchBox';
import ProductThumbnail from '../../components/product/ProductThumbnail';
import Container from '../../layouts/components/Container';
import ProductList from '../../components/product/ProductList';
import Cart from '../../components/cart/Cart';

export default () => {
  const products = [
    {
      title: 'hongkong disneyland ',
      category: 'Attractions tickets & performances',
      price: 418,
    },
    {
      title: 'hongkong disneyland ',
      category: 'Attractions tickets & performances',
      price: 1418,
    },
    {
      title: 'hongkong disneyland ',
      category: 'Attractions tickets & performances',
      price: 418,
    },
    {
      title: 'hongkong disneyland ',
      category: 'Attractions tickets & performances',
      price: 418,
    },
    {
      title: 'hongkong disneyland ',
      category: 'Attractions tickets & performances',
      price: 418,
    },
    {
      title: 'hongkong disneyland ',
      category: 'Attractions tickets & performances',
      price: 418,
    }
  ];

  return <div className="home-page">
    <div className="banner-wrapper">
      <div className="search-wrapper">
        <div className="search-title">
          Looking For
        </div>
        <SearchBox/>
      </div>
      <img className="banner" src={banner} alt="banner"/>
    </div>

    <Container>
      <ProductList title="Recent Hot products" products={products} scrollable noSort/>
      <ProductList title="Recent Hot products" products={products} scrollable noSort/>
    </Container>

    <Cart/>
  </div>;
};
