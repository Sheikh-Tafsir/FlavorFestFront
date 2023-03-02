import React from 'react'
import {Routes, Route, Link, BrowserRouter, useNavigate} from "react-router-dom";
import { Navbar } from 'react-bootstrap';

import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Service from "./pages/Service"
import Notfound from "./pages/Notfound"
import Headernavbar from './pages/Headernavbar';
import Forgetpass from './pages/Forgetpass';
import Dashboard from './pages/Dashboard';
import Heromain from './pages/Heromain';
import Review from './pages/Review';
import Footer from './pages/Footer';
import Contacts from './pages/Contacts';
import Products from './pages/Products';
import Fastfood from './pages/Fastfood';
import Setmenu from './pages/Setmenu';
import Shoppingcart from './pages/Shoppingcart'

const App = () =>{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='login' element={<Login/>} />
          <Route path='signup' element={<Signup/>} />
          <Route path='service' element={<Service/>} />
          <Route path='headernavbar' element={<Headernavbar/>} />
          <Route path='forgetpass' element={<Forgetpass/>} />
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path="heromain" element={<Heromain/>}/>
          <Route path="contacts" element={<Contacts/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="footer" element={<Footer/>}/>
          <Route path="fastfood" element={<Fastfood/>}/>
          <Route path="setmenu" element={<Setmenu/>}/>
          <Route path="shoppingcart" element={<Shoppingcart/>}/>
          <Route path='*' element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
