import React from 'react';
import {Link} from 'react-router-dom';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';
import Showposts from './Showposts';
import Footer from './Footer';
import { HashLink } from 'react-router-hash-link';

function Gridd () {
return (
	 

<div className="Gridd">
	

  <section id="griglia">

    <div className="container-fluid griglia">
      <div className="row posts">

        <motion.div className="col-4 post "
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}
	whileTap={{
	scale:0.9,
	zIndex:100
	}}>
           <HashLink to="/Showposts/#showpost1">
            <div className="icon-video  ">
            </div>
            <div className="post1-1">
            </div>

          </HashLink>
        </motion.div>

        <motion.div className="col-4 post"
	
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}
	whileTap={{
	scale:0.9,
	zIndex:100
	}}>
          <HashLink to="/Showposts/#showpost2">
            <div className="  ">
            </div>
            <div className="post2">
            </div>

          </HashLink>
        </motion.div>
        <motion.div className="col-4 post"
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}
	whileTap={{
	scale:0.9,
	zIndex:100
	}}>
          <HashLink to="/Showposts/#showpost3">
            <div className="icon-caruso">
            </div>
            <div className="post3">
            </div>

          </HashLink>

        </motion.div>
        <motion.div className="col-4 post"
	whileTap={{
	scale:0.9,
	zIndex:100
	}}
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}>
          <HashLink to="/Showposts/#showpost4">

            <div className="  ">
            </div>
            <div className="post4"
	>
            </div>

          </HashLink>

        </motion.div>
        <motion.div className="col-4 post"
	whileTap={{
	scale:0.9,
	zIndex:100
	}}
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}>
          <HashLink to="/Showposts/#showpost5">
            <div className=" icon-caruso ">
            </div>
            <div className="post5">
            </div>

          </HashLink>

        </motion.div>
        <motion.div className="col-4 post"
	whileTap={{
	scale:0.9,
	zIndex:100
	}}
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}>

          <HashLink to="/Showposts/#showpost6">
            <div className=" icon-video ">
            </div>
            <div className="post6-1">
            </div>

          </HashLink>

        </motion.div>
        <motion.div className="col-4 post"
	whileTap={{
	scale:0.9,
	zIndex:100
	}}
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}>
          <HashLink to="/Showposts/#showpost7">
            <div className="icon-caruso">
            </div>
            <div className="post7">
            </div>

          </HashLink>
        </motion.div>
        <motion.div className="col-4 post"
	whileTap={{
	scale:0.9,
	zIndex:100
	}}
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}>
          <HashLink to="/Showposts/#showpost8">
            <div className=" icon-video ">
            </div>
            <div className="post8-1">
            </div>

          </HashLink>
        </motion.div>
        <motion.div className="col-4 post"
	whileTap={{
	scale:0.9,
	zIndex:100
	}}
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}>
          <HashLink to="/Showposts/#showpost9">
            <div className="  ">
            </div>
            <div className="post9">
            </div>

          </HashLink>
        </motion.div>
        <motion.div className="col-4 post"
	whileTap={{
	scale:0.9,
	zIndex:100
	}}
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}>
          <HashLink to="/Showposts/#showpost10">
            <div className=" icon-video ">
            </div>
            <div className="post10-1">
            </div>

          </HashLink>
        </motion.div>
        <motion.div className="col-4 post"
	whileTap={{
	scale:0.9,
	zIndex:100
	}}
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}>
          <HashLink to="/Showposts/#showpost11">
            <div className="  ">
            </div>
            <div className="post11">
            </div>

          </HashLink>
        </motion.div>
        <motion.div className="col-4 post"
	whileTap={{
	scale:0.9,
	zIndex:100
	}}
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}>
          <HashLink to="/Showposts/#showpost12">
            <div className="  ">
            </div>
            <div className="post12">
            </div>

          </HashLink>
        </motion.div>
        <motion.div className="col-4 post"
	whileTap={{
	scale:0.9,
	zIndex:100
	}}
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}>
          <HashLink to="/Showposts/#showpost13">
            <div className=" icon-video ">
            </div>
            <div className="post13-1">
            </div>

          </HashLink>
        </motion.div>
        <motion.div className="col-4 post"
	whileTap={{
	scale:0.9,
	zIndex:100
	}}
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}>
          <HashLink to="/Showposts/#showpost14">
            <div className="icon-caruso">
            </div>
            <div className="post14">
            </div>

          </HashLink>
        </motion.div>
        <motion.div className="col-4 post"
	whileTap={{
	scale:0.9,
	zIndex:100
	}}
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}>
          <HashLink to="/Showposts/#showpost15">
            <div className="icon-video  ">
            </div>
            <div className="post15-1">
            </div>

          </HashLink>
        </motion.div>
        <motion.div className="col-4 post"
	whileTap={{
	scale:0.9,
	zIndex:100
	}}
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}>
          <HashLink to="/Showposts/#showpost16">
            <div className="  ">
            </div>
            <div className="post16">
            </div>

          </HashLink>
        </motion.div>
        <motion.div className="col-4 post"
	whileTap={{
	scale:0.9,
	zIndex:100
	}}
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}>
          <HashLink to="/Showposts/#showpost17">
            <div className=" icon-video ">
            </div>
            <div className="post17-1">
            </div>

          </HashLink>
        </motion.div>
        <motion.div className="col-4 post"
	whileTap={{
	scale:0.9,
	zIndex:100
	}}
	whileHover={{
	scale:1.1,
	zIndex:100,

	}}>
          <HashLink to="/Showposts/#showpost18">
            <div className="  ">
            </div>
            <div className="post18">
            </div>
 </HashLink>
        
        </motion.div>
        
      </div>
    </div>

  </section>
	   <Footer/>

</div>
		 

);
}

export default Gridd;