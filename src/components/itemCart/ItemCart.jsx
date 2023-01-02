import React from 'react';
import './ItemCart.css';
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({ item }) => {
  const { removeItem } = useCartContext();

  return (
    <div className='item-cart'>
      <div key={item.id}>
        <div
          className='item-cart__image'
          style={{ backgroundImage: `url(${item.photo})` }}
        />
        <div className='item-cart__info'>
          <p className='item-cart__title'>Title: {item.name}</p>
          <p className='item-cart__quantity'>Quantity: {item.quantity}</p>
          <p className='item-cart__price'>Unit Price: {item.price}</p>
          <div className='item-cart__subtotal-container'>
            <p className='item-cart__subtotal'>
              Subtotal:{item.quantity * item.price}
            </p>
          </div>
          <button
            className='item-cart__button'
            onClick={() => removeItem(item.id)}
            aria-label='Delete'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
