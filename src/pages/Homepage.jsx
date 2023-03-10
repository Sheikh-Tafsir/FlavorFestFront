import React from 'react'
import Headernavbar from './Headernavbar';
import Heromain from './Heromain';
import Footer from './Footer'
import Shoppingcart from './Shoppingcart';

import "../css pages/Homepage.css";
import Review from './Review';

const Homepage = () => {
  return (
    <div>
      
      <Headernavbar/>
      <Shoppingcart/>
      <Heromain/>
      <Review/>
      <Footer/>
    </div>
    
  )
}

export default Homepage