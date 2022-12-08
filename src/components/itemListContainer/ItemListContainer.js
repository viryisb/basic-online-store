import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ItemList from './../itemList/ItemList';
import items from '../../mockedData';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
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

  return <>{loading ? <Loader /> : <ItemList items={products} />}</>;
};
export default ItemListContainer;
