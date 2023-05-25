import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/sliders/1.png";
import img2 from "../../../assets/sliders/2.png";
import img3 from "../../../assets/sliders/3.jpg";
import img4 from "../../../assets/sliders/4.jpg";
import img5 from "../../../assets/sliders/5.jpg";
import SliderContent from "./SliderContent/SliderContent";

const sliderDoc = [
  {
    img:img1,
    title:
      "where imagination comes to life! Step into a world of wonder and delight as you enter our vibrant toy emporium. Nestled in the heart of [Your City], our toy shop is a haven for children and adults alike.",
  },
  {
    img:img2,
    title:
      "we believe in the power of play. Our carefully curated collection of toys is designed to spark creativity, ignite curiosity, and bring smiles to young faces. From classic toys that have stood the test of time to the latest innovations, we have something for every child's unique interests and preferences.",
  },
  {
    img:img3,
    title:
      "Explore our shelves lined with colorful stuffed animals, educational puzzles, action figures, board games, and more. Whether your little one dreams of becoming an astronaut, a princess, or a superhero, our diverse range of toys caters to all interests and ages. We pride ourselves on offering high-quality toys from renowned brands, ensuring that every playtime is filled with joy, laughter, and lasting memories.",
  },
  {
    img:img4,
    title:
      "Our friendly and knowledgeable staff are always ready to assist you in finding the perfect toy for birthdays, holidays, or any special occasion. We understand the importance of finding that one special toy that captures a child's heart and sparks their imagination.",
  },
  {
    img:img5,
    title:
      "today and embark on a magical journey through the world of toys. Experience the joy of watching children's faces light up as they discover their new favorite playmate. We look forward to sharing the wonders of childhood with you and helping you create cherished moments that will be remembered for a lifetime.",
  },
];
const SliderBanner = () => {


    
  return (
    <div >
      <Carousel autoPlay={true} showThumbs={false} >
        {sliderDoc.map((item, index) => (
          <SliderContent key={index} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default SliderBanner;
