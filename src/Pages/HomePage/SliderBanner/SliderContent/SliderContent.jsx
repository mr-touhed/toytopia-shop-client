import { Link } from "react-router-dom";

const SliderContent = ({item}) => {
   
    const {img,title} = item


    
    return (
        <div className="hero md:min-h-screen h-[60vh]" style={{ backgroundImage: `url("${img}")` }}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Toytopia</h1>
      <p className="mb-5">{title}</p>
      <Link to="/login" className="btn bg-[#FF6799] hover:bg-[#fa9dbc] border-[#FF6799]">Get Started</Link>
    </div>
  </div>
</div>
    );
};

export default SliderContent;