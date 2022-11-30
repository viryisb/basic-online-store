import { React, useEffect, useState } from 'react';
import ItemCount from '../itemCount/ItemCount';
import './ItemListContainer.css';
import ItemList from './../itemList/ItemList';
import items from './mockedData';

const ItemListContainer = ({ greeting }) => {
  const onAdd = (count) => {
    console.log(count);
  };
  const [item, setItem] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 3000);
    });
    promesa.then((res) => {
      setItem(res);
    });
  }, []);

  return (
    <>
      <h1> {greeting}</h1>;
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
      <ItemList items={items} />
    </>
  );
};
export default ItemListContainer;
