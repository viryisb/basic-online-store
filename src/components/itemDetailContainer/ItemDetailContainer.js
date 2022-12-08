import { React, useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/ItemDetail';

import items from '../../mockedData';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    const getDetail = new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
    getDetail.then((res) =>
      setProduct(res.find((prod) => prod.id === parseInt(detailId)))
    );
  }, [detailId]);

  return (
    <>
      <ItemDetail item={product} />
    </>
  );
};
export default ItemDetailContainer;
