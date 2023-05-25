import { Link, useLoaderData, useLocation } from "react-router-dom";
import { InboxArrowDownIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import { useEffect } from "react";

const EditToys = () => {
    const editToy = useLoaderData()
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "ToyTo||Edit"
      
    }, [location]);
  
    const {name,price,quantity,description,_id} =editToy;
    const editToys = (e) =>{
        e.preventDefault()
        const form = e.target;
        const price = parseFloat(form.price.value);
        const quantity = form.quantity.value;
        const description = form.description.value;
        const editProduct = {price,quantity,description}
       

        fetch(`https://toytopia-shop-server.vercel.app/editToys/${_id}`,{
            method: "PATCH",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(editProduct)
        })
        .then(res => res.json())
        .then(result => {
            if(result.modifiedCount > 0){
                Swal.fire(
                    "Edit Product SuccessFully"
                  )
            }
        })
    } 
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
          <h2 className="text-2xl text-center font-semibold"> Edit Product</h2>
          <form
            action=""
            className="grid grid-cols-2 w-full gap-4"
            onSubmit={editToys}
          >
            
            <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
                defaultValue={name}
                readOnly
              required
              type="text"
              name="name"
              placeholder="Product Name"
              className="input input-bordered"
            />
          </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                defaultValue={price}
                required
                name="price"
                type="text"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available quantity</span>
              </label>
              <input
                required
                defaultValue={quantity}
                name="quantity"
                type="text"
                placeholder="quantity"
                className="input input-bordered"
              />
            </div>
            
            <div className="form-control col-span-2 ">
              <label className="label">
                <span className="label-text">Detail</span>
              </label>
              <textarea
                defaultValue={description}
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
                value="Edit Product"
                className="btn btn-error"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default EditToys;