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
          <Link to='/category/bouquet' className='link'>
            Bouquets
          </Link>
        </li>
        <li>
          <Link to='/category/pot' className='link'>
            Pots
          </Link>
        </li>
        <li>
          <Link to='/category/rose' className='link'>
            Roses
          </Link>
        </li>
        <li>
          <Link to='/category/wedding' className='link'>
            Wedding
          </Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
