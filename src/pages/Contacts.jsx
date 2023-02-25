import {React,useEffect,useState} from 'react'
import Headernavbar from './Headernavbar';
import "../css pages/Contacts.css"

const Contacts = () => {
  return (
    <>
        <Headernavbar/>
        <div className='contactBackg'>
        </div>
        <div className='contactBack'>
            <div className="contactBar"></div>
            <div className="contactBar">
                <h2 className="contactFormHeader">Contact Us</h2>
                <form className="contactForm">
                    <input type="text" placeholder="your name"></input><br/>
                    <input type="email" placeholder="your email"></input><br/>
                    <input type="text" placeholder="phone no"></input><br/>
                    <textarea wrap="soft" placeholder="message"/><br/>
                    <button className="contactFormBut">Submit</button>
                </form>
                
            </div>
          </div>
        
        {/*<div className='contactBack'>
          <div className="contactBar">
            <h2 className="contactFormHeader">Contact Us</h2>
            <form className="contactForm">
              <input type="text" placeholder="your name"></input><br/>
              <input type="email" placeholder="your email"></input><br/>
              <input type="text" placeholder="phone no"></input><br/>
              <textarea wrap="soft" placeholder="message"/><br/>
              <button className="contactFormBut">Submit</button>
            </form>      
          </div>
        </div>*/}
    </>
  )
}

export default Contacts