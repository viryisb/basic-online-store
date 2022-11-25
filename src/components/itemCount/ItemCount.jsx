import { React, useState } from 'react';
import './ItemCount.css';

const ItemCount = () => {
  const [sum, setSum] = useState(0);
  const [add, setAdd] = useState(0);

  const stock = 10;
  const buttonClickSumHandler = () => {
    return sum < stock ? setSum(sum + 1) : stock;
  };
  const buttonClickRestHandler = () => {
    return sum > 0 ? setSum(sum - 1) : 0;
  };
  const onAdd = () => {
    setAdd(sum);
  };
  return (
    <>
      <div className='cart-btn-container'>
        <button className='cart-btn' onClick={onAdd}>
          <span>Add to cart</span>
        </button>
        <span>{add}</span>
        <div className='input-group input-number-group'>
          <div className='input-group-button' onClick={buttonClickRestHandler}>
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
            onClick={buttonClickSumHandler}
          >
            <span className='input-number-increment'>+</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default ItemCount;
