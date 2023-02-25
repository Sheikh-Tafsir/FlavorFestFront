import {React,useEffect,useState} from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import Headernavbar from './Headernavbar';

const Dash = () => {
    const clientId = '1000835904597-ut38ah9s6238riqo9iv189fpcje1fc37.apps.googleusercontent.com';
    const [ profile, setProfile ] = useState(null);
    let localStorageUsername=localStorage.getItem("localStorageUsername");
    
    //logout from page
    const logOut = () => {
        setProfile(null);
        localStorage.setItem("localStorageLoggedState",0);
        localStorage.setItem("localStorageUsername",null);  
        window.location.href = "/";
    };
    return (
        <>
            <Headernavbar/>
            <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
            <h1>{localStorageUsername}</h1>
        </>
    
  )
}

export default Dash