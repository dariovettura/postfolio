import React from 'react';
import {Link} from 'react-router-dom';
import Gridd from './Gridd';
import Gridd2 from './Gridd2';
import Showposts from './Showposts';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Tab () {
  return (<div>

		   
		  
	  <div className="tab">
	  
	  <div className="container-fluid herotab">
  	<div className="row">
  	<Link to="/" >
	  <div className="col-6 gridd"></div>
	  </Link>
	  <Link to="/Gridd2" >	
  		<div className="col-6 tagg"></div>
	   </Link>
  	</div>
  </div>
	  
	  </div>
	
		  </div>
	   );
}

export default Tab;