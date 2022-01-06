import React from 'react';
import './Cart.scss';
import CartIcon from '../../assets/icons/CartIcon.svg';
import {useNavigate} from 'react-router-dom';

const Cart: React.FC<CartProps> = (props) => {
  const navigate = useNavigate();

  const {productCount} = props;

  const onClick = () => {
    navigate('/orders/cart');
  };

  return <div className="cart" onClick={onClick}>
    <div className="badge">
      {productCount || 2}
    </div>
  </div>;
};

export default Cart;
