import { useLocation } from "react-router-dom";
import BannerImg from "../BannerImg/BannerImg";
import Catagory from "../Catagory/Catagory";
import FotoGallary from "../FotoGallary/FotoGallary";
import Populars from "../PopularCatagory/Populars";
import SliderBanner from "../SliderBanner/SliderBanner";
import SucscribePage from "../SubscribePage/SucscribePage";
import { useEffect } from "react";

const Home = () => {


    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "ToyTo||Home"
      
    }, [location]);

    return (
        <div>
            <SliderBanner/>
            <FotoGallary/>
            <Catagory/>
            <BannerImg/>
            <Populars/>
            <SucscribePage/>
        </div>
    );
};

export default Home;