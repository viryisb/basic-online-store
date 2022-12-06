import React from 'react';
import Item from './../item/Item';
import './ItemList.css';

const ItemList = ({ items }) => {
  return (
    <section className='products' id='products'>
      <h1 className='heading'>
        {' '}
        latest <span>products</span>{' '}
      </h1>
      <div className='box-container'>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
export default ItemList;
