import { React, useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/ItemDetail';
import ItemCount from '../itemCount/ItemCount';
import item from './mockedData';

const ItemDetailContainer = () => {
  const onAdd = (count) => {
    console.log(count);
  };
  const [product, setProduct] = useState('');

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(item);
        console.log(item.price);
      }, 2000);
    });
    promesa.then((res) => {
      setProduct(res);
    });
  }, []);

  return (
    <>
      <ItemDetail item={product} />
      <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
    </>
  );
};
export default ItemDetailContainer;
