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
          <div className='image'>
            <img src={item.photo} alt='rose pot' />
          </div>
          <div className='content'>
            <div className='price'>
              {' '}
              <span>{` $${item.price}`}</span>{' '}
            </div>
            <p className='description'>{item.description}</p>
          </div>
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </section>
  );
};
export default ItemDetail;
