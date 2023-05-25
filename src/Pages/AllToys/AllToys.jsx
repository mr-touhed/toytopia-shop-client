import { useEffect, useState } from "react";
import { useLoaderData,  useLocation } from "react-router-dom";
import ToysCard from "./ToysCard";

const AllToys = () => {
  const {totalProducts} = useLoaderData()
  const [toys,setToys] = useState([])
  const [search,setSearch] = useState('')
  const [sort,setSort] = useState('')
  const location = useLocation();
  
  
  // variable for pagination 
  const [currentPage,setCurrentPage] = useState(1)
  const showParPage = 20;

  const pagesCount = Math.ceil(totalProducts / showParPage)
  
  const pages = [...Array(pagesCount+1).keys()].slice(1) // make page array
  
  const lastIndex = currentPage * showParPage; 
  const firstIndex = lastIndex - showParPage;

  console.log(pages)

  useEffect(()=>{
    fetch(`https://toytopia-shop-server.vercel.app/toys?skip=${firstIndex}&limit=${lastIndex}`)
    .then(res => res.json())
    .then(data => setToys(data))

    
},[firstIndex,lastIndex])


  const ChangePage = (i) =>{
    setCurrentPage(i);
  }

  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Toy || All Toys"
    
  }, [location]);


    // data sorting 
    useEffect(()=>{
        let order = 0;
        if(sort === "to low"){
            order = -1;
        }else if(sort === "to high"){
            order = 1;
        }

        if(order == -1){
            fetch(`https://toytopia-shop-server.vercel.app/toys?sort=${order}`)
            .then(res => res.json())
            .then(result => {
                setToys(result);
            })
        }
        if(order == 1){
            fetch(`https://toytopia-shop-server.vercel.app/toys?sort=${order}`)
            .then(res => res.json())
            .then(result => {
                setToys(result);
            })
        }
        
       
    },[sort])

    // data searching 
    useEffect(()=>{

        if(search){
            fetch(`https://toytopia-shop-server.vercel.app/toySearch/${search}`)
            .then(res => res.json())
            .then(data => setToys(data))
        }
        
    },[search])
  return (
    <>
    <div className="flex justify-center">
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
        <select className="select select-bordered select-sm w-full max-w-xs" onChange={(e)=>setSort(e.target.value)}>
          <option disabled defaultValue="selected">
            sort
          </option>
          <option>to low</option>
          <option>to high</option>
        </select>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 my-6">
    {
        toys.map(toy => <ToysCard key={toy._id} toy={toy}/>)
    }
    </div>
    <div className="text-center">
    <div className="btn-group">
        {
          pages.map((page) => <button key={page} onClick={() => ChangePage(page)} className={`btn ${currentPage === page ? "btn-active" : ""}`}>{page}</button>)
        }
        </div>
    </div>
    </>
  );
};

export default AllToys;
