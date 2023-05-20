import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner"
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Reviews from "../Review/Review";
import ShopByCategory from "../ShopByCategory/ShopByCategory"
import VideoSection from "../VideoSection/VideoSection";
const HomeLayout = () => {
    useTitle('Home')
    return (
        <div>
             <Banner></Banner>
             <Gallery></Gallery>
             <ShopByCategory></ShopByCategory>
             <VideoSection></VideoSection>
             <Reviews></Reviews>
             <Contact></Contact>
        </div>
    );
};

export default HomeLayout;