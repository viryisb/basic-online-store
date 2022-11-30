import { React } from 'react';
import './Item.css';
const Item = ({ item }) => {
  return (
    <div>
      <p>
        name: {item.name}, description: {item.description}, stock: {item.stock}
      </p>
    </div>
  );
};

export default Item;
