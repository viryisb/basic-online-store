import { React, useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increaseHandler = () => setCount(count < stock ? count + 1 : stock);
  const decreaseHandler = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <>
      <div className='cart-btn-container'>
        <button
          className='cart-btn'
          aria-label='add to cart'
          onClick={() => onAdd(count)}
        >
          <span>Add to cart</span>
        </button>

        <div className='input-group input-number-group'>
          <div
            className='input-group-button'
            onClick={() => decreaseHandler()}
            aria-label='Decrement'
          >
            <span className='input-number-decrement'>-</span>
          </div>
          <input
            className='input-number'
            type='number'
            value={count}
            min='0'
            max='100'
            aria-label='Quantity'
            onChange={(event) => setCount(parseInt(event.target.value, 10))}
          ></input>
          <button
            className='input-group-button'
            onClick={() => increaseHandler()}
            aria-label='Increment'
          >
            <span className='input-number-increment'>+</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default ItemCount;
