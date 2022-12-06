import { React } from 'react';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  return (
    <section className='products' id='products'>
      <div className='box-container'>
        <div className='box'>
          <span className='discount'>-10%</span>
          <div class='image'>
            <img src={item.photo} alt='rose pot' />
          </div>
          <div className='content'>
            <div className='price'>
              {' '}
              <span>{` $${item.price}`}</span>{' '}
            </div>
            <p className='description'>{item.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ItemDetail;
