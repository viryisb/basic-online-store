import { React } from 'react';
import styles from './NavBar.css';
import logo from '../assets/logo.svg';

const NavBar = () => {
  return (
    <nav>
      <a href='#'>
        <img src={logo} />
      </a>
      <ul>
        <li>
          <a href='#'>Mujeres</a>
        </li>
        <li>
          <a href='#'>Hombres</a>
        </li>
        <li>
          <a href='#'>Niños</a>
        </li>
        <li>
          <a href='#'>Sin Genero</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
