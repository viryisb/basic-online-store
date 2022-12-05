import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting='Bienvenidos a la tienda' />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
