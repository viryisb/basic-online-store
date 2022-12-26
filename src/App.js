import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartContext';
import React, { useContext } from 'react';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <CartProvider value={[]}>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route
            exact
            path='category/:categoryId'
            element={<ItemListContainer />}
          />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
