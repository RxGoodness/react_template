import React, { useState } from 'react';
import { deleteFromCart, viewCart } from '../utils/Cart';

interface Item {
    name: string;
    price: number;
    quantity?: number;
}

const DeleteFromCart: React.FC = () => {
  const handleDelete = (index: number) => {
    deleteFromCart(index);
  };
  const cart = viewCart();
  return (
    <ul>
      {cart.map((item, index) => (
        <li key={index}>
          {item.name} - ${item.price}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default DeleteFromCart;