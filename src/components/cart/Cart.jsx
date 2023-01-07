import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../itemCart/ItemCart';
import './Cart.css';
import { Link } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import CheckoutForm from '../checkoutForm/CheckoutForm';

const Cart = () => {
  const { cart, getTotalPrice } = useCartContext();

  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [orderId, setOrderId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');

    const order = {
      buyer,
      items: cart.map((item) => ({
        id: item.id || '',
        title: item.name || '',
        price: item.price || 0,
        quantity: item.quantity || 0,
      })),
      total: getTotalPrice() || 0,
      date: new Date().toLocaleString(),
    };

    addDoc(ordersCollection, order).then((snapshot) => {
      setOrderId(snapshot.id);
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const emptyCartMessage =
    ' It seems that your cart is empty. Click the button below to start buying';
  return cart.length === 0 ? (
    <div className='cart-container'>
      <div className='cart'>
        <p className='cart__empty-message' aria-label='Cart is empty'>
          {emptyCartMessage}
        </p>
        <Link className='cart__buy-link' to='/' tabIndex='0'>
          Buy
        </Link>
      </div>
    </div>
  ) : (
    <div className='cart-container'>
      {orderId === '' ? (
        <>
          {' '}
          <div className='cart'>
            <p className='cart__title' aria-label='Order brief'>
              Brief
            </p>
            {cart.map((item) => (
              <ItemCart className='cart__item' key={item.id} item={item} />
            ))}

            <p className='cart__total' aria-label='Total price'>
              <span>Total:</span> ${getTotalPrice()}
            </p>
          </div>
          <CheckoutForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            buyer={buyer}
          />
        </>
      ) : (
        <div>
          <p aria-label='Order submitted'>
            Your order has been submitted successfully
          </p>
          <p aria-label='Order ID'>{orderId}</p>
        </div>
      )}
    </div>
  );
};
export default Cart;
