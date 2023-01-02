import React from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../itemCart/ItemCart';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, getTotalPrice } = useCartContext();

  return cart.length === 0 ? (
    <div className='cart'>
      <p className='cart__empty-message'>Your cart is empty</p>
      <Link className='cart__buy-link' to='/'>
        Buy
      </Link>
    </div>
  ) : (
    <div className='cart'>
      {cart.map((item) => (
        <>
          <ItemCart className='cart__item' key={item.id} item={item} />
          <p className='cart__total'>total: {getTotalPrice()}</p>
        </>
      ))}
    </div>
  );
};

export default Cart;
