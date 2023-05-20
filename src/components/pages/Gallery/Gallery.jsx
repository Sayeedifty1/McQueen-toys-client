import { useEffect, useState } from 'react';
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
      alt: 'The Queen',
    },
    {
      id: 2,
      src: 'https://i.ibb.co/r0x751Z/tow-2.jpg',
      alt: 'Tow truck',
    },
    {
      id: 3,
      src: 'https://i.ibb.co/n3Gm43N/R34.jpg',
      alt: 'R34',
    },
    {
      id: 4,
      src: 'https://i.ibb.co/NW53msd/Sheriff.jpg',
      alt: 'Sheriff',
    },
    {
      id: 5,
      src: 'https://i.ibb.co/GsvsQ6Q/Mac-truck-set.jpg',
      alt: 'Mac Truck Set',
    },
    {
      id: 6,
      src: 'https://i.ibb.co/HTNmBVM/tow.webp',
      alt: 'Updated Tow truck',
    },
  ];

  const [hoveredImage, setHoveredImage] = useState(null);

  const handleImageHover = (imageId) => {
    setHoveredImage(imageId);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className="mb-20" data-aos="flip-left">
      <h1 className="text-3xl font-bold text-center mb-1">Photo Gallery</h1>
      <p className="text-center mb-10">All Exclusive and top sold toys of all time.</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 w-5/6 mx-auto">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:border-2 hover:border-yellow-500 hover:opacity-40"
            data-aos="flip-down"
            onMouseEnter={() => handleImageHover(image.id)}
            onMouseLeave={handleImageLeave}
          >
            <img src={image.src} alt={image.alt} className="w-full h-auto" />
            {hoveredImage === image.id && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">{image.alt}</h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
