import React from 'react'
import SakuraAnimation from './SakuraAnimation'
import Cart from './Cart'

export default function App() {
  return (
    <div>
      <SakuraAnimation />
      <header>
        <img src="/logo.png" alt="Sakura Sushi" width="200" />
        <h1>Добро пожаловать в Sakura Sushi!</h1>
      </header>
      <main>
        <p>Вкуснейшие суши и роллы с доставкой по Апрелевке</p>
        <Cart />
      </main>
    </div>
  )
}