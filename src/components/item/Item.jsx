import { React } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
  return (
    <div className='products'>
      <div className='box'>
        <div className='image'>
          <img src={item.photo} alt='rose'></img>
        </div>
        <div className='content'>
          <h3>{item.name}</h3>
          <p className='item-description'>
            {item.description} <br />
            stock: {item.stock}
          </p>
        </div>
        <Link className='item-link-to-detail' to={`/item/${item.id}`}>
          {' '}
          Go to detail
        </Link>
      </div>
    </div>
  );
};
export default Item;
