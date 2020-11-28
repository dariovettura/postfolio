// JavaScript Document

import React from "react";
import {Link} from 'react-router-dom';
import PerStories from '../storie/Personalstories';

function Infostories() {

   
    return (
      <div className="container-fluid infostories">
       
        <div  className="row text-center  ">
			 <Link to="/Stories">
         <div className="col-3  infoicon"><div className="bordero2"> <div className="posters "></div></div>
		<h4>Posters</h4>
			</div>
				  </Link>
			 <Link to="/Stories">
			<div className="col-3  infoicon"><div className="bordero2"><div className="websites"></div></div>
			<h4>Websites</h4></div>
				  </Link>
			 <Link to="/Stories">
			<div className="col-3 infoicon "><div className="bordero2"><div className="about"></div></div>
			<h4>About</h4></div>
			 </Link>
			
			
        </div>
      </div>
    );

}
 
export default Infostories;

