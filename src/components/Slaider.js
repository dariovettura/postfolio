import React from "react";
import Slider from "react-slick";

function Slaider() {

   
    return (
      <div className="container-fluid">
       
        <Slider  className="row slaider text-center justify-content-center " {...settings}>
         <div className="col-12 justify-content-center"><div className="work"></div>
			<h4>work</h4></div>
			<div className="col-12 justify-content-center"><div className="work"></div>
			<h4>work</h4></div>
			<div className="col-12 "><div className="work"></div>
			<h4>work</h4></div>
			<div className="col-12 "><div className="work"></div>
			<h4>work</h4></div>
			<div className="col-12 "><div className="work"></div>
			<h4>work</h4></div>
			<div className="col-12 "><div className="work"></div>
			<h4>work</h4></div>
        </Slider>
      </div>
    );

}
 const settings = {
     arrows:false,
       autoplay:false,
        dots: false,
		slidesToShow: 4,
     autoplaySpeed:1500,
  slidesToScroll: 1,
      pauseOnHover:false,
      pauseOnFocus:false,
    };
export default Slaider;

