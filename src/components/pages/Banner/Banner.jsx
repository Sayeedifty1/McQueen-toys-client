
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

    // trying new thing
    const images = [
        {
            id: 1,
            src: '../../../../public/login.jpg',
            alt: 'Image 1',
            animationClass: 'animate-pulse',
        },
        {
            id: 2,
            src: '../../../../public/login.jpg',
            alt: 'Image 2',
            animationClass: 'animate-bounce',
        },
        {
            id: 3,
            src: '../../../../public/login.jpg',
            alt: 'Image 3',
            animationClass: 'animate-spin',
        },
        {
            id: 4,
            src: '../../../../public/login.jpg',
            alt: 'Image 4',
            animationClass: 'animate-spin',
        },
        {
            id: 5,
            src: '../../../../public/login.jpg',
            alt: 'Image 5',
            animationClass: 'animate-pulse',
        },
        {
            id: 6,
            src: '../../../../public/login.jpg',
            alt: 'Image 6',
            animationClass: 'animate-bounce',
        },
    ];
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
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 w-5/6 mx-auto">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className={`relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-110 ${image.animationClass}`}
                    >
                        <img src={image.src} alt={image.alt} className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <h3 className="text-white text-lg font-semibold">{image.alt}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;