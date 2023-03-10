import {React,useState,useEffect } from 'react';
import Headernavbar from './Headernavbar';
import Footer from './Footer';
import Menuara from '../arrayjson/Menuara'
import "../css pages/Menu.css"
import Shoppingcart from './Shoppingcart';

const Setmenu = () => {
    const [menuData, setMenuData] = useState(Menuara);
    const [cartItems, setCartItems] = useState([]);
    let localStorageMenuCart=localStorage.getItem("localStorageMenuCart");

    let localStorageUsername=localStorage.getItem("localStorageUsername");
    let localStorageLoggedState=localStorage.getItem("localStorageLoggedState");

    useEffect(() => {
      if(localStorageLoggedState==0){

      }
      else{
        // alert(localStorageMenuCart);
        if(localStorageMenuCart != "null"){
          setCartItems(JSON.parse(localStorageMenuCart))
        }
      }
    }, [localStorageMenuCart, localStorageLoggedState]);

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
        if(localStorageLoggedState==1 && cartItems.length > 0 && JSON.stringify(cartItems)!=null ){
          const itemIndex = cartItems && cartItems.find((cartItem) => cartItem.name === item.name);
          if (!itemIndex || JSON.stringify(itemIndex)=="undefined" || JSON.stringify(itemIndex)=="null"){

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
        //alert("cart" + JSON.stringify(cartItems));  
        if(localStorageLoggedState==1){
          if(JSON.stringify(cartItems)=="null" || JSON.stringify(cartItems)=="undefined"){
            setCartItems([{name:item.name,prodCount:"1",price:item.price,image:item.image}]);
          }
          else{
            const itemIndex = cartItems.find((cartItem) => cartItem.name === item.name);
            //alert(JSON.stringify(itemIndex));
            if (!itemIndex || JSON.stringify(itemIndex)=="undefined" || JSON.stringify(itemIndex)=="null"){
                setCartItems([...cartItems,{name:item.name,prodCount:"1",price:item.price,image:item.image}])
                localStorage.setItem("localStorageMenuCart",JSON.stringify([...cartItems,{name:item.name,prodCount:"1",price:item.price,image:item.image}]));
            }
            else{ 
                const newCartItems = [...cartItems];
                const ind = itemIndex ? newCartItems.indexOf(itemIndex) : -1;
                if (ind !== -1) {
                  newCartItems[ind]["prodCount"] = parseInt(newCartItems[ind]["prodCount"]) + 1;
                  setCartItems(newCartItems);
                  localStorage.setItem("localStorageMenuCart", JSON.stringify(newCartItems));
                }
            }
          }
          
        }
      };
    
      const removeCartItem = (item) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.name !== item.name);
        setCartItems(newCartItems);
        localStorage.setItem("localStorageMenuCart",JSON.stringify(newCartItems));
      };
  return (
    <>
        <Headernavbar></Headernavbar>
        <Shoppingcart/>
        <div className="foodmenuTopImage">

        </div>
        <div className="foodMenuBar">
            {menuData.map((curElem)=>{
              if (curElem.category === "setmenu") {
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
                            <button onClick={() => decreaseCartItem(curElem)}>-</button>    
                            <button onClick={() => increaseCartItem(curElem)}>+</button>   
                        </div>
                    </div>
                )
              }
            })}
        </div>
        <Footer/>
    </>
  )
}

export default Setmenu