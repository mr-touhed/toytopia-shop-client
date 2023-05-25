import Lottie from "lottie-react";
import LoginAnimation from "../../assets/login-and-sign-up.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../AuthContext/AuthContext";
import googleLogo from "../../assets/google.png";
const Login = () => {
  const { userSign,googleSign } = useContext(UserContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

 

    useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "ToyTo||Login"
      
    }, [location]);

    
  const from = location.state?.from?.pathname || "/";

  
  const handelLogin = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userSign(email, password)
    // eslint-disable-next-line
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        // setError(error.)
      });
  };


  const googleLogin = () =>{
    googleSign()
    // .then(res => res.json())
     // eslint-disable-next-line
    .then(result => {
          
        navigate( from, { replace: true });
      
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <div className="w-[600px]">
            <Lottie animationData={LoginAnimation} loop={true} />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handelLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
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
                required
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-error text-white" type="submit">
                Login
              </button>
            </div>
            <p>{error && error}</p>
            <p>
              if you are new please{" "}
              <Link
                className="underline text-red-400"
                to="/register"
                state={from}
              >
                Register
              </Link>{" "}
              first
            </p>
          </form>
          <div className="divider">OR</div>
          <div className="text-center mb-6">
            <button onClick={googleLogin} className="btn gap-2 bg-[#2b4ba3] hover:bg-[#1f2f5e]">
              Google
              <img src={googleLogo} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
