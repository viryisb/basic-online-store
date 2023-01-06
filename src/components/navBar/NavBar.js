import { React } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <span className='navbar__isotype'>flower </span>
      </Link>
      <ul className='navbar__list' role='list'>
        <li className='navbar__item'>
          <Link
            to='/category/bouquet'
            className='navbar__link'
            tabIndex='0'
            aria-label='Bouquets'
            aria-current={window.location.pathname === '/category/bouquet'}
          >
            Bouquets
          </Link>
        </li>
        <li className='navbar__item'>
          <Link
            to='/category/pot'
            className='navbar__link'
            tabIndex='0'
            aria-label='Pots'
            aria-current={window.location.pathname === '/category/pot'}
          >
            Pots
          </Link>
        </li>
        <li className='navbar__item'>
          <Link
            to='/category/rose'
            className='navbar__link'
            tabIndex='0'
            aria-label='Roses'
            aria-current={window.location.pathname === '/category/rose'}
          >
            Roses
          </Link>
        </li>
        <li className='navbar__item'>
          <Link
            to='/category/wedding'
            className='navbar__link'
            tabIndex='0'
            aria-label='Wedding'
            aria-current={window.location.pathname === '/category/wedding'}
          >
            Wedding
          </Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
