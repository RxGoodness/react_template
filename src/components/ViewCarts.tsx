import React from 'react';
import { viewCart } from '../utils/Cart';

interface Item {
    name: string;
    price: number;
    quantity?: number;
}

const ViewCart: React.FC = () => {
  const cart = viewCart();
  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ViewCart;
