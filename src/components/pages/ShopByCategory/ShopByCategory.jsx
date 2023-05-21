import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
const ShopByCategory = () => {
  const categories = ['racing', 'police', 'truck'];
  const [activeCategory, setActiveCategory] = useState('');
  const [toys, setToys] = useState([]);

  useEffect(() => {
    setActiveCategory(categories[0] || '');
    fetchToys(categories[0]);
  }, []);

  const fetchToys = async (category) => {
    try {
      const response = await fetch(`https://toy-e-commerece-server.vercel.app/tabs/${category}`);
      const data = await response.json();
      setToys(data);
    } catch (error) {
      console.error('Error fetching toys by sub-category:', error);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    fetchToys(category);
  };
  // eslint-disable-next-line react/prop-types
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
  
    const starIcons = [];
  
    for (let i = 0; i < fullStars; i++) {
      starIcons.push(<AiFillStar key={i} />);
    }
  
    if (hasHalfStar) {
      starIcons.push(<AiOutlineStar key={fullStars} />);
    }
  
    return (
      <div className="flex flex-row">
      {starIcons.map((icon, index) => (
        <span key={index}>{icon}</span>
      ))}
    </div>
    );
  };
  

  return (
    <div className="mb-32" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-10 text-center">Shop by Category</h2>
      <div className=" py-8 px-4 w-5/6 mx-auto rounded-xl">
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`bg-black px-4 py-2 rounded-lg ${activeCategory === category ? 'bg-yellow-500 text-white outline-1' : 'bg-gray-300 text-gray-700'
                }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
          {toys.map((toy) => (
            <div key={toy._id} className="bg-gray-800 border border-yellow-400 p-4 shadow rounded-lg mx-auto">
              {/* <img src={toy.pictureUrl} alt={toy.name} className="w-96 object-cover mb-4" /> */}
              <figure className="relative">
              <img src={toy.pictureUrl} alt={toy.name} className="w-full h-96 relative z-10 transition-all scale-100 hover:scale-110 duration-300" />
              <div className="border-4 border-orange-500 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
            </figure>
              <h3 className="text-lg font-bold mb-2">{toy.name}</h3>
              <p className="text-white mb-2">Price: ${toy.price}</p>
              <p className="text-white mb-2">Rating: {toy.rating} <span className='text-yellow-400'><StarRating rating={toy.rating} /></span></p>
              <Link to={`/singletoy/${toy._id}`}>
                <button className="relative border-2 rounded-2xl border-white bg-transparent py-2.5 px-5 font-medium text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-yellow-300 before:transition-transform before:duration-300 before:content-[''] hover:text-yellow-300 before:hover:scale-y-100 before:rounded-2xl">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
