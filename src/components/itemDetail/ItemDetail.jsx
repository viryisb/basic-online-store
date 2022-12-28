import { React, useState } from 'react';
import './ItemDetail.css';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  const [linkToCart, setLinkToCart] = useState(false);
  const { addItem } = useCartContext();

  const onAdd = (count) => {
    setLinkToCart(true);
    addItem({ ...item, quantity: count });
  };

  return (
    <section className='products' id='products'>
      <div className='box-container'>
        <div className='box'>
          <div className='image'>
            <img src={item.photo} alt={`A photo of ${item.name}`} />
          </div>
          <div className='content'>
            <div className='price'>
              {' '}
              <span>{` $${item.price}`}</span>{' '}
            </div>
            <p className='description'>{item.description}</p>
          </div>
          {linkToCart ? (
            <Link
              to='/cart'
              className='item-link-finish-purchase'
              aria-label='Finish the purchase'
            >
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
