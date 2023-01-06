import React from 'react';
import './ItemCart.css';
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({ item }) => {
  const { removeItem } = useCartContext();

  return (
    <div className='item-cart'>
      <div key={item.id}>
        <div className='item-cart__image-container'>
          <div
            className='item-cart__image'
            style={{ backgroundImage: `url(${item.photo})` }}
          />
        </div>
        <div className='item-cart__info'>
          <p className='item-cart__title'>
            <span>Product:</span> {item.name}
          </p>
          <p className='item-cart__quantity'>
            <span>Quantity:</span> {item.quantity}
          </p>
          <p className='item-cart__price'>
            <span>Unit price:</span> ${item.price}
          </p>
          <div className='item-cart__subtotal-container'>
            <p className='item-cart__subtotal'>
              Subtotal: ${item.quantity * item.price}
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
