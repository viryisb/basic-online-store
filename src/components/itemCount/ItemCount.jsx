import { React, useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [sum, setSum] = useState(initial);

  const buttonClickSumHandler = () => {
    return sum < stock ? setSum(sum + 1) : stock;
  };
  const buttonClickRestHandler = () => {
    return sum > 0 ? setSum(sum - 1) : 0;
  };

  return (
    <>
      <div className='cart-btn-container'>
        <button className='cart-btn' onClick={() => onAdd(sum)}>
          <span>Add to cart</span>
        </button>

        <div className='input-group input-number-group'>
          <div
            className='input-group-button'
            onClick={() => buttonClickRestHandler()}
          >
            <span className='input-number-decrement'>-</span>
          </div>
          <input
            className='input-number'
            type='number'
            value={sum}
            min='0'
            max='1000'
          ></input>
          <button
            className='input-group-button'
            onClick={() => buttonClickSumHandler()}
          >
            <span className='input-number-increment'>+</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default ItemCount;
