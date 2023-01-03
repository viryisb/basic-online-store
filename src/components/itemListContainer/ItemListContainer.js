import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ItemList from './../itemList/ItemList';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const getProducts = collection(db, 'items');
    getDocs(getProducts).then((snapshot) => {
      let items;
      if (categoryId) {
        items = snapshot.docs
          .map((product) => ({
            id: product.id,
            ...product.data(),
          }))
          .filter((product) => product.category === categoryId);
      } else {
        items = snapshot.docs.map((product) => ({
          id: product.id,
          ...product.data(),
        }));
      }
      setProducts(items);
      setLoading(false);
    });
  }, [categoryId]);

  return <>{loading ? <Loader /> : <ItemList items={products} />}</>;
};
export default ItemListContainer;
