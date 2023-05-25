import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../AuthContext/AuthContext";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
  const [search,setSearch] = useState('')
  const [sort,setSort] = useState('')
  const location = useLocation();
  const [products,setProducts] = useState([])
  const {user} = useContext(UserContext);
  const email = user.email;

      // data sorting 
      useEffect(()=>{
        let order;
        if(sort === "to low"){
            order =1;
        }else if(sort === "to high"){
            order =-1;
        }

        if(order){
            fetch(`https://toytopia-shop-server.vercel.app/alltoys?sort=${order}&email=${email}`)
            .then(res => res.json())
            .then(result => {
              setProducts(result);
            })
        }
        
       
    },[sort,email])

    // data searching 
    useEffect(()=>{

        if(search){
            fetch(`https://toytopia-shop-server.vercel.app/toySearch/${search}`)
            .then(res => res.json())
            .then(data => setProducts(data))
        }
        
    },[search])





  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ToyTo||MyToys"
    
  }, [location]);


   
    useEffect(()=>{
        fetch(`https://toytopia-shop-server.vercel.app/alltoys/?email=${email}`)
        .then(res => res.json())
        .then(data => {
          
            setProducts(data)
        })
    },[email])


    const handelRemove = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
               fetch(`https://toytopia-shop-server.vercel.app/toys/${id}`,{
                method: "DELETE",
                headers:{
                    "content-type":"application/json"
                }
               })
               .then(res => res.json())
               .then(result => {
                    if(result.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          const presentData = products.filter(product => product._id !== id)
                          setProducts(presentData)
                    }
               })
              
            }
          })
    }

    return (
      <>
      <div className="flex justify-center my-6">
      <div className="w-1/2 mr-8">
        <input
        onChange={(e) => setSearch(e.target.value)}
          type="search"
          name=""
          placeholder="search.."
          id=""
          className="input input-bordered input-sm w-full "
        />
      </div>
      <div>
        <select className="select select-bordered select-sm w-full max-w-xs" onChange={(e)=>{setSort(e.target.value)}}>
          <option disabled selected>
            sort
          </option>
          <option >to low</option>
          <option>to high</option>
        </select>
      </div>
    </div>
        <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Product Name</th> 
        <th>Price</th> 
        <th>quantity</th> 
        <th>rating</th> 
        <th>Edit</th> 
        <th>Remove</th>
      </tr>
    </thead> 
    <tbody>
      
      {
        products.map((item,index) => {
          return  <tr key={item._id}>
            <th>{index +1 }</th> 
            <td>{item.name}</td> 
            <td>{item.price}</td> 
            <td>{item.quantity}</td> 
            <td>{item.rating}</td> 
            <td>
                <Link to={`/edit/${item._id}`}>
                <PencilSquareIcon className="w-6 h-6 text-lime-300"/>
                </Link>
            </td> 
            <td >
            
                <TrashIcon onClick={()=>handelRemove(item._id)} className="w-6 h-6 text-red-700 cursor-pointer "/>
                
            </td>   
          </tr>
        })
      }
     
    </tbody> 
   
  </table>
</div>
</>
    );
};

export default MyToys;