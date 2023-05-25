import Lottie from "lottie-react";
import LoginAnimation from "../../assets/login-and-sign-up.json"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../AuthContext/AuthContext";
const Register = () => {
  const [error,setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    

    useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "Registation"
      
    }, [location]);


    const from = location.state || "/"
    const {createuser} = useContext(UserContext)
    const handelregister = (e) =>{
      setError('')
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.foto.value;
      if(password.length < 6){
        return setError("your Password Must be At last 6 charecter")
       
      }
    createuser(name,email,password,image)
    .then(result => {
    
        if(result){
            //
            navigate(from, {replace:true})
        }
    })
    }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
                <div className="w-[600px]">


                <Lottie animationData={LoginAnimation} loop={true} />
                </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handelregister}>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Foto URL</span>
              </label>
              <input
                type="url"
                name="foto"
                placeholder="Foto URL"
                className="input input-bordered"
              />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-error text-white" type="submit">Login</button>
            </div>
            <p className="text-red-400">{error && error}</p>
            <p>if you are new please <Link className="underline text-red-400" to="/register">Register</Link> first</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
