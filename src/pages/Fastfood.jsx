import {React,useState,useEffect } from 'react';
import Axios from 'axios';
import {Link, NavLink} from "react-router-dom";
import { Button } from 'react-bootstrap';
import Headernavbar from './Headernavbar';
import Footer from './Footer';
import Menuara from '../arrayjson/Menuara'
import "../css pages/Menu.css"

const Fastfood = () => {
    const [menuData, setMenuData] = useState(Menuara);
    const [cartItems, setCartItems] = useState([]);
    let localStorageMenuCart=localStorage.getItem("localStorageMenuCart");

    let localStorageUsername=localStorage.getItem("localStorageUsername");
    let localStorageLoggedState=localStorage.getItem("localStorageLoggedState");

    useEffect(() => {
      //alert(localStorageMenuCart);
      //alert(localStorageLoggedState);
      if(localStorageLoggedState==0){

      }
      else{
        //alert(localStorageMenuCart);
        if(localStorageMenuCart != "null"){
          //alert("hww")
          setCartItems(JSON.parse(localStorageMenuCart))
        }
      }
    });

    const addToCart = (item) => {
        const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (itemIndex > -1) {
          const newCartItems = [...cartItems];
          newCartItems[itemIndex].quantity += 1;
          setCartItems(newCartItems);
        } else {
          const newCartItem = { ...item, quantity: 1 };
          setCartItems([...cartItems, newCartItem]);
        }
      };

      const decreaseCartItem = (item) => {
        if(localStorageLoggedState==1){
          const itemIndex = cartItems.find((cartItem) => cartItem.name === item);
          //alert(JSON.stringify([itemIndex["prodCount"]]));
          if (!itemIndex){

          }
          else if ([itemIndex["prodCount"]] == 1) {
            removeCartItem(item);
            //alert(JSON.stringify(localStorageMenuCart));
          } 
          else {
              const newCartItems = [...cartItems];
              const ind=newCartItems.indexOf(itemIndex);
              //alert(JSON.stringify(newCartItems[ind]["prodCount"]));
              newCartItems[ind]["prodCount"]=parseInt(newCartItems[ind]["prodCount"]) -1;
              setCartItems(newCartItems);
              localStorage.setItem("localStorageMenuCart",JSON.stringify(newCartItems));
          }
        }
      };
    
      const increaseCartItem = (item) => {
        //alert(localStorageLoggedState);
        if(localStorageLoggedState==1){
          //alert("hi0");
          const itemIndex = cartItems.find((cartItem) => cartItem.name === item);
          if (!itemIndex){
              setCartItems([...cartItems,{name:item,prodCount:"1"}])
              localStorage.setItem("localStorageMenuCart",JSON.stringify([...cartItems,{name:item,prodCount:"1"}]));
          }
          else{ 
              const newCartItems = [...cartItems];
              const ind=newCartItems.indexOf(itemIndex);
              //alert(JSON.stringify(newCartItems[ind]["prodCount"]));
              newCartItems[ind]["prodCount"]=parseInt(newCartItems[ind]["prodCount"]) +1;
              setCartItems(newCartItems);
              localStorage.setItem("localStorageMenuCart",JSON.stringify(newCartItems));
              //alert((localStorageMenuCart));
          }
        }
      };
    
      const removeCartItem = (item) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.name !== item);
        setCartItems(newCartItems);
        localStorage.setItem("localStorageMenuCart",JSON.stringify(newCartItems));
      };

  return (
    <>
        <Headernavbar></Headernavbar>
        <div className="foodmenuTopImage">

        </div>
        <div className="foodMenuBar">
            {menuData.map((curElem)=>{
                return(
                    <div className="foodMenu" key={curElem.id}>
                        <div className="foodImage">
                            <img src={curElem.image}></img><br/>
                        </div>
                        <div className="foodDesc">
                            <h2>{curElem.name}</h2>
                            <h3>TK. {curElem.price}</h3>
                            <p>{curElem.desc}</p><br/>
                        </div>
                        <div className="foodDescButt">
                            <button onClick={() => decreaseCartItem(curElem.name)}>-</button>    
                            <button onClick={() => increaseCartItem(curElem.name)}>+</button>   
                        </div>
                    </div>
                )
            })}
        </div>
        {cartItems.length > 0 ? (
                                <ul>
                                {cartItems.map((cartItem) => (
                                    <li key={cartItem.id}>
                                    <span>name: {cartItem.name}</span>
                                    <span> quantity: {cartItem.prodCount}</span>
                                    </li>
                                ))}
                                </ul>
                            ) : (
                                <p>Your cart is empty.</p>
          )}
          <div>local: 
          {localStorageMenuCart}
          </div>
        <Footer/>
    </>
  )
}

export default Fastfood