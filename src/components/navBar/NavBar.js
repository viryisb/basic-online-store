import { React } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <a href='#' className='logo'>
        flower<span>.</span>
      </a>
      <ul>
        <li>
          <a href='#'>Ramos</a>
        </li>
        <li>
          <a href='#'>Arreglos Florales</a>
        </li>
        <li>
          <a href='#'>Rosas</a>
        </li>
        <li>
          <a href='#'>Linea Premium</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
