// JavaScript Document
import React from 'react';
import {Link} from 'react-router-dom'

function Header_show() {
  return (
	  
	  <div className="Header">
	   <Link to="/">
	  <h3 style={{ fontSize:'2em',padding:8,color:'#222',fontFamily:'Engagement, cursive'}}  > Postsfolio
	
		 </h3>
	  	 </Link>
	  </div>
	  
	  
	   );
}

export default Header_show;