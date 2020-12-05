import React from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';
import CookieConsent from "react-cookie-consent";
import ReadMoreReact from 'read-more-react';
import Slaider from './Slaider'; 
import Tab from './Tab';
import Gridd from './Gridd';
import Gridd2 from './Gridd2';
import Showposts from './Showposts';
import Infostories from './Infostories';
	import Header from './Header';
import Cookies from './Cookies';

import PerStories from '../storie/Personalstories';


const pageVariants = {
	in:{opacity:1},
	out: {opacity:0 },
	initial:{opacity:0},
	
	
	
};
const pageTransition = {
	duration:0.5,
		transition:"Linear"

}

function Home() {
	
	const location = useLocation();
	
  return (
	  
	  <div>
	
	<Router>  
	  <AnimatePresence exitBeforeEnter>
		  <Switch  key={location.pathname}>
	 
	  <Route exact path="/Stories" component={PerStories}/>
			   <Route exact path="/Showposts" component={Showposts}/>
	    <Route exact path="/Cookies" component={Cookies}/>
			  
	     
	 
	  <div >
	
	
    <div className="home">
	     
	  <section id="hero">
<div className="container-fluid hero">
  <div className="row rigainfo1 d-flex align-items-center text-center">
	  
	  <Link to="/Stories">
    <motion.div className="col-1 bordero"
	  whileTap={{
	backgroundImage:"linear-gradient(white,white),radial-gradient(circle at  top, red, yellow)",


	}}>
      <div className="imghero"></div>
    </motion.div>
	  </Link>
	  
    <div className="col">
	 
      <div className="postshero">
        <h2>18</h2>
        <h3>Posts</h3>
      </div>
    </div>
    <div className="col">
      <div className="followershero">
        <h2>2M</h2>
        <h3>Followers</h3>
      </div>
    </div>
    <div className="col">
      <div className="followinghero">
        <h2>1000</h2>
        <h3>Followings</h3>
      </div>
    </div>
  </div>
  <div className="row rigainfo2">
    <div className="col-12">
      <h1>Dario Vettura</h1>
      <h3>Web Designer</h3>
	
	   <h4>🎓 Ilas graduate. Italian Academy of Visual Communication.</h4>
	   <h5>
	  <ReadMoreReact text={ "React App/ HTML5 / CSS3 / Responsive and Adaptive Design / jQuery / Bootstrap / SEO - Search Engine Optimization / Web research / Wordpress / Material handling / Color theory / Typography / Composition."}
                min={80}
                ideal={100}
                max={200}
                readMoreText="...more"/>
	  </h5>
	
	  <a href="https://www.linkedin.com/in/dario-vettura-347ba51b2/" target="_blank" >https:/linkedin/dario-vettura</a>
	 


	  


      <h6>Followed by <strong>Stalkers</strong> and 10 <strong>other</strong></h6>
    </div>
  </div>
</div>
	  <section className="contacts">
	<div className="container-fluid contacts-btn">
	  <div className="row text-center">
	<a target="_blank" href="http://m.me/dario.vettura"> <div className="col-6  contact-btn"><h3 className="btn-primary">Messenger</h3></div></a>
	<a target="_blank" href="https://mail.google.com/mail/?view=cm&source=mailto&to=d.vettura@gmail.com"><div className="col-6 contact-btn"><h3 className="btn-primary-outline">Email</h3></div></a>
	  </div>
	  </div>
	 </section>
	  
	  
	  
		</section>
	
	  <Tab/>
	   <Route exact path="/Gridd2" component={Gridd2}/>
	  <Route exact  path="/" component={Gridd}/>
		
	   
	  
	
	 
	
	  
    </div>
		  </div>
			 
	   </Switch>
	 </AnimatePresence>
		
	   </Router>
	  <CookieConsent
	  contentStyle={{margin:"0px",position:"relative"}}
  location="bottom"
  buttonText="Sure man!!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#000" ,fontSize: "13px",}}
  buttonStyle={{ color: "#000", fontSize: "13px",background: "#ff8800",margin:"5px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "13px" }}><Link style={{ fontSize: "13px",color:"#fff",textDecoration:"underline"}} to="/Cookies">See the cookies and privacy policy</Link></span>
</CookieConsent>
	  
		  </div>
  );
}

export default Home;