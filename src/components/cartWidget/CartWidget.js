import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { getTotalQuantity } = useCartContext();

  return (
    <>
      <span className='shopping-icon'>
        <ShoppingCartIcon />
        {getTotalQuantity() || ''}
      </span>
    </>
  );
};
export default CartWidget;
