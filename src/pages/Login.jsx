import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import { GoogleLogin} from 'react-google-login';
import { gapi } from 'gapi-script';
import {Link, NavLink} from "react-router-dom";
import { Button } from 'react-bootstrap';
import "../css pages/Login.css"
import {FaRegAddressBook} from "react-icons/fa"

const Login = () => {
    const [ profile, setProfile ] = useState(null);
    const clientId = '1000835904597-ut38ah9s6238riqo9iv189fpcje1fc37.apps.googleusercontent.com';
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    let localStorageUsername=localStorage.getItem("localStorageUsername");
    let localStorageLoggedState=localStorage.getItem("localStorageLoggedState");
  
    const [csrfToken, setCsrfToken] = useState('');


    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
        
        Axios.get('http://localhost:8000/api/csrf-token')
        .then(response => {
            //setCsrfToken(response.data["csrfToken"]);
            setCsrfToken(response.data)
        })
        .catch(error => {
            console.error(error);
        });

        if(localStorageLoggedState==1)window.location.href = "/";
    });

    const displayInfo = () => {
        console.log(username + password);
        alert(username + password);
    }


    const updateCsrfToken = ()=> {
        Axios.get('http://localhost:8000/api/csrf-token')
          .then(response => {
            setCsrfToken(response.data);
          })
          .catch(error => {
            console.error(error);
          });
    };

    const loginUser = () => {        
        
        //alert("hu "+ csrfToken);
        
        Axios.post('http://localhost:8000/api/login', 
        {
            username:username,
            password:password
        },
        {
            withCredentials: true
        },
        /*{
            headers: {
              //'X-CSRF-TOKEN': csrfToken
              
            }
        }*/
        ).then((response) =>{
            setLoginStatus(response.data);
            //alert(response.data);
            if(response.data === 0){
                setLoginStatus("Wrong id or password");
            }
            else if(response.data === 1){
                //alert("hi");
                setLoginStatus("logging in");
                localStorage.setItem("localStorageUsername",username);
                localStorage.setItem("localStorageLoggedState",1);
                window.open("/service", "_top");
            }
        })
        .catch(error => {
            console.error(error);
            if (error.response.status === 419) {
                // If the CSRF token is invalid or has expired, generate a new token and try again
                setLoginStatus("CSRF token expired, please try again.");
                setCsrfToken('');
                updateCsrfToken();
            }
        });
        //alert("succc");
        document.querySelector(".logfrm").reset();
    };



    const onSuccess = (res) => {
        setProfile(res.profileObj);
        localStorage.setItem("localStorageLoggedState",1);
        localStorage.setItem("localStorageUsername",res.profileObj.name);
        window.location.href = "/service";

    };

    const onFailure = (err) => {
        console.log('failed', err);
        localStorage.setItem("localStorageLoggedState",0);
        localStorage.setItem("localStorageUsername",null);
    };
  
  return (
    <div className="loginpage" >
        <form className="logfrm">
            <h2>Login Form</h2>
            <div className="loginCreds">
                <FaRegAddressBook className ="loginCredsIcons"/>
                <input type="text" id="name" name="name" placeholder="Insert Usernanme" onChange={(event) => {setUsername(event.target.value);}}/><br/>
            </div>
            
            <div className="loginCreds">
                <FaRegAddressBook className ="loginCredsIcons"/>
                <input type="password" id="pass" name="pass" placeholder="Insert Password" onChange={(event) => {setPassword(event.target.value);}}/><br/>
            </div>
            <p>{loginStatus}</p><br/>
            <Button className="logfrmbut" onClick={loginUser}>Login</Button><br/>
            <Link to="/forgetpass" className="frgtps">Forgot password?</Link><br/>
            {/*<h3  className="logfrmbut" onClick={loginUser}>Login</h3><br/>*/}
            <Link to="/signup" className="logToReg">Don't Have an account? SignUp </Link><br/>
        </form>   
    </div>
  )
}

export default Login