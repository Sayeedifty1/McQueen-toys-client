import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [limit, setLimit] = useState(20);
  useTitle("All Toys")

  useEffect(() => {
    fetch("https://toy-e-commerece-server.vercel.app/alltoys")
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, []);

  // Filter toys based on the search query
  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    fetch(`https://toy-e-commerece-server.vercel.app/alltoys/${limit}`)
      .then(res => res.json())
      .then(data => toys(data))
  }, [limit, toys])
 
  const handleLimit = () => {
    // console.log('limit test')
    setLimit()
  }

  return (
    <div className="container mx-auto overflow-x-auto mb-32">
      <h2 className="text-3xl font-bold mb-4">All Toys</h2>
      <div className="mb-4">
        {/* TODO:design search bar */}
        <input
          type="text"
          placeholder="Search by Toy Name"
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md px-4 py-2"
        />
      </div>
      <table className="table w-full ">
        <thead>
          <tr className="hover">
            <th className="px-4 py-2">Seller</th>
            <th className="px-4 py-2">Picture</th>
            <th className="px-4 py-2">Toy Name</th>
            <th className="px-4 py-2">Sub-category</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Available Quantity</th>
            <th className="px-4 py-2">View Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredToys.map((toy) => (
            <tr className="hover" key={toy._id}>
              <td className="px-4 py-2">{toy.sellerName}</td>
              <td className="px-4 py-2"><img className="w-60 rounded-xl" src={toy.pictureUrl} alt="" /></td>
              <td className="px-4 py-2">{toy.name}</td>
              <td className="px-4 py-2">{toy.subCategory}</td>
              <td className="px-4 py-2">${toy.price}</td>
              <td className="px-4 py-2">{toy.availableQuantity}</td>
              <td className="px-4 py-2">
                <Link to={`/singletoy/${toy._id}`}>
                  <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-gray-600 hover:text-white hover:border-yellow-400 mt-4 lg:mt-0">
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full mx-auto flex justify-center my-4">
        <button onClick={handleLimit} className={`relative border-2 rounded-2xl border-white bg-transparent py-2.5 px-5 font-medium text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-yellow-300 before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 before:rounded-2xl ${limit == 20 ? '' : 'hidden'}`}>Show All</button>
        
      </div>
    </div>
  );
};

export default AllToys;
