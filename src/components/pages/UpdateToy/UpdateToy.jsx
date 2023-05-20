import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';

const UpdateToy = () => {
    const { _id, name, price, availableQuantity, description } = useLoaderData();
    const [updatedPrice, setUpdatedPrice] = useState(price || '');
    const [updatedQuantity, setUpdatedQuantity] = useState(availableQuantity || '');
    const [updatedDescription, setUpdatedDescription] = useState(description || '');

    const navigate = useNavigate();
    useTitle('Update Toy');


    const handleUpdateToy = (e) => {
        e.preventDefault();

        // Log the values being sent to the server
        console.log('Updated Price:', updatedPrice);
        console.log('Updated Quantity:', updatedQuantity);
        console.log('Updated Description:', updatedDescription);

        // Send a request to the server to update the toy with the new values
        fetch(`https://toy-e-commerece-server.vercel.app/alltoys/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                price: updatedPrice,
                availableQuantity: updatedQuantity,
                description: updatedDescription
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle toast message
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Toy successfully updated!',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        // Redirect to My Toys page
                        navigate('/mytoys');
                    });

                }
            })
            .catch((error) => console.log(error));
    };

    return (

        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Update Toy</h2>
            <form className="max-w-md mx-auto" onSubmit={handleUpdateToy}>
                <h1 className="text-2xl mb-4">Toy Name: {name}</h1>
                <p className="mb-4">Update the following:</p>
                <div className="mb-4">
                    <label htmlFor="price" className="block font-bold mb-1">
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={updatedPrice}
                        onChange={(e) => setUpdatedPrice(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block font-bold mb-1">
                        Quantity
                    </label>
                    <input
                        type="text"
                        id="availableQuantity"
                        name="availableQuantity"
                        value={updatedQuantity}
                        onChange={(e) => setUpdatedQuantity(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block font-bold mb-1">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={updatedDescription}
                        onChange={(e) => setUpdatedDescription(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        rows="4"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                    Update Toy
                </button>
            </form>
        </div>

    );
};

export default UpdateToy;
