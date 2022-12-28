import React from 'react';
import './ItemCart.css';
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({ item }) => {
  const { removeItem } = useCartContext();

  return (
    <div className='itemCart'>
      <div key={item.id}>
        <img src={item.image} alt={item.title} />
        <div>
          <p>Title: {item.title}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Unit Price: {item.price}</p>
          <p>Subtotal:{item.quantity * item.price}</p>
          <button onClick={() => removeItem(item.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
