import { Link } from "react-router-dom";


const ToysCard = ({toy}) => {
    const {name,img,catagory,price,rating,quantity,description,seller_name,_id} = toy;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure ><img src={img} alt="Movie"/></figure>
  <div className="card-body w-[600px]">
    <h2 className="card-title">{name}</h2>
    <p>catagory: {catagory}</p>
    <p>rating: {rating}</p>
    <p>price: {price}</p>
    <p>catagory: {catagory}</p>
    <p>quantity: {quantity}</p>
    <p>seller_name: {seller_name}</p>
    <p>description: {description.slice(0,50)}...</p>
    <div className="card-actions justify-end">
      <Link to={`/toys/${_id}`} className="btn text-white btn-error">Details</Link>
    </div>
  </div>
  
</div>
    );
};

export default ToysCard;