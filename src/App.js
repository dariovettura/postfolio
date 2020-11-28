
import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import Home from './components/Home';
import Gridd from './components/Gridd';
import Gridd2 from './components/Gridd2';
import Showposts from './components/Showposts';
import PerStories from './storie/Personalstories';
import Header_show from "./components/Header_show";
import './style.css'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';






function App() {
  return (
	    <Router>  
    <div className="App">
	 <Header_show/>
	  
	   <Switch>
	
	<Route exact path="/" component={Home}/>
	<Route exact path="/Showposts" component={Showposts}/>
	<Route exact path="/Stories" component={PerStories}/>
	

	  </Switch>
	
	  
    </div>
	  	</Router>
	  
	  
	  
	 
	  
	  
	  
  );
}




export default App;
