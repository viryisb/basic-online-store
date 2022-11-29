import { React } from 'react';
import ItemCount from '../itemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const onAdd = (sum) => {
    console.log(sum);
  };

  return (
    <>
      <h1> {greeting}</h1>;
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </>
  );
};
export default ItemListContainer;
