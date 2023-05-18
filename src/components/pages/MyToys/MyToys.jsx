import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const MyToysPage = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user?.email)
  useEffect(() => {
    // Fetch the user's toys from the server
    fetch(`http://localhost:5000/alltoys/${user?.email}`)
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, [user?.email]);

  // Function to handle toy deletion
//   const handleDeleteToy = (toyId) => {
    // Send a request to the server to delete the toy
//     fetch(`http://localhost:5000/toys/${toyId}`, {
//       method: "DELETE",
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Remove the deleted toy from the list
//         setToys((prevToys) => prevToys.filter((toy) => toy._id !== toyId));
//         console.log(data);
//       })
//       .catch((error) => console.log(error));
//   };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4">My Toys</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Toy Name</th>
            <th className="px-4 py-2">Sub-category</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Available Quantity</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id}>
              <td className="px-4 py-2">{toy.name}</td>
              <td className="px-4 py-2">{toy.subCategory}</td>
              <td className="px-4 py-2">{toy.price}</td>
              <td className="px-4 py-2">{toy.availableQuantity}</td>
              <td className="px-4 py-2">
                <Link
                  to={`/toys/${toy._id}/update`}
                  className="text-blue-500 hover:underline mr-4"
                >
                  Update
                </Link>
                <button
                //   onClick={() => handleDeleteToy(toy._id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToysPage;
