import React from 'react';

const Menu = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Меню</h1>
      <ul className="space-y-2">
        <li className="p-4 bg-white rounded-lg shadow">🍣 Ролл Филадельфия</li>
        <li className="p-4 bg-white rounded-lg shadow">🍤 Темпура ролл</li>
        <li className="p-4 bg-white rounded-lg shadow">🍜 Рамен с курицей</li>
        <li className="p-4 bg-white rounded-lg shadow">🍱 Сет на двоих</li>
      </ul>
    </div>
  );
};

export default Menu;