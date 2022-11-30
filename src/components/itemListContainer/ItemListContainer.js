import { React, useEffect, useState } from 'react';
import ItemCount from '../itemCount/ItemCount';
import ItemList from './../itemList/ItemList';
import data from './mockedData';

const ItemListContainer = ({ greeting }) => {
  const onAdd = (count) => {
    console.log(count);
  };
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    });
    promesa.then((res) => {
      setItems(res);
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
