import { React, useEffect, useState } from 'react';
import ItemCount from '../itemCount/ItemCount';
import ItemList from './../itemList/ItemList';
import items from './mockedData';

const ItemListContainer = ({ greeting }) => {
  const onAdd = (count) => {
    console.log(count);
  };
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
      <h1> {greeting}</h1>;
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
      <ItemList items={products} />
    </>
  );
};
export default ItemListContainer;
