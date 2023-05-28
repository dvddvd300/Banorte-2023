import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

export default function HeroOpcionesPymes_Dos() {
  const [currentItem, setCurrentItem] = useState(0);
  const images = [
    '/static/pymes-opcion-1.jpg',
    '/static/pymes-opcion-2.jpg',
  ];

  const handleClick = () => {
    setCurrentItem((prevItem) => (prevItem === images.length - 1 ? 0 : prevItem + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem === images.length - 1 ? 0 : prevItem + 1));
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="carousel w-full">
        <div className="carousel-item w-full">
          <img src={images[currentItem]} className="w-full" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
