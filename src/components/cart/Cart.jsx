import React from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../itemCart/ItemCart';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, getTotalPrice] = useCartContext();

  return cart.length === 0 ? (
    <>
      <p>Your cart is empty</p>
      <Link to='/'>Buy</Link>
    </>
  ) : (
    <>
      {cart.map((item) => (
        <>
          <ItemCart key={item.id} item={item} />
          <p>total: {getTotalPrice()}</p>
        </>
      ))}
    </>
  );
};
export default Cart;
