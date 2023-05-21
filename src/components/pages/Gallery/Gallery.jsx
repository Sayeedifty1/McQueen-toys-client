import { useEffect} from 'react';
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
      src: 'https://i.ibb.co/VmHJdq9/queen.png',
      alt: 'The Queen',
    },
    {
      id: 2,
      src: 'https://i.ibb.co/PFZh8F7/rust-tow.png',
      alt: 'Tow truck',
    },
    {
      id: 3,
      src: 'https://i.ibb.co/hKYDkdw/ramone.png',
      alt: 'Ramone',
    },
    {
      id: 4,
      src: 'https://i.ibb.co/h9cbC9V/sheriff.png',
      alt: 'Sheriff',
    },
    {
      id: 5,
      src: 'https://i.ibb.co/LgJSq65/mac.png',
      alt: 'Mac Truck Set',
    },
    {
      id: 6,
      src: 'https://i.ibb.co/bKvHsyf/black-queen.png',
      alt: 'Updated Queen',
    },
  ];

  

  
  return (
    <div className="mb-20 " data-aos="flip-left">
      <h1 className="text-3xl font-bold text-center mb-1">Photo Gallery</h1>
      <p className="text-center mb-10">All Exclusive and top sold toys of all time.</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 w-5/6 mx-auto">
        {images.map((image) => (
          <div
            key={image.id}
            
            data-aos="flip-down"
            
          >
            <figure className="relative ">
              <img  src={image.src} alt={image.alt} className="w-full relative z-10 transition-all scale-100 hover:scale-110 duration-300" />
              <div className="w-5/6 h-5/6 md:w-full  border-8 border-orange-500 absolute top-5 md:top-10 bottom-10 left-0 md:left-10 right-5 md:right-10 z-0"></div>
            </figure>

            {/* {hoveredImage === image.id && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">{image.alt}</h3>
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
