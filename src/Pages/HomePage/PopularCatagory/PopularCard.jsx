import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const PopularCard = ({img,name,dec}) => {

  useEffect(()=>{
    Aos.init()
  },[])

  return (
    
    <div className="card md:w-96 bg-base-100 shadow-xl  " data-aos="flip-down">
      <Link to="/alltoys">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{dec}</p>
      </div>
      <figure>
        <img
        
          src={img}
          alt="Shoes"
        />
      </figure>
      </Link>
    </div>
    
    
  );
};

export default PopularCard;
