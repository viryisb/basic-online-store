import { React, useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const getDetail = doc(db, 'items', id);
    getDoc(getDetail).then((snapshot) => {
      setLoading(false);
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, [id]);

  return <>{loading ? <Loader /> : <ItemDetail item={product} />}</>;
};
export default ItemDetailContainer;
