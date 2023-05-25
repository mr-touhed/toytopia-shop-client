import Lottie from "lottie-react";
import animate from "../../../assets/138760-animals-728x90.json"
const BannerImg = () => {
    return (
        <div className="mt-6  p-6 md:w-4/3 md:ml-28 mx-auto">
            <Lottie animationData={animate} loop={true} />
        </div>
    );
};

export default BannerImg;