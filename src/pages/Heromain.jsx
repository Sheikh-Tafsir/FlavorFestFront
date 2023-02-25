import React from 'react'
import { Button } from 'react-bootstrap';
import {Link, NavLink} from "react-router-dom";
import "../css pages/Heromain.css"
const Heromain = () => {
  return (
    <>
        <div className="heromainBackground">

        </div>
        
        <div className="heromainBackgroundSec">
          <div className="heromainBackgroundSecParts">
            <div className="heromainBackgroundSecPartsBack">
              <Link to="/" className="heromainBackgroundSecPartsLink">Fast Food</Link><br/>
            </div>
          </div>
          <div className="heromainBackgroundSecParts">
            <div className="heromainBackgroundSecPartsBack">
              <Link to="/" className="heromainBackgroundSecPartsLink">Set Menu</Link><br/>
            </div>
          </div>
        </div>
        
        <div className="heromainBackgroundThi">
          <div className="heromainBackgroundThiBack">
            <Link to="/" className="heromainBackgroundThiLink">Our Specials</Link><br/>
          </div>
        </div>

        <div className="heromainBackgroundFor">
          <div className="heromainBackgroundForParts">
            <div className="heromainBackgroundForPartsBack">
              <Link to="/" className="heromainBackgroundForPartsLink">Street Food</Link><br/>
            </div>
          </div>
          <div className="heromainBackgroundForParts">
            <div className="heromainBackgroundForPartsBack">
              <Link to="/" className="heromainBackgroundForPartsLink">Drinks</Link><br/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Heromain