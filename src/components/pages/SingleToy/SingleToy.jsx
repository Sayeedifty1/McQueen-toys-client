import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const SingleToy = () => {
    const {  name, price, quantity, description, pictureUrl, sellerName, sellerEmail, subCategory, rating } = useLoaderData();
    useTitle('Single Toy');
    
    return (
        <div className="w-5/6 mx-auto mt-20 mb-36">
            <div className="card lg:card-side bg-base-100 shadow-xl ">
                <figure ><img src={pictureUrl} /></figure>
                <div className=" ml-8 card-body">
                    <h2 className="card-title">Toy Name: {name}</h2>
                    <p>Category: {subCategory}</p>
                    <p>Description: {description}</p>
                    <p>Available Quantity: {quantity}</p>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <hr />
                    <p>Seller Name: {sellerName}</p>
                    <p>Seller Email: {sellerEmail}</p>
                    <Link className="ml-auto" to="/alltoys"><button className="btn hover:text-yellow-400 btn-xs">Return to All Toys</button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default SingleToy;