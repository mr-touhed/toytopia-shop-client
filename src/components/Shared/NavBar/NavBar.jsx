import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/icons.png"
import { useContext } from "react";
import { UserContext } from "../../../AuthContext/AuthContext";
import "./Navbar.css"


const NavBar = () => {
  const {user, logOut} = useContext(UserContext)
  const navigate = useNavigate()
  const signOut = () =>{

    logOut()
    navigate("/")
  }
 
    const userInfo = <div className=" ml-auto dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar userprofile">
      <div className="w-10 rounded-full relative ">
        <img src={user?.photoURL} />
        
      </div>
      <i className="user-email"> <strong>{user?.displayName}</strong></i>
    </label>
    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <Link to="/mytoys" className="justify-between">
          My Toys
          <span className="badge">New</span>
        </Link>
      </li>
      <li><a>Settings</a></li>
      <li onClick={signOut}><a>Logout</a></li>
    </ul>
  </div>


    const menuItems = <>
   <li>
    <Link to="/">Home</Link>
    </li>
   <li>
    <Link to="/alltoys" >All Toys</Link>
    </li>
   {
    user && <> <li>
    <Link to="/mytoys">My Toys</Link>
    </li>
   <li>
    <Link to="/addtoys">Add A Toy</Link>
    </li>
    </>
   }
   <li>
    <Link to="/blog">Blogs</Link>
    </li>

    </>
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <img src={logo} alt="" className="w-9" />
          <a className="btn btn-ghost normal-case text-xl">Toytopia</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {menuItems}
          </ul>
        </div>
        {
          user ? userInfo : <div className="navbar-end">
          <Link className="btn bg-[#FF6799] hover:bg-[#fa9dbc] border-[#FF6799]" to="/login">Login</Link>
        </div>
        }
      </div>
    );
};

export default NavBar;