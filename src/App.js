import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { CartContext } from './context/CartContext';
import React, { useContext } from 'react';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <CartContext.Provider value={[]}>
      <BrowserRouter>
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
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
