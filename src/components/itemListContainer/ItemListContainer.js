import { React } from 'react';
import ItemCount from '../itemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h1> {greeting}</h1>;
      <ItemCount />;
    </>
  );
};
export default ItemListContainer;
