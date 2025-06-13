import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartContext } from '../CartContext.jsx';

const rolls = [
  { name: "�����������", price: 350, img: "https://via.placeholder.com/150?text=�����������" },
  { name: "����������", price: 330, img: "https://via.placeholder.com/150?text=����������" },
  { name: "������� ������", price: 400, img: "/rolls/rt.jpg" },
  { name: "������", price: 450, img: "https://via.placeholder.com/150?text=������" },
  { name: "��������", price: 500, img: "https://via.placeholder.com/150?text=��������" },
  { name: "���� ����", price: 370, img: "https://via.placeholder.com/150?text=����+����" },
  { name: "���� ����", price: 360, img: "https://via.placeholder.com/150?text=����+����" },
  { name: "�����", price: 300, img: "https://via.placeholder.com/150?text=�����" },
  { name: "������ ����", price: 340, img: "https://via.placeholder.com/150?text=������+����" },
];

const pageSize = 3;

export default function MenuBook() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const { addToCart } = useContext(CartContext);

  const pages = [];
  for (let i = 0; i < rolls.length; i += pageSize) {
    pages.push(rolls.slice(i, i + pageSize));
  }

  const nextPage = () => {
    setDirection(1);
    setPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setDirection(-1);
    setPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <div className="flex-1 p-4">
      <div className="relative w-full max-w-4xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-xl perspective">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-700 rounded-xl"
            initial={{ rotateY: direction > 0 ? 90 : -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: direction > 0 ? -90 : 90, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {pages[page].map((item, idx) => (
              <div key={idx} className="bg-gray-600 rounded-lg p-4 flex flex-col items-center shadow-md">
                <img src={item.img} alt={item.name} className="w-32 h-32 object-cover rounded-md mb-2" />
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-pink-400">{item.price} ?</p>
                <button
                  className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
                  onClick={() => addToCart(item)}
                >
                  � �������
                </button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevPage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-600 p-2 rounded-full hover:bg-gray-500"
        >
          &lt;
        </button>
        <button
          onClick={nextPage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-600 p-2 rounded-full hover:bg-gray-500"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}