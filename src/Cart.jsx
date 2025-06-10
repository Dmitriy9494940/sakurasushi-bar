import React, { useState } from 'react'

export default function Cart() {
  const [count, setCount] = useState(0)
  const price = 350

  return (
    <div>
      <h2>Ролл "Филадельфия"</h2>
      <p>Цена: {price} ₽</p>
      <button onClick={() => setCount(count + 1)}>Добавить в корзину</button>
      <p>В корзине: {count} шт. — {count * price} ₽</p>
    </div>
  )
}