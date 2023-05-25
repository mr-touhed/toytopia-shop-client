import NavBar from "../../components/Shared/NavBar/NavBar";
import errorImg from "../../assets/error-404.json"
import Lottie from "lottie-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const ErrorPage = () => {

    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "ToyTo||404"
      
    }, [location]);
    return (
        <div>
            <NavBar/>
            <div className="w-[600px] mx-auto">


                <Lottie animationData={errorImg} loop={true} />
                </div>
        </div>
    );
};

export default ErrorPage;