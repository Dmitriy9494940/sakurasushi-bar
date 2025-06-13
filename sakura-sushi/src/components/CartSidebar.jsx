import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext.jsx';

export default function CartSidebar() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-80 bg-gray-800 p-4">
      <button onClick={() => setOpen(!open)} className="bg-pink-500 px-4 py-2 rounded-lg mb-4">
        {open ? 'Закрыть корзину' : `Корзина (${cart.length})`}
      </button>
      {open && (
        <div>
          {cart.length === 0 ? (
            <p>Корзина пуста</p>
          ) : (
            <>
              <ul>
                {cart.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center mb-2">
                    <span>{item.name}</span>
                    <span>{item.price} ?</span>
                    <button onClick={() => removeFromCart(idx)} className="text-red-400">x</button>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-bold">Итого: {total} ?</p>
              <button className="mt-2 bg-green-500 px-4 py-2 rounded-lg">Оформить заказ</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}