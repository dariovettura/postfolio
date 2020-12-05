// JavaScript Document
import React from 'react';
import Gridd from './Gridd';
import Header from './Header';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import Header_show from "./Header_show";
import ReadMoreReact from 'read-more-react';
import {AnimatePresence, motion} from 'framer-motion';
import Footer from './Footer';

const pageVariants = {
	in:{opacity:1,},
	out: {opacity:0 },
	
	
	
};
const pageTransition = {
	duration:0.5,
		transition:"Linear"
}

function Showposts() {
return (
	
	<div>
	<Header_show/>
		 <motion.div >
<div className="Showposts">
	<div className="sidebarr">

		<Gridd/>
		
	 </div>
	
	
<div className="padding-destra">
	
	
    
		
  <div id="showpost1" className="card container-fluid ">
    <div className="card-header">
		
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Web Platform/Portfolio</h4>
 
        </div>
      </div>
		</div>
   
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post1 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ "From an idea of the photographer / videomaker Andrea to combine his works on a platform dedicated to Cocktails Bars, manually inserted on an exclusive and geo-localized map.[Tools:JS,CSS,Bootstrap, Adobe suite]"
							}
							 readMoreText="...more" />
      </h3>
		 <a href="https://drinkinstreet.it" target="_blank" >https://drinkinstreet.it</a>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>

  <div id="showpost2" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Web Platform/Portfolio</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post2 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ " From an idea of the photographer / videomaker Andrea to combine his works on a platform dedicated to Cocktails Bars, manually inserted on an exclusive and geo-localized map.[Tools:JS,CSS,Bootstrap, Adobe suite]" } readMoreText="...more" />
      </h3>
		 <a href="https://drinkinstreet.it" target="_blank" >https://drinkinstreet.it</a>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>

  </div>

  <div id="showpost3" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Poster</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post3 slide"></div>
	<div className="col-12 post3-1 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ "Poster 1" } readMoreText="...more" />
      </h3>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>

  <div id="showpost4" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Web Platform/Portfolio</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post4 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ "Web designer Portfolio" } readMoreText="...more" />
      </h3>
		 <a href="https://dariovettura.com" target="_blank" >https://dariovettura.com</a>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>

  <div id="showpost5" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Poster</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post5 slide"></div>
		    <div className="col-12 post5-1 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ " Poster 2" } readMoreText="...more" />
      </h3>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>

  <div id="showpost6" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Web Platform/Portfolio</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post6 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ " Web designer Portfolio" } readMoreText="...more" />
      </h3>
			 <a href="https://dariovettura.com" target="_blank" >https://dariovettura.com</a>
		
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>

  <div id="showpost7" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Poster</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post7 slide"></div>
		   <div className="col-12 post7-1 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ " Poster 3" } readMoreText="...more" />
      </h3>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>

  <div id="showpost8" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Web site/Pub Menu
</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post8 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ " The menu is quickly reachable by customers via QR code on each table. The Manager can update his own products independently through CSM.[Tools:PHP,JS,CSS,Bootstrap, Adobe suite]" } readMoreText="...more" />
      </h3>
			 <a href="https://beergardennapoli.it" target="_blank" >https://beergardennapoli.it</a>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>

  <div id="showpost9" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Web site/Pub Menu</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post9 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ "  The menu is quickly reachable by customers via QR code on each table. The Manager can update his own products independently through CSM.[Tools:PHP,JS,CSS,Bootstrap, Adobe suite]" } readMoreText="...more" />
      </h3>
		<a href="https://beergardennapoli.it" target="_blank" >https://beergardennapoli.it</a>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>

  <div id="showpost10" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Web site/Cocktails bar Menu
</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post10 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ " Landing page including PDF menu and blog to give added value to the company's web communication project.[Tools:PHP,JS,CSS,Bootstrap,Adobe suite]" } readMoreText="...more" />
      </h3>
			<a href="https://dopoteatronapoli.it" target="_blank" >https://dopoteatronapoli.it</a>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>

  <div id="showpost11" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Web site/Cocktails bar Menu</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post11 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ " Landing page including PDF menu and blog to give added value to the company's web communication project.[Tools:PHP,JS,CSS,Bootstrap,Adobe suite]" } readMoreText="...more" />
      </h3>
		<a href="https://dopoteatronapoli.it" target="_blank" >https://dopoteatronapoli.it</a>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>

  <div id="showpost12" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Poster</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post12 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ " Poster 4" } readMoreText="...more" />
      </h3>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>

  <div id="showpost13" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>E-Commerce
</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post13 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ " Online store concept made with Wordpress and Woocommerce.[Tools:PHP,JS,CSS,Adobe suite]"}
							  readMoreText="...more" />
      </h3>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>

  <div id="showpost14" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Poster</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post14 slide"></div>
		   <div className="col-12 post14-1 slide"></div>
		   <div className="col-12 post14-2 slide"></div>
		   <div className="col-12 post14-3 slide"></div>
		   <div className="col-12 post14-4 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ "Poster 5" } readMoreText="...more" />
      </h3>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>

  <div id="showpost15" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Web App
</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post15 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ " School project: loaded like normal web pages, but behave similarly to native applications when used on a mobile device.[Tools:JS,CSS,Bootstrap,Adobe suite]" } readMoreText="...more" />
      </h3>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>

  <div id="showpost16" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Poster</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post16 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ " Poster 6" } readMoreText="...more" />
      </h3>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>

  <div id="showpost17" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Web Site/Booking system
</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post17 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ " Website with a fully customizable external booking system included. It is integrated with a mobile app for management.[Tools:JS,CSS,Bootstrap,Adobe suite]" } readMoreText="...more" />
      </h3>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>

  <div id="showpost18" className="card container-fluid">
    <div className="card-header">
      <div className="row">
        <div className=" logocard"></div>
        <div className=" infocard">
          <h3>dariovettura</h3>
          <h4>Web Site/Booking system</h4>
        </div>
      </div>
    </div>
    <div className="card-body showpost1">
      <Slider className="row slaider2" {...settings}>
        <div className="col-12 post18 slide"></div>

      </Slider>
    </div>
    <div className="card-footer ">
      <h3><strong>21,325 views</strong></h3>
      <h3><strong>dariovettura</strong>
        <ReadMoreReact text={ " Website with a fully customizable external booking system included. It is integrated with a mobile app for management.[Tools:JS,CSS,Bootstrap,Adobe suite]" } readMoreText="...more" />
      </h3>
    </div>
    <div className="card-footer ">
      <h5>Nov 2020</h5>
    </div>
  </div>
		
</div>
	
	</div>
			  </motion.div>
		   <Footer/>
	
		</div>
		

);
}

const settings = {
arrows:true,
autoplay:false,
dots: true,
slidesToShow: 1,
autoplaySpeed:1500,
slidesToScroll: 1,
pauseOnHover:false,
pauseOnFocus:false,
};

export default Showposts;