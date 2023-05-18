import { useContext, useEffect, useState } from "react";
import { RiDeleteBin5Line } from   "react-icons/ri";
import {GrDocumentUpdate} from "react-icons/gr";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';

const MyToysPage = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(user?.email)
    useEffect(() => {
        // Fetch the user's toys from the server
        fetch(`https://toy-e-commerece-server.vercel.app/alltoys/${user?.email}`)
            .then((response) => response.json())
            .then((data) => setToys(data))
            .catch((error) => console.log(error));
    }, [user?.email]);

    // Function to handle toy deletion
      const handleDeleteToy = (toyId) => {
    // Send a request to the server to delete the toy
        fetch(`https://toy-e-commerece-server.vercel.app/alltoys/${toyId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            // Remove the deleted toy from the list
            setToys((prevToys) => prevToys.filter((toy) => toy._id !== toyId));
            console.log(data);
            if(data.deletedCount){
                Swal.fire({
                    icon: 'error',
                    title: 'Deleted!',
                    text: 'Toy successfully deleted!',
                    confirmButtonText: 'OK'
                  });
            }
          })
          .catch((error) => console.log(error));
      };

    return (
        <div className="w-5/6 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">My Toys</h2>
            <table className="w-full border-collapse">
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
                            <td className="p-2 border">{toy.quantity}</td>
                            <td className="p-2 border">
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded"
                                  onClick={() => handleDeleteToy(toy._id)}
                                >
                                    <RiDeleteBin5Line />
                                </button>
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded ml-2"
                                // onClick={() => handleUpdateToy(toy._id)}
                                >
                                    <GrDocumentUpdate />
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
