import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <div className="mb-32">
      <h2 className="text-3xl font-bold mb-10 text-center">Shop by Category</h2>
      <div className="bg-gray-200 py-8 px-4 w-5/6 mx-auto rounded-xl">
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`bg-black px-4 py-2 rounded-lg ${activeCategory === category ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'
                }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
          {toys.map((toy) => (
            <div key={toy._id} className="bg-white p-4 shadow rounded-lg mx-auto">
              <img src={toy.pictureUrl} alt={toy.name} className="w-96 object-cover mb-4" />
              <h3 className="text-lg font-bold mb-2">{toy.name}</h3>
              <p className="text-gray-700 mb-2">Price: {toy.price}</p>
              <p className="text-gray-700 mb-2">Rating: {toy.rating}</p>
              <Link to={`/singletoy/${toy._id}`}>
                <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-gray-600 hover:text-gray-400 hover:border-gray-200 mt-4 lg:mt-0">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
