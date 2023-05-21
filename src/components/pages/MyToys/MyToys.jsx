import { useContext, useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrDocumentUpdate } from "react-icons/gr";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const MyToysPage = () => {
  const [toys, setToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // Track the sorting order
  const { user } = useContext(AuthContext);
  useTitle("My Toys"); // Custom hook to update title

  useEffect(() => {
    // Fetch the user's toys from the server with sorting query parameter
    const url = `https://toy-e-commerece-server.vercel.app/alltoys/seller/${user?.email}?sort=${sortOrder}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, [user?.email, sortOrder]);

  // Function to handle toy deletion
  const handleDeleteToy = (toyId) => {
    Swal.fire({
      title: "Confirmation",
      text: "Are you sure you want to delete this toy?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-e-commerece-server.vercel.app/alltoys/${toyId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            // Remove the deleted toy from the list
            setToys((prevToys) => prevToys.filter((toy) => toy._id !== toyId));
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: "Toy successfully deleted!",
                confirmButtonText: "OK",
              });
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  // Function to handle sorting
  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  return (
    <div className="w-5/6 mx-auto text-center mt-20 mb-36">
      <h2 className="text-3xl font-bold mb-4">My Toys</h2>
      <button
        className="relative border-2 rounded-2xl border-white bg-transparent py-2.5 px-5 font-medium text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-yellow-300 before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 before:rounded-2xl mb-10"
        onClick={handleSort}
      >
        Sort by Price ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-2 border">Picture</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Seller</th>
              <th className="p-2 border">Sub-category</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <tr key={toy._id}>
                <td className="p-2 border">
                  <img src={toy.pictureUrl} alt={toy.name} className="w-40 mx-auto" />
                </td>
                <td className="p-2 border">{toy.name}</td>
                <td className="p-2 border">{toy.sellerName}</td>
                <td className="p-2 border">{toy.subCategory}</td>
                <td className="p-2 border">{toy.description}</td>
                <td className="p-2 border">${toy.price}</td>
                <td className="p-2 border">{toy.availableQuantity}</td>
                <td className="p-2 border">
                  <div className="flex">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded tooltip tooltip-error"
                    data-tip="Delete Toy"
                    onClick={() => handleDeleteToy(toy._id)}
                  >
                    <RiDeleteBin5Line />
                  </button>
                  <Link to={`/updatetoy/${toy._id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded ml-2 tooltip tooltip-info" data-tip="Update Toy">
                      <GrDocumentUpdate />
                    </button>
                  </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToysPage;
