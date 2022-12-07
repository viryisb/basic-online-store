import { React } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <span className='isotype'>flower </span>
      </Link>
      <ul>
        <li>
          <Link className='link'>Bouquets</Link>
        </li>
        <li>
          <Link className='link'>Pots</Link>
        </li>
        <li>
          <Link className='link'>Roses</Link>
        </li>
        <li>
          <Link className='link'>Wedding</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
