import { React } from 'react';
import './Item.css';

const Item = ({ item }) => {
  return (
    <div className='box'>
      <div className='image'>
        <img src={item.photo} alt='rose'></img>
      </div>
      <div className='content'>
        <h3>{item.name}</h3>
        <p>
          description: {item.description}, stock: {item.stock}
        </p>
      </div>
    </div>
  );
};

export default Item;
