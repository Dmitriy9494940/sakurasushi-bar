import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-gray-800 p-4 flex items-center">
      <img src="/logo.png" alt="Sakura Sushi" className="h-10 mr-4" />
      <h1 className="text-2xl font-bold">Sakura Sushi</h1>
    </header>
  );
}