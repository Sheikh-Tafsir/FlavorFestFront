import {React,useState,useEffect } from 'react';
import Axios from 'axios';
import {Link, NavLink} from "react-router-dom";
import { Button } from 'react-bootstrap';
import {HiBars3} from "react-icons/hi2"
import {AiOutlineClose} from "react-icons/ai"
import "../css pages/Shoppingcart.css"

const Shoppingcart = () => {
    const [orderStatus,setOrderStatus]= useState();
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice,setTotalPrice]=useState();
    let localStorageMenuCart=localStorage.getItem("localStorageMenuCart");

    let localStorageUsername=localStorage.getItem("localStorageUsername");
    let localStorageLoggedState=localStorage.getItem("localStorageLoggedState");
    let sum_total=0;

    //shopping cart slides in
    const shoppingCartSlideIn = () =>{
        const element = document.querySelector('.shoppingCart');
        element.classList.remove("shoppingCartSlideIn");
    }

    //to remove a item from cart
    const removeCartItem = (item) => {
        //alert("hi");
        const newCartItems = cartItems.filter((cartItem) => cartItem.name !== item.name);
        setCartItems(newCartItems);
        localStorage.setItem("localStorageMenuCart",JSON.stringify(newCartItems));
    };
    const placeOrder = () => {
        //alert(localStorageUsername + " " + localStorageMenuCart + " " + sum_total);
        Axios.post('http://localhost:8000/api/orders', 
        {
            name:localStorageUsername,
            order:localStorageMenuCart,
            total:sum_total,
        },
        {
            withCredentials: true
        }
        ).then((response) =>{
            if(response.data["success"] == true){
                setOrderStatus("order placed");
                setCartItems();
                localStorage.setItem("localStorageMenuCart",null);
                window.location.reload(false);
            }
            else if(response.data["success"] == false){
                setOrderStatus(response.data["message"]);   
            }
            else{
                setOrderStatus(response.data);
            }
        });
    }

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

  return (
    <>

        <div className="shoppingCart">
            
            <AiOutlineClose className="shoppingCartCloseBut" onClick={shoppingCartSlideIn}/>

            {/*localStorageMenuCart*/}
            {cartItems.length > 0 ? 
                (
                <div>
                    <ul>
                        {cartItems.map((cartItem) => (
                            <div className="cartItemCard" key={cartItem.id}>
                                <div className="cartItemCardImg">
                                    <img src={cartItem.image}></img>
                                </div>
                                <div className="cartItemCardDesc">
                                    <h3>{cartItem.name}</h3>
                                    <p>quantity: {cartItem.prodCount}</p>
                                    <p className="cartItemCardDescTk">Price each: TK.{cartItem.price}</p>
                                </div>
                                <div className="cartItemCardDel">
                                    <AiOutlineClose className="cartItemCardDelBut" onClick={() =>removeCartItem(cartItem)} ></AiOutlineClose>
                                    <p>{sum_total += cartItem.prodCount*cartItem.price}</p>
                                    
                                </div>
                            </div>
                        ))}
                    </ul>
                    <div className="shoppingCartBal">
                        <p>Sum Total: </p>
                        <p>Tk {sum_total}/=</p>
                    </div>
                    <Button className="shoppingCartCheckoutBut" onClick={() =>placeOrder()}>Checkout</Button>
                    <p >{orderStatus}</p>
                 </div>
                ) : 
                (
                    <div>
                        <p className="orderStatus">{orderStatus}</p>
                        <p></p>
                    </div>
                )
            }
            
        </div>
    </>
    
  )
}

export default Shoppingcart