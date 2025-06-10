import React, { useEffect } from 'react'

export default function SakuraAnimation() {
  useEffect(() => {
    const container = document.body;
    for (let i = 0; i < 20; i++) {
      const petal = document.createElement("div");
      petal.className = "sakura";
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDuration = 5 + Math.random() * 5 + "s";
      petal.style.opacity = Math.random();
      petal.style.fontSize = Math.random() * 10 + 10 + "px";
      container.appendChild(petal);
    }
  }, []);

  return null;
}