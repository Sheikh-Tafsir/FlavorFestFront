import {React,useEffect,useState} from 'react'
import { Button } from 'react-bootstrap';
import {Link, NavLink} from "react-router-dom";
import "../css pages/Headernavbar.css"
import "../css pages/Shoppingcart.css"
import {BsPerson, BsCart3} from "react-icons/bs"
import {HiBars3} from "react-icons/hi2"
import {FaRegAddressBook} from "react-icons/fa"
import {IoLogInOutline, IoSearchOutline} from "react-icons/io5"
import {SlLogout} from "react-icons/sl"
import logo from "../images/FLogo.png"
import { useGoogleLogout, GoogleLogout } from "react-google-login";
import { gapi } from 'gapi-script';

import Shoppingcart from './Shoppingcart';

const Headernavbar = () => {
  
  let localStorageUsername=localStorage.getItem("localStorageUsername");
  let localStorageLoggedState=localStorage.getItem("localStorageLoggedState");

  const clientId = '1000835904597-ut38ah9s6238riqo9iv189fpcje1fc37.apps.googleusercontent.com';
  var navMenuSlideCount=0;
  var loginMenuSlideCount=0;
  
  //headnavbar sticky when load or scrolled
  window.addEventListener("scroll",function(){
    var header=document.querySelector(".headnavbar");
    header.classList.toggle("sticky",window.scrollY > 90);
  });
  window.addEventListener("load",function(){
    var header=document.querySelector(".headnavbar");
    header.classList.toggle("sticky",window.scrollY > 90);
  });
  

  //
  const logOut = () => {
    localStorage.setItem("localStorageLoggedState",0);
    localStorage.setItem("localStorageUsername",null); 
   
    {signOut()}; 
    window.location.href = "/";
    //alert(localStorageLoggedState + " " + localStorageUsername);
  };

  const onLogoutSuccess = () => {
    console.log("Logout successful");
    localStorage.setItem("localStorageLoggedState",0);
    localStorage.setItem("localStorageUsername",null); 
    localStorage.setItem("localStorageMenuCart",null); 
    /*window.open("/", "_top");*/
    window.location.href = "/";
    //alert(localStorageLoggedState +"yes");
  };
  
  const onLogoutFailure = (err) => {
    console.log("Logout failed: ", err);
    //alert(localStorageLoggedState +"no");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onLogoutFailure,
  });


  //go to login page
  const logIn = () => {
    window.open("/login", "_top");
  }
  //go to login page
  const signUp = () => {
    window.open("/signup", "_top");
  }

  var navbarLoginButs=document.querySelector(".navbarLoginButs");

  const shoppingCartSlideIn = () =>{
    const element = document.querySelector('.shoppingCart');
    element.classList.add("shoppingCartSlideIn");

    
    if (element !== null) {
      // element is found, do something with it
      //alert("found");
      
    } else {
      // element is not found, handle the case
      //alert("hu");
    }
  }

  const navMenuSlideIn = () =>{
    const element = document.querySelector('.navbarMenu');
    navMenuSlideCount=(navMenuSlideCount+1)%2;
    if(navMenuSlideCount&1){
      element.classList.add("navMenuSlideIn");
    }
    else{
      element.classList.remove("navMenuSlideIn");
    }
  }

  const loginMenuSlideIn = () =>{
    const element = document.querySelector('.navbarLoginButs');
    loginMenuSlideCount=(loginMenuSlideCount+1)%2;
    if(loginMenuSlideCount&1){
      element.classList.add("loginMenuSlideIn");
    }
    else{
      element.classList.remove("loginMenuSlideIn");
    }
  }

  

  useEffect(() => {
    const initClient = () => {
        gapi.client.init({
            clientId: clientId,
            scope: ''
        });
    };
    gapi.load('client:auth2', initClient);
  });

  return (
    <>
        <div className="headnavbar" data-aos="fade-down">
          <div className="navbarMenu">
              <Link to="/" className="navbarMenuOpt">Home</Link>
              <a href="#products" className="navbarMenuOpt">Products</a>
              <Link to="/contacts" className="navbarMenuOpt">Contacts</Link>
              <Link to="/dashboard" className="navbarMenuOpt">Profile</Link>
          </div>
         
          <div className="navbarLogo">
            <Link to="/"><img src={logo} alt="pp" border="0" height="70rem" width="170rem"/></Link>
          </div>
          
          <div className="navbarIcon">
            <div><IoSearchOutline className ="navbarIcons"/></div>
            <div><BsCart3 className ="navbarIcons navbarIconsCart" onClick={shoppingCartSlideIn}></BsCart3></div>
            <div className="navbarLoginActiveButs"><BsPerson className ="navbarIcons navbarIconsPers" onClick={loginMenuSlideIn}></BsPerson>
              <div className="navbarLoginButs">
                {(localStorageLoggedState>=1)?
                    <>
                      <div><SlLogout className ="navbarLoginButsIcons"/><Button className ="navbarLoginButsName" onClick={logOut}>Logout</Button></div>
                      {/*
                      <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onLogoutSuccess}
                        onFailure={onLogoutFailure}
                        className="navbarLoginButsName"
                      />*/}            
                    </>
                    

                    :
                    <>
                      <div><FaRegAddressBook className ="navbarLoginButsIcons"/><Link to='/login' className ="navbarLoginButsLink">Login</Link></div>
                      <div><IoLogInOutline className ="navbarLoginButsIcons"/><Link to='/signup' className ="navbarLoginButsLink">Signup</Link></div>
                    </>
                }
              </div>
            </div>
            
          </div>
          
          <div className="navbarToggleButton">
            <HiBars3 className ="navbarIconsBars" onClick={navMenuSlideIn}></HiBars3>
          </div>
        </div>
    </>
  )
}

export default Headernavbar