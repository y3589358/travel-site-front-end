import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {BasicLayout} from '../layouts/BasicLayout';
import Login from '../views/login/Login';
import Home from '../views/home/Home';
import ProductListLocation from '../views/product/ProductListLocation';
import ProductListSearch from '../views/product/ProductListSearch';
import ProductDetail from '../views/product/ProductDetail';
import ProductCart from '../views/product/ProductCart';
import OrderCart from '../views/order/OrderCart';
import OrderSubmit from '../views/order/OrderSubmit';
import OrderPay from '../views/order/OrderPay';
import OrderPaid from '../views/order/OrderPaid';
import OrderList from '../views/order/OrderList';
import OrderDetail from '../views/order/OrderDetail';

const routes: RouteItem[] = [
  // login
  {
    path: 'login',
    element: <Login/>,
  },
  // Home
  {
    path: '',
    element: <Home/>,
  },
  // search
  {
    path: 'search',
    element: <ProductListSearch/>,
  },
  // search list
  {
    path: 'search/404',
    element: <ProductListSearch/>,
  },
  // destination list
  {
    path: 'location/:name',
    element: <ProductListLocation/>,
  },
  // Product Detail
  {
    path: 'products/:id',
    element: <ProductDetail/>,
  },
  // Product Cart
  {
    path: 'products/cart',
    element: <ProductCart/>,
  },
  // orders cart
  {
    path: 'orders/cart',
    element: <OrderCart/>,
  },
  // orders submit
  {
    path: 'orders/submit',
    element: <OrderSubmit/>,
  },
  // orders pay
  {
    path: 'orders/pay',
    element: <OrderPay/>,
  },
  // orders paid
  {
    path: 'orders/paid',
    element: <OrderPaid/>,
  },
  // orders list
  {
    path: 'orders',
    element: <OrderList/>,
  },
  // orders detail
  {
    path: 'orders/:id',
    element: <OrderDetail/>,
  },
];

export default () => {
  // @ts-ignore
  window.navigate = useNavigate();
  return <Routes>
    <Route path="/" element={<BasicLayout/>}>
      {routes.map((route, i) => <Route key={i} path={route.path} element={route.element}/>)}
    </Route>
  </Routes>;
};
