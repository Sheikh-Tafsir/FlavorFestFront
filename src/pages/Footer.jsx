import {React,useEffect,useState} from 'react'
import { Button } from 'react-bootstrap';
import {Link, NavLink} from "react-router-dom";
import "../css pages/Footer.css"
import {FaRegAddressBook,FaFacebookF,FaInstagram,FaWhatsapp,FaTwitter} from "react-icons/fa"
import {FiFacebook} from "react-icons/fi"

const Footer = () => {
  return (
    <>
        <div className="footerIconBarBack">
            <div className="footerIconBar">
                <Link to="#"><FaFacebookF className="footerIcons" /></Link>
                <Link to="#"><FaInstagram className="footerIcons" /></Link>
                <Link to="#"><FaWhatsapp className="footerIcons" /></Link>
                <Link to="#"><FaTwitter className="footerIcons" /></Link>
            </div>
        </div>
        <div class="footerOpts">
            <div class="footerOpt">
                <p>Resources</p>
                <a href="#">Application</a>
                <a href="#">Documentation</a>
                <a href="#">Systema</a>
                <a href="#">FAQ</a>
            </div>
            <div class="footerOpt">
                <p>Pricing</p>
                <a href="#">Overview</a>
                <a href="#">Premium PLans</a>
                <a href="#">Affiliate Program</a>
                <a href="#">Promotions</a>
            </div>
            <div class="footerOpt">
                <p>Company</p>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Partnerships</a>
                <a href="#">Career</a>
                <a href="#">Press</a>
            </div>
            <div class="footerOpt">
                <p>Social</p>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
            </div>
        </div>
        <div class="footerCopyright">
            <p>All rights reserved by Mr sheikh</p>
        </div>
    </>
    
  )
}

export default Footer