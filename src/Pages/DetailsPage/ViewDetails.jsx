import { Link, useLoaderData, useLocation } from "react-router-dom";
import logo from "../../assets/trusted_1.avif";
import {
  CircleStackIcon,
  CubeIcon,
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
  GiftTopIcon,
  ShoppingBagIcon,
  TagIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { useEffect } from "react";
const ViewDetails = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Toy || Details"
    
  }, [location]);







  const toy = useLoaderData();
  const { name, price, quantity, rating, img, description,catagory,seller_name } = toy;
  return (
    <div className=" min-h-screen bg-base-200 flex p-8 gap-9">
      <div className="w-[700px] ">
        <img src={img} alt="" className=" rounded-lg shadow-lg" />
      </div>
      <div className="max-w-[700px]">
        <h2 className="text-5xl font-bold mb-6"> {name}</h2>
        <div className="space-y-3">
          <p className="flex items-center">
            <CursorArrowRaysIcon className="w-6 h-6" /> rating: {rating}
            <div className="rating w-13 ml-2">
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
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </p>
          <p className="flex items-center h-8">
            <CurrencyDollarIcon className="w-6 h-6 mr-1" /> price: ${price}
          </p>
          <p className="flex">
            {" "}
            <TagIcon className="w-6 h-6 mr-1" /> catagory: {catagory}
          </p>
          <p className="flex">
            <CircleStackIcon className="w-6 h-6 mr-1" />
            quantity: {quantity}
          </p>
          <p className="flex">
            <UsersIcon className="w-6 h-6 mr-1" />
            Seller: {seller_name}
          </p>
        </div>
        <Link   className="btn btn-error text-white my-4">
          {" "}
          <ShoppingBagIcon className="w-6 h-6" /> Order Now
        </Link>
        <div className="grid grid-cols-2 p-6 rounded-lg border-2 mt-6">
          <div className="p-3 flex items-center gap-3">
            <CubeIcon className="w-12 h-12" />
            <h2>Free Delivery</h2>
          </div>
          <div className="p-3 flex items-center gap-3">
            <CurrencyDollarIcon className="w-12 h-12" />
            <h2>Big Savings</h2>
          </div>
          <div className="p-3 flex items-center gap-3">
            <UserIcon className="w-12 h-12" />
            <h2>Customer Care</h2>
          </div>
          <div className="p-3 flex items-center gap-3">
            <GiftTopIcon className="w-12 h-12" />
            <h2>Gift Voucher</h2>
          </div>
        </div>

        <div className="mt-6 text-center">
          <img src={logo} alt="" />
        </div>

        <p className="mt-8"> {description}</p>
      </div>
    </div>
  );
};

export default ViewDetails;
