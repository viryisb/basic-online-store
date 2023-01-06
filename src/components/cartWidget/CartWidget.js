import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { getTotalQuantity } = useCartContext();
  const quantity = getTotalQuantity();

  return (
    <>
      <span
        className='shopping-icon'
        aria-label={`${quantity} products in the cart`}
      >
        <ShoppingCartIcon aria-hidden='true' />
        {getTotalQuantity() || ''}
      </span>
    </>
  );
};
export default CartWidget;
