import { React, useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increaseHandler = () => {
    return count < stock ? setCount(count + 1) : stock;
  };
  const decreaseHandler = () => {
    return count > 0 ? setCount(count - 1) : 0;
  };

  return (
    <>
      <div className='cart-btn-container'>
        <button className='cart-btn' onClick={() => onAdd(count)}>
          <span>Add to cart</span>
        </button>

        <div className='input-group input-number-group'>
          <div className='input-group-button' onClick={() => decreaseHandler()}>
            <span className='input-number-decrement'>-</span>
          </div>
          <input
            className='input-number'
            type='number'
            value={count}
            min='0'
            max='1000'
          ></input>
          <button
            className='input-group-button'
            onClick={() => increaseHandler()}
          >
            <span className='input-number-increment'>+</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default ItemCount;
