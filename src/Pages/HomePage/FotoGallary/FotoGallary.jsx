import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "./Fotogallary.css"
import img1 from "../../../assets/gallary/1.jpg"
import img2 from "../../../assets/gallary/2.jpg"
import img3 from "../../../assets/gallary/3.jpg"
import img4 from "../../../assets/gallary/4.jpg"
import img5 from "../../../assets/gallary/5.jpg"
import img6 from "../../../assets/gallary/6.jpg"
import img7 from "../../../assets/gallary/7.jpg"
import Aos from "aos";
import { useEffect } from "react";
import GallaryImg from "./GallaryImg";
// eslint-disable-next-line
const imggallary = [img1,img2,img3,img4,img5,img6,img7] 
const FotoGallary = () => {

useEffect(()=>{
  Aos.init()
},[])
    const onInit = () => {
        // console.log('lightGallery has been initialized');
    };

  return (
    <div className="p-6 bg-base-200"  >
        <h2 className="text-3xl text-center mb-8">Gallary</h2>
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}  >
        
        

      <GallaryImg  img={img1} data-aos="fade-right"/>
      <GallaryImg  img={img2} data-aos="zoom-in"/>
      <GallaryImg  img={img3} data-aos="fade-left"/>
      <GallaryImg  img={img4} data-aos="fade-right"/>
      <GallaryImg  img={img5} data-aos="fade-left"/>
      <GallaryImg  img={img6} data-aos="fade-right"/>
      <GallaryImg  img={img7} data-aos="fade-left"/>
       
        
        
      </LightGallery>
    </div>
  );
};

export default FotoGallary;
