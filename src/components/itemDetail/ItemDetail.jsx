import { React } from 'react';
import './ItemDetail.css';
import image from '../../assets/rose.jpg';

const ItemDetail = ({ item }) => {
  return (
    <section className='products' id='products'>
      <div className='box-container'>
        <div className='box'>
          <span className='discount'>-10%</span>
          <div class='image'>
            <img src={image} alt='rose pot' />
          </div>
          <div className='content'>
            <div className='price'>
              {' '}
              <span>{`price: $${item.price}`}</span>{' '}
            </div>
            <p className='description'>{item.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ItemDetail;