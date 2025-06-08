import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">?? Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста.</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="p-4 bg-white rounded-lg shadow">
              {item.name} — {item.quantity} шт.
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;