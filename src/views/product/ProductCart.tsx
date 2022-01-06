import React, {useState} from 'react';
import './ProductCart.scss';
import '../../components/checkbox/CheckBox.scss'
import Container from '../../layouts/components/Container';
import ProductList from '../../components/product/ProductList';
import {Button} from '@chakra-ui/react';
import exampleCartImage from './exampleCartImage.png';
import {useNavigate} from 'react-router-dom';

export default () => {
  const navigate = useNavigate();

  const products = [
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
    }
  ];

  const [price, setPrice] = useState(1304);

  return <div className="product-cart">
    <Container>
      <div className="product-cart-title">
        成功添加至购物车
      </div>
      <div className="product-cart-box">
        <div className="product-cart-box-image">
          <img src={exampleCartImage}/>
        </div>
        <div className="product-cart-box-content">
          <div className="product-cart-box-content-top">
            <div className="product-cart-box-content-name">
              香港迪士尼乐园门票
            </div>
            <div className="product-cart-box-content-price">
              <span className="price-unit">¥</span>
              <span className="price-value">{price.toLocaleString()}</span>
            </div>
          </div>
          <div className="product-cart-box-content-bottom">
            <div className="notice-item">出遊日期：2021年12月18日</div>
            <div className="notice-item">方案类型：普通日子1日门票</div>
            <div className="notice-item">數量：成人 x1  、儿童（3-11岁) x2</div>
          </div>
        </div>
      </div>
      <div className="product-cart-actions">
        <Button className="btn warning" onClick={() => navigate('/')}>继续购物</Button>
        <Button className="btn primary" onClick={() => navigate('/orders/cart')}>查看购物车</Button>
      </div>

      <div className="product-cart-nearby-products">
        <div className="product-cart-common-title">
          附近产品
        </div>
        <ProductList title={false} products={products} pagination={false} scrollable/>
      </div>
    </Container>
  </div>;
};
