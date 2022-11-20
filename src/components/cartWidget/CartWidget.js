import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <>
      <span className='shopping-icon'>
        <ShoppingCartIcon /> 5
      </span>
    </>
  );
};
export default CartWidget;
