import { React, useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increaseHandler = () => setCount(count < stock ? count + 1 : stock);
  const decreaseHandler = () => setCount(count > 1 ? count - 1 : 1);

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
          <button
            className='input-group-button input-number-decrement'
            onClick={() => decreaseHandler()}
            aria-label='Decrement'
            role='button'
          >
            -
          </button>
          <input
            className='input-number'
            type='number'
            value={count}
            min='1'
            max='100'
            aria-label='Quantity'
            aria-valuenow={count}
            aria-valuemin='1'
            aria-valuemax='100'
            onChange={(event) => setCount(parseInt(event.target.value, 10))}
          ></input>
          <button
            className='input-group-button input-number-increment'
            onClick={() => increaseHandler()}
            aria-label='Increment'
            role='button'
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};
export default ItemCount;
