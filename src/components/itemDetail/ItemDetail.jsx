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
    <section className='products'>
      <div className='products__box-container'>
        <div className='products__box'>
          <div className='products__image'>
            <img src={item.photo} alt={`A photo of ${item.name}`} />
          </div>
          <div className='products__name'>
            <h3>{item.name}</h3>
          </div>
          <div className='products__content'>
            <div className='products__price'>
              {' '}
              <span>{` $${item.price}`}</span>{' '}
            </div>
            <p className='products__description'>{item.description}</p>
          </div>
          {linkToCart ? (
            <Link
              to='/cart'
              className='item-link-finish-purchase'
              aria-label='Finish your purchase'
            >
              Finish your purchase
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
