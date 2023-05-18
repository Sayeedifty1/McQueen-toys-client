import  { useEffect, useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <div className="container mx-auto overflow-x-auto">
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
      <table className="table w-full">
        <thead>
          <tr className="hover">
            <th className="px-4 py-2">Seller</th>
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
              <td className="px-4 py-2">{toy.name}</td>
              <td className="px-4 py-2">{toy.subCategory}</td>
              <td className="px-4 py-2">{toy.price}</td>
              <td className="px-4 py-2">{toy.quantity}</td>
              <td className="px-4 py-2">
                <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-gray-600 hover:text-white hover:border-gray-900 mt-4 lg:mt-0">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
