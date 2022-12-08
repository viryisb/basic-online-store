import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from './../itemList/ItemList';
import items from '../../mockedData';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
    if (categoryId) {
      getProducts.then((res) =>
        setProducts(res.filter((item) => item.category === categoryId))
      );
    } else {
      getProducts.then((res) => setProducts(res));
    }
  }, [categoryId]);

  return (
    <>
      <ItemList items={products} />
    </>
  );
};
export default ItemListContainer;
