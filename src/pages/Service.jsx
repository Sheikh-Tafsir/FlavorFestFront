import {React,useEffect,useState} from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

const Service = () => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item]);
    }

    const removeItem = (item) => {
        setItems(items.filter(i => i !== item));
    }

    return (
    <>
        <h1>Shopping Cart</h1>
        <ul>
            {items.map((item, index) => (
            <li key={index}>
                {item}
                <button onClick={() => removeItem(item)}>Remove</button>
            </li>
            ))}
        </ul>
        <button onClick={() => addItem('New Item')}>Add Item</button>
    </>
    
  )
}

export default Service