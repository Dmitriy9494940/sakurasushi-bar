import React from 'react';
import { CartProvider } from './CartContext.jsx';
import Header from './components/Header.jsx';
import SakuraAnimation from './components/SakuraAnimation.jsx';
import MenuBook from './components/MenuBook.jsx';
import CartSidebar from './components/CartSidebar.jsx';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <SakuraAnimation />
        <Header />
        <div className="flex">
          <MenuBook />
          <CartSidebar />
        </div>
      </div>
    </CartProvider>
);}
