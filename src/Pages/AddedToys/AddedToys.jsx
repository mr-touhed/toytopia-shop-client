import { InboxArrowDownIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../AuthContext/AuthContext";
import Swal from "sweetalert2";

const AddedToys = () => {
  const { user } = useContext(UserContext);
   const { displayName, email } = user;


  // useEffect for scroll to top and change title 
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Toy || Add toys"
    
  }, [location]);


  const addNewProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const catagory = form.catagory.value;
    const price = parseFloat(form.price.value);
    const img = form.img.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const seller_name = displayName;
    const seller_email = email;

    const newProduct = {
      name,
      img,
      catagory,
      price,
      rating,
      quantity,
      description,
      seller_name,
      seller_email,
    };

    fetch('https://toytopia-shop-server.vercel.app/toys',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(result => {
        if(result.insertedId){
            form.reset()
            Swal.fire(
                "add New Product SuccessFully"
              )
        }
        
    })
  };

  return (
    <div className="flex gap-5">
      <div className="w-96 p-9 border-r-2">
        <Link
          to="/mytoys"
          className="text-1xl font-semibold cursor-pointer border rounded-lg p-4"
        >
          <InboxArrowDownIcon className="w-8 h-8 inline mr-4 text-error" />
          My Toys
        </Link>
      </div>
      <div className=" w-1/2 mx-auto p-8">
        <h2 className="text-2xl text-center font-semibold"> Add New Product</h2>
        <form
          action=""
          className="grid grid-cols-2 w-full gap-4"
          onSubmit={addNewProduct}
        >
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="Product Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">category</span>
            </label>
            <select name="catagory" className="input input-bordered">
              <option value="Unicorn">Unicorn</option>
              <option value="Plush_Animals">Plush Animals</option>
              <option value="Glitter_eyes_Plush">Glitter eyes Plush</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              required
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              required
              name="rating"
              type="text"
              placeholder="Rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              required
              name="quantity"
              type="text"
              placeholder="quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">FotoURL</span>
            </label>
            <input
              required
              type="url"
              name="img"
              placeholder="Foto URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-2 ">
            <label className="label">
              <span className="label-text">Detail</span>
            </label>
            <textarea
              required
              name="description"
              type="text"
              placeholder="description"
              className="input input-bordered h-56"
            ></textarea>
          </div>
          <div className="form-control col-span-2 ">
            <input
              type="submit"
              value="Add Product"
              className="btn btn-error"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddedToys;
