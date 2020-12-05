import React from 'react';
import Stories, { WithSeeMore } from 'react-insta-stories';
import Header_show from "../components/Header_show";

function PerStories() {
	
  return (
	  <div>
	  <Header_show/>
	  
	 
	      <div className="storia">
	   <div className="container-fluid">
      <div className="row justify-content-center ">

        <div className="col-md-4">
	    <div className="stories">
					<Stories  width={'100%'} height={'calc(100vh - 50px)'} loop keyboardNavigation defaultInterval={8000} stories={stories2} onStoryEnd={(s, st) => console.log('story ended', s, st)} onAllStoriesEnd={(s, st) => console.log('all stories ended', s, st)} onStoryStart={(s, st) => console.log('story started', s, st)} />
				</div>
	  
	  </div>
</div>
</div>
	  
	  
	    </div>
		   </div>
  );
}




const stories2 = [
	

	
	
	
	{
		content: ({ action, story }) => {
			return <WithSeeMore story={story} action={action}><div style={{ background: '#222', padding: 20 ,width:'100%'}}>
		<div className="post1">
		</div>
				
				
			</div></WithSeeMore>
		},
		seeMoreCollapsed: ({ toggleMore, action }) => <p style={customSeeMore} onClick={() => toggleMore(true)}><span>⌃</span><br></br> See More</p>,
		seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: '#222', color:'white' }}>
	
	
		<div className="container-fluid hero_video" id="posts">
    <div className="row riga_video d-flex align-items-center text-center ">
      <div className="col-12 testo ">
        <h2 style={{ }}>DRINKINST</h2>
        <h3 style={{ color:'#ff8800'}}>Web Platform/Portfolio</h3>
        <h4 style={{ color:'gray'}}>Sep/20</h4>
        <p>TFrom an idea of the photographer / videomaker Andrea to combine his works on a platform dedicated to Cocktails Bars, manually inserted on an exclusive and geo-localized map.</p>
        <h5 style={{ color:'#ff8800'}}>Tools:</h5>
        <p>JS,CSS,Bootstrap, <br></br>
          Adobe suite</p>
		  <a href="https://www.drinkinstreet.it/" target="_blank">https://www.drinkinstreet.it/</a>
		  <p className=""  style={{ textDecoration: 'underline',borderRadius:'30px',padding:'5px',marginTop:'20%' }} onClick={close}>Return</p>
      </div>
		 </div>
		 </div>
	
	
	
	
	</div>,
		duration: 7000
	},
	
	{
		content: ({ action, story }) => {
			return <WithSeeMore story={story} action={action}><div style={{ background: '#222', padding: 20 ,width:'100%'}}>
		<div className="post6">
		</div>
				
				
			</div></WithSeeMore>
		},
		seeMoreCollapsed: ({ toggleMore, action }) => <p style={customSeeMore} onClick={() => toggleMore(true)}><span>⌃</span><br></br> See More</p>,
		seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: '#222', color:'white' }}>
	
		<div className="container-fluid hero_video" id="posts">
    <div className="row riga_video d-flex align-items-center text-center ">
      <div className="col-12 testo ">
        <h2 style={{ }}>DARIO VETTURA PORTFOLIO</h2>
        <h3 style={{ color:'#ff8800'}}>Web Site/Portfolio</h3>
        <h4 style={{ color:'gray'}}>Oct/20</h4>
        <p>Web design portfolio</p>
        <h5 style={{ color:'#ff8800'}}>Tools:</h5>
        <p>JS,CSS,Bootstrap, <br></br>
          Adobe suite</p>
		  <a href="https://www.dariovettura.com/" target="_blank">https://www.dariovettura.com/</a>
		  <p className=""  style={{ textDecoration: 'underline',borderRadius:'30px',padding:'5px',marginTop:'20%' }} onClick={close}>Return</p>
      </div>
		 </div>
		 </div>
	
	
	
	
	</div>,
		duration: 7000
	},
	{
		content: ({ action, story }) => {
			return <WithSeeMore story={story} action={action}><div style={{ background: '#222', padding: 20 ,width:'100%'}}>
		<div className="post8">
		</div>
				
				
			</div></WithSeeMore>
		},
		seeMoreCollapsed: ({ toggleMore, action }) => <p style={customSeeMore} onClick={() => toggleMore(true)}><span>⌃</span><br></br> See More</p>,
		seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: '#222', color:'white' }}>
		
		<div className="container-fluid hero_video" id="posts">
    <div className="row riga_video d-flex align-items-center text-center ">
      <div className="col-12 testo ">
        <h2 style={{ }}>BEER GARDEN</h2>
        <h3 style={{ color:'#ff8800'}}>Web site/Menu</h3>
        <h4 style={{ color:'gray'}}>Oct/20</h4>
        <p>The menu is quickly reachable by customers via QR code on each table.
          The Manager can update his own products independently through CSM.</p>
        <h5 style={{ color:'#ff8800'}}>Tools:</h5>
        <p>PHP,JS,CSS,Bootstrap, <br></br>
          Adobe suite</p>
		  <a href=" https://www.beergardennapoli.it/" target="_blank">https://www.beergardennapoli.it</a>
		  <p className=""  style={{ textDecoration: 'underline',borderRadius:'30px',padding:'5px',marginTop:'20%' }} onClick={close}>Return</p>
      </div>
		 </div>
		 </div>
			
		
		</div>,
		duration: 7000
	},
	{
		content: ({ action, story }) => {
			return <WithSeeMore story={story} action={action}><div style={{ background: '#222', padding: 20 ,width:'100%'}}>
		<div className="post10">
		</div>
				
				
			</div></WithSeeMore>
		},
		seeMoreCollapsed: ({ toggleMore, action }) => <p style={customSeeMore} onClick={() => toggleMore(true)}><span>⌃</span><br></br> See More</p>,
		seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: '#222', color:'white' }}>
	
	<div className="container-fluid hero_video" id="posts">
    <div className="row riga_video d-flex align-items-center text-center ">
      <div className="col-12 testo ">
        <h2 style={{ }}>DOPOTEATRO</h2>
        <h3 style={{ color:'#ff8800'}}>Web site/Menu</h3>
        <h4 style={{ color:'gray'}}>Jun/20</h4>
        <p>Landing page including PDF menu and blog to give added value to the company's web communication project.</p>
        <h5 style={{ color:'#ff8800'}}>Tools:</h5>
        <p>PHP,JS,CSS,Bootstrap, <br></br>
          Adobe suite</p>
		  <a href=" https://dopoteatronapoli.it/" target="_blank">https://dopoteatronapoli.it/</a>
		  <p className=""  style={{ textDecoration: 'underline',borderRadius:'30px',padding:'5px',marginTop:'20%' }} onClick={close}>Return</p>
      </div>
		 </div>
		 </div>
	
	
	
	</div>,
		duration: 7000
	},
	
	{
		content: ({ action, story }) => {
			return <WithSeeMore story={story} action={action}><div style={{ background: '#222', padding: 20 ,width:'100%'}}>
		<div className="post17">
		</div>
				
				
			</div></WithSeeMore>
		},
		seeMoreCollapsed: ({ toggleMore, action }) => <p style={customSeeMore} onClick={() => toggleMore(true)}><span>⌃</span><br></br> See More</p>,
		seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: '#222', color:'white' }}>
		<div className="container-fluid hero_video" id="posts">
    <div className="row riga_video d-flex align-items-center text-center ">
      <div className="col-12 testo ">
        <h2 style={{ }}>FUORILUOGO</h2>
        <h3 style={{ color:'#ff8800'}}>Booking system</h3>
        <h4 style={{ color:'gray'}}>May/20</h4>
        <p>Website with a fully customizable external booking system included. It is integrated with a mobile app for management.</p>
        <h5 style={{ color:'#ff8800'}}>Tools:</h5>
        <p>JS,CSS,Bootstrap, <br></br>
          Adobe suite</p>
		  <a href=" http://fuoriloco.altervista.org/wordpress/" target="_blank">https://fuoriluogonapoli.it/</a>
		  <p className=""  style={{ textDecoration: 'underline',borderRadius:'30px',padding:'5px',marginTop:'20%' }} onClick={close}>Return</p>
      </div>
		 </div>
		 </div>
	
	
	
	
	</div>,
		duration: 7000
	},
	{
		content: ({ action, story }) => {
			return <WithSeeMore story={story} action={action}><div style={{ background: '#222', padding: 20 ,width:'100%'}}>
		<div className="post13">
		</div>
				
				
			</div></WithSeeMore>
		},
		seeMoreCollapsed: ({ toggleMore, action }) => <p style={customSeeMore} onClick={() => toggleMore(true)}><span>⌃</span><br></br> See More</p>,
		seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: '#222', color:'white' }}>
	
	<div className="container-fluid hero_video" id="posts">
    <div className="row riga_video d-flex align-items-center text-center ">
      <div className="col-12 testo ">
        <h2 style={{ }}>BARUSO</h2>
        <h3 style={{ color:'#ff8800'}}>E-commerce</h3>
        <h4 style={{ color:'gray'}}>May/20</h4>
        <p>Online store concept made with Wordpress and Woocommerce.</p>
        <h5 style={{ color:'#ff8800'}}>Tools:</h5>
        <p>PHP,JS,CSS,Bootstrap, <br></br>
          Adobe suite</p>
		  <a href=" http://beergardennapoli.altervista.org/wordpress/" target="_blank">https://baruso.it/</a>
		  <p className=""  style={{ textDecoration: 'underline',borderRadius:'30px',padding:'5px',marginTop:'20%' }} onClick={close}>Return</p>
      </div>
		 </div>
		 </div>
	
	
	
	
	
	
	</div>,
		duration: 7000
	},
	
]


const image = {
	display: 'block',
	maxWidth: '100%',
	borderRadius: 4,
}

const code = {
	background: '#eee',
	padding: '5px 10px',
	borderRadius: '4px',
	color: '#333'
}

const contentStyle = {
	background: '#222',
	width: '100%',
	padding: 20,
	color: 'white'
}

const customSeeMore = {
	textAlign: 'center',
	fontSize: 14,
	bottom: 60,
	position: 'relative',
	color:'white'
}




export default PerStories;