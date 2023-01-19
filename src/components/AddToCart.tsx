import React, { useState } from 'react';
import { addToCart } from '../utils/Cart';

interface Item {
    name: string;
    price: number;
    quantity?: number;
}

const AddToCart: React.FC<{ item: Item }> = ({ item }) => {
  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
}

export default AddToCart;