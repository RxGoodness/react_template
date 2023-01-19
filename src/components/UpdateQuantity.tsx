import React, { useState } from 'react';
import { updateQuantity, viewCart } from '../utils/Cart';

interface Item {
    name: string;
    price: number;
    quantity?: number;
}

const UpdateQuantity: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    updateQuantity(index, e.target.valueAsNumber);
  };

  const cart = viewCart();
  return (
    <ul>
      {cart.map((item, index) => (
        <li key={index}>
          {item.name} - ${item.price}
          <input
            type="number"
            value={item.quantity}
            // onChange={(e) => handleChange(e,

                onChange={(e) => handleChange(e, index)}
                />
                </li>
                ))}
                </ul>
                );
                }
 export default UpdateQuantity;
