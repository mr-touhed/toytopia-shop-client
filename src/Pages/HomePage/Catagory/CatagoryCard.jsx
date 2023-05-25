import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CatagoryCard = ({catagory}) => {
    const {name,price,rating,img,_id} = catagory
    useEffect(()=>{
      Aos.init()
    },[])

  return (
    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img data-aos="zoom-in" src={img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title" title={name}>{name.slice(0,7)}...</h2>
    <p>price: {price}</p>
    <div className="flex items-center">rating: {rating} 
    
    <div className="rating w-[60px] ml-2 ">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                
                defaultChecked="checked"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
    </div>
    <div className="card-actions justify-end">
      <Link to={`/toys/${_id}`} className="btn btn-error text-white">Details</Link>
    </div>
  </div>
</div>
  );
};

export default CatagoryCard;
