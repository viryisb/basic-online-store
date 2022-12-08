import { React } from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({ item }) => {
  const onAdd = (count) => {
    console.log(count);
  };
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
      <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
    </section>
  );
};
export default ItemDetail;
