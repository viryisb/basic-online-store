import React from 'react';
import Item from './../item/Item';
import './ItemList.css';

const ItemList = ({ items }) => {
  const noItemsMessage = 'There are no items available';
  return (
    <section className='products-list' id='products'>
      <h1 className='heading' aria-label='latest products'>
        Latest products
      </h1>
      <div className='box-container'>
        {items && items.length > 0 ? (
          items.map((item) => <Item item={item} key={item.id} />)
        ) : (
          <p className='products-list__no-items-message'>{noItemsMessage}</p>
        )}
      </div>
    </section>
  );
};
export default ItemList;
