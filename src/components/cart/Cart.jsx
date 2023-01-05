import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../itemCart/ItemCart';
import './Cart.css';
import { Link } from 'react-router-dom';
import {
  getFirestore,
  collection,
  addDoc,
  FieldValue,
} from 'firebase/firestore';

import CheckoutForm from '../checkoutForm/CheckoutForm';

const Cart = () => {
  const { cart, getTotalPrice } = useCartContext();
  const [order, setOrder] = useState({});
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

    setOrder({
      buyer,
      items: cart.map((item) => ({
        id: item.id || '',
        title: item.name || '',
        price: item.price || 0,
        quantity: item.quantity || 0,
      })),
      total: getTotalPrice() || 0,
    });

    addDoc(ordersCollection, order).then((snapshot) => {
      setOrderId(snapshot.id);
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setBuyer({ ...buyer, [name]: value });
  };

  return cart.length === 0 ? (
    <div className='cart'>
      <p className='cart__empty-message'>Your cart is empty</p>
      <Link className='cart__buy-link' to='/'>
        Buy
      </Link>
    </div>
  ) : (
    <>
      {orderId === '' ? (
        <>
          <div className='cart'>
            {cart.map((item) => (
              <>
                <ItemCart className='cart__item' key={item.id} item={item} />
                <p className='cart__total'>total: {getTotalPrice()}</p>
              </>
            ))}
          </div>
          <CheckoutForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            buyer={buyer}
          />
        </>
      ) : (
        <div>
          <p>Your order has been submitted successfully</p>
          <p>{orderId}</p>
        </div>
      )}
    </>
  );
};
export default Cart;
