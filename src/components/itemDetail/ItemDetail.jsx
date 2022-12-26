import { React, useState } from 'react';
import './ItemDetail.css';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../itemCount/ItemCount';
import { Link } from '@mui/material';

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addItem } = useCartContext();

  const onAdd = (data, quantity) => {
    setGoToCart(true);
    addItem(data, quantity);
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
          {goToCart ? (
            <Link className='item-link-finish-purchase'>
              Finish the purchase
            </Link>
          ) : (
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    </section>
  );
};
export default ItemDetail;
