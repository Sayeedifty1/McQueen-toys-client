import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animation occurs only once
    });
  }, []);

  const images = [
    {
      id: 1,
      src: 'https://i.ibb.co/71DF05c/the-queen.jpg',
    },
    {
      id: 2,
      src: 'https://i.ibb.co/r0x751Z/tow-2.jpg',
    },
    {
        id: 3,
        src: 'https://i.ibb.co/n3Gm43N/R34.jpg',
    },
    {
        id: 4,
        src: 'https://i.ibb.co/NW53msd/Sheriff.jpg',
    },
    {
        id: 5,
        src: 'https://i.ibb.co/GsvsQ6Q/Mac-truck-set.jpg',
    },
    {
        id: 6,
        src: 'https://i.ibb.co/HTNmBVM/tow.webp',
    },
  ];

  return (
    <div className="mb-20">
      <h1 className="text-3xl font-bold text-center mb-1">Photo Gallery</h1>
      <p className="text-center mb-10">All Exclusive and top sold toys of all time.</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 w-5/6 mx-auto">
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-110 `}
            data-aos="flip-down" // Specify the AOS animation for each image
          >
            <img src={image.src} alt={image.alt} className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold">{image.alt}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
