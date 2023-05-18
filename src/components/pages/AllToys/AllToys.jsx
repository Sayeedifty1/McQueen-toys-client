import  { useEffect, useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://toy-e-commerece-server.vercel.app/alltoys")
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto overflow-x-auto">
      <h2 className="text-3xl font-bold mb-4">All Toys</h2>
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
          {toys.map((toy) => 
          (
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
