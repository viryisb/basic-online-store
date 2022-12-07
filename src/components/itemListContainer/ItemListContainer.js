import { React, useEffect, useState } from 'react';

import ItemList from './../itemList/ItemList';
import items from './mockedData';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 3000);
    });
    promesa.then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <>
      <ItemList items={products} />
    </>
  );
};
export default ItemListContainer;
