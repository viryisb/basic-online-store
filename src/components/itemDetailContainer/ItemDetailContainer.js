import { React, useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/ItemDetail';
import item from './mockedData';

const ItemDetailContainer = () => {
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
    </>
  );
};
export default ItemDetailContainer;
