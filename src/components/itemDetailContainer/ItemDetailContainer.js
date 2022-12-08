import { React, useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/ItemDetail';

import items from '../../mockedData';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const getDetail = new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve(items);
      }, 2000);
    });
    getDetail.then((res) =>
      setProduct(res.find((prod) => prod.id === parseInt(id)))
    );
  }, [id]);

  return <>{loading ? <Loader /> : <ItemDetail item={product} />}</>;
};
export default ItemDetailContainer;
