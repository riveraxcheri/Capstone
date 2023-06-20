
import React, { useState } from 'react';


const Cart = ({getCartProducts}) => {
    // const [cartProducts, setCartProducts] = useState([]);
    // const [cost, setCost] = useState();

    //Get items in Cart
    // async function getCart() {
    //     let response = await axios.get(

    //     );
    //     setCartProducts(response.data.items[0]);
    // }
    return ( 
        <div>
            <h1>Cart</h1>
            <p>This is where students cart items will generate:</p>
            <p>I plan to have a CartProducts Table to disply here</p>
            <h3>Total Cost: 10 pts</h3>
            <p>Cart can only be submitted by a Teacher</p>
            <button>Submit</button>
        </div>

     );
}
 
export default Cart;