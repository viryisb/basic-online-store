import React, { useState } from 'react';

export const CartContext = React.createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clear = () => setCart([]);

  const isInCart = (id) => (cart.find((item) => item.id === id) ? true : false);

  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

  const addItem = (item, newQuantity) => {
    const newCart = cart.filter((prod) => prod.id !== item.id);
    newCart.push({ ...item, quantity: newQuantity });
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ clear, isInCart, removeItem, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
