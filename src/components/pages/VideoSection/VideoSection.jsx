/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";

const VideoSection = () => {
    return (
        <div className="w-5/6 mx-auto mb-32 border border-yellow-500" data-aos="flip-right">
            <div className="hero bg-base-200 rounded-lg">
                <div className="hero-content py-8 md:py-14 max-w-full flex flex-col lg:flex-row">
                    <div className="w-full lg:w-3/5">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/EsdyiNQgmIE"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="text-center w-full lg:w-2/5 mt-4 lg:mt-0">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Demo of our Products</h1>
                        <p className="mb-4">All best Quality toys are here for your kids. Serving since 1995.</p>
                        <Link to="/alltoys">
                            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-gray-600 hover:text-white hover:border-gray-900 mt-4 lg:mt-0">All Toys</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
