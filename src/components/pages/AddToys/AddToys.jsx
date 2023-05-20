
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const AddToys = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const pictureUrl = form.pictureURL.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const newToy = {
            pictureUrl,
            name,
            sellerName,
            sellerEmail,
            subCategory,
            price,
            rating,
            quantity,
            description
        };

        console.log(newToy);

        //! Send data to the server
        fetch('https://toy-e-commerece-server.vercel.app/alltoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    // Redirect to My Toys page
                    navigate('/mytoys');
                });
            }
        })

        // Reset the form
        form.reset();

        
    };

    return (
        <div className="w-5/6 mx-auto  p-6 md:p-12">
            <h2 className="text-3xl font-extrabold mb-6">Add a Toy</h2>
            <form onSubmit={handleSubmit}>
                {/* Picture URL */}
                <div className="mb-6">
                    <label htmlFor="pictureURL" className="label">
                        Picture URL
                    </label>
                    <input
                        type="text"
                        id="pictureURL"
                        name="pictureURL"
                        placeholder="Picture URL"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Name and Seller Name */}
                <div className="grid gap-4 md:grid-cols-2 mb-6">
                    <div>
                        <label htmlFor="name" className="label">
                           Toy Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Toy Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="sellerName" className="label">
                            Seller Name
                        </label>
                        <input
                            defaultValue={user?.displayName}
                            type="text"
                            id="sellerName"
                            name="sellerName"
                            placeholder="Seller Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                </div>

                {/* Seller Email and Sub-Category */}
                <div className="grid gap-4 md:grid-cols-2 mb-6">
                    <div>
                        <label htmlFor="sellerEmail" className="label">
                            Seller Email
                        </label>
                        <input
                            type="email"
                            defaultValue={user?.email}
                            id="sellerEmail"
                            name="sellerEmail"
                            placeholder="Seller Email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subCategory" className="label">
                            Sub-Category
                        </label>
                        <input
                            type="text"
                            id="subCategory"
                            name="subCategory"
                            placeholder="Sub-Category"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                </div>

                {/* Price and Rating */}
                <div className="grid gap-4 md:grid-cols-2 mb-6">
                    <div>
                        <label htmlFor="price" className="label">
                            Price
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            placeholder="Price"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="rating" className="label">
                            Rating
                        </label>
                        <input
                            type="text"
                            id="rating"
                            name="rating"
                            placeholder="Rating"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                    <label htmlFor="quantity" className="label">
                        Available Quantity
                    </label>
                    <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        placeholder="Available Quantity"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Description */}
                <div className="mb-6">
                    <label htmlFor="description" className="label">
                        Detail Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Detail Description"
                        className="input input-bordered w-full h-32"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <input
                    type="submit"
                    value="Add Toy"
                    className="btn btn-warning w-full"
                    required
                />
            </form>
        </div>
    );
};

export default AddToys;
