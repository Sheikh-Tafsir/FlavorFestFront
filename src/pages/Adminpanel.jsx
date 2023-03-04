import {React,useState,useEffect } from 'react';
import Axios from 'axios';
import {Link, NavLink} from "react-router-dom";
import { Button } from 'react-bootstrap';
import "../css pages/Adminpanel.css"
import Headernavbar from './Headernavbar';

const Adminpanel = () => {
    const [cartItems, setCartItems] = useState([]);
    let localStorageLoggedState=localStorage.getItem("localStorageLoggedState");

    const viewOrders = () => {
        //alert("hi");
        //alert(localStorageUsername + " " + localStorageMenuCart + " " + sum_total);
        Axios.get('http://localhost:8000/api/post', 
        // {
        //     withCredentials: true
        // }
        ).then((response) =>{
            setCartItems((response.data));
        }).catch(error => {
            console.log(error);
        });
    }
    useEffect(() => {
        // alert(localStorageLoggedState);
        if(localStorageLoggedState==0)window.location.href = "/";
        viewOrders();
    });

  return (
    <div>
        <Headernavbar/>
        <h1>All orders are here</h1>
        <table className="orders" id="orderHead">
            <td className="orders_order_time">order time</td>
            <td className="orders_name">name</td>
            <td className="ordersnestedbar">
                <div className="ordersnested">
                    <td className="orders_item_name">item name</td>
                    <td className="orders_pieces">pieces</td>
                </div>
            </td>
            <td className="orders_total_price">total price</td>
            <br/>
        </table>
    
        {/*cartItems.map((cartItem) => (
            <div key={cartItem.order_id} className="orders">
                <p className="orders_order_time">{cartItem.created_at.slice(0, 10)}</p>
                <p className="orders_name">{cartItem.name}</p>
                <div className="ordersnestedbar">
                    {JSON.parse(cartItem.order).map((curelem) => (
                        <div key={curelem.name} className="ordersnested">
                            <p className="orders_item_name">{curelem.name}</p>
                            <p className="orders_pieces">{curelem.prodCount}</p>
                        </div>
                    ))}
                </div>
                <p className="orders_total_price">{cartItem.total}</p>
                <br/>
            </div> 
        ))*/} 
        {cartItems.map((cartItem) => (
            <table key={cartItem.order_id} className="orders">
                <td className="orders_order_time">{cartItem.created_at.slice(0, 10)}</td>
                <td className="orders_name">{cartItem.name}</td>
                <td className="ordersnestedbar">
                    {JSON.parse(cartItem.order).map((curelem) => (
                        <div key={curelem.name} className="ordersnested">
                            <td className="orders_item_name">{curelem.name}</td>
                            <td className="orders_pieces">{curelem.prodCount}</td>
                        </div>
                    ))}
                </td>
                <td className="orders_total_price">{cartItem.total}</td>
            </table>
        ))} 
    </div>
  )
}

export default Adminpanel