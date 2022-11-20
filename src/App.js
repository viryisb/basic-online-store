import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting='Hola' />
    </div>
  );
}

export default App;
