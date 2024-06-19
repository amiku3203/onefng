// components/Gallery.js
"use client"

import Image from 'next/image';
import { useState } from 'react';

const images = [
  { src: '/bg1.jpg', alt: 'Image 1' },
  { src: '/background.jpg', alt: 'Image 2' },
  { src: '/bg1.jpg', alt: 'Image 3' },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center font-serif">
      <h2 className="text-3xl font-bold mb-8">Gallery</h2>
      <div className="relative w-full max-w-4xl">
        <div className="flex justify-center">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
      <div className="flex space-x-2 mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-gray-700' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
