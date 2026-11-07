import HeroSection from "../component/home/Hero";
import PopularDestinations from "../component/home/PopularDestinations";
import WhyChooseUs from "../component/home/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <PopularDestinations />
            <WhyChooseUs />
        </div>
    );
};

export default Home;