import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path='/' element={<ItemDetailContainer />} />
        <Route exact path='/' element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
