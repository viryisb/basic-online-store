import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clear = () => setCart([]);

  const isInCart = (id) => (cart.find((item) => item.id === id) ? true : false);

  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

  const addItem = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, product]);
    }
    console.log(cart);
  };

  return (
    <CartContext.Provider value={{ clear, isInCart, removeItem, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
