import React from 'react'
import {Link, NavLink} from "react-router-dom";
import { Button } from 'react-bootstrap';
import styled from "styled-components";
import Signup from './Signup';
import Headernavbar from './Headernavbar';
import Heromain from './Heromain';
import Footer from './Footer'

import "../css pages/Homepage.css";
import Review from './Review';

const Homepage = () => {
  return (
    <div>
      
      <Headernavbar/>
      <Heromain/>
      <Review/>
      <Footer/>
    </div>
    
  )
}

export default Homepage