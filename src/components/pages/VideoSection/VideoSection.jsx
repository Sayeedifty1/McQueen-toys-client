/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";

const VideoSection = () => {
    return (
        <div >
            <div className="hero bg-base-200 w-5/6 mx-auto rounded-lg mb-32">
                <div className="hero-content py-14 max-w-full flex-col lg:flex-row ">
                    <iframe width="760" height="415" src="https://www.youtube.com/embed/EsdyiNQgmIE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4">Demo of our Products</h1>
                        <p className="mb-4">All best Quality toys are here for your kids. Serving since 1995.</p>
                        <Link to='alltoys'><button className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-gray-600 hover:text-gray-400 hover:border-gray-200 mt-4 lg:mt-0">All Toys</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;