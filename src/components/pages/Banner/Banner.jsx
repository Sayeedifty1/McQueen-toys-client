
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    // Slider settings
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Set the duration (in milliseconds) for auto slide
        arrows: false // Hide arrow buttons
    };


    return (
        <div className="header mb-20">
            <Slider {...sliderSettings}>
                <div className="relative">
                    <img style={{ height: '500px' }} className='md:w-full  mx-auto' src='https://i.ibb.co/P5njcyj/slider-3.jpg' alt="Car Toy 1" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <h1 className="text-2xl md:text-4xl font-bold mb-4 font-outline-2 ">Welcome to McQueen Toys</h1>
                        <p className="text-lg mb-4 font-outline-1">Discover a wide range of car toys for kids of all ages.</p>
                        <Link to='https://github.com/Sayeedifty1'>
                            <button className="relative border-2 rounded-2xl border-white bg-transparent py-2.5 px-5 font-medium text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-yellow-300 before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 before:rounded-2xl">Explore More</button>
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <img style={{ height: '500px' }} className='md:w-full  mx-auto' src='https://i.ibb.co/VDdqmzQ/slider-2.jpg' alt="Car Toy 1" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <h1 className="text-2xl md:text-4xl font-bold mb-4 font-outline-2 ">Welcome to McQueen Toys</h1>
                        <p className="text-lg mb-4 font-outline-1">Discover a wide range of car toys for kids of all ages.</p>
                        <Link to='https://github.com/Sayeedifty1'>
                            <button className="relative border-2 rounded-2xl border-white bg-transparent py-2.5 px-5 font-medium text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-yellow-300 before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 before:rounded-2xl">Explore More</button>
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <img style={{ height: '500px' }} className='md:w-full  mx-auto' src='https://i.ibb.co/8jtWBXY/slider-1.jpg' alt="Car Toy 1" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <h1 className="text-2xl md:text-4xl font-bold mb-4 font-outline-2 ">Welcome to McQueen Toys</h1>
                        <p className="text-lg mb-4 font-outline-1">Discover a wide range of car toys for kids of all ages.</p>
                        <Link to='https://github.com/Sayeedifty1'>
                            <button className="relative border-2 rounded-2xl border-white bg-transparent py-2.5 px-5 font-medium text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-yellow-300 before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 before:rounded-2xl">Explore More</button>
                        </Link>
                    </div>
                </div>
            </Slider>

        </div>
    );
};

export default Banner;