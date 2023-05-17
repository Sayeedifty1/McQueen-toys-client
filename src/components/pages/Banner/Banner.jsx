
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../../../../public/logo.png"
//TODO: Add images to the slider
const Banner = () => {
    // Slider settings
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000 // Set the duration (in milliseconds) for auto slide
    };
    return (
        <div className="header">
            <Slider {...sliderSettings}>
                <div className="relative">
                    <img className='w-5/6 mx-auto' src={img1} alt="Car Toy 1" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <h1 className="text-4xl font-bold mb-4">Welcome to McQueen Toys</h1>
                        <p className="text-lg mb-4">Discover a wide range of car toys for kids of all ages.</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explore More</button>
                    </div>
                </div>
                <div className="relative">
                    <img className='w-5/6 mx-auto' src={img1} alt="Car Toy 1" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Welcome to McQueen Toys</h1>
                        <p className="text-lg mb-4">Discover a wide range of car toys for kids of all ages.</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explore More</button>
                    </div>
                </div>
                <div className="relative">
                    <img className='w-5/6 mx-auto' src={img1} alt="Car Toy 1" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Welcome to McQueen Toys</h1>
                        <p className="text-lg mb-4">Discover a wide range of car toys for kids of all ages.</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explore More</button>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;