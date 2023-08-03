//Utilities
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import CustomButton from './CustomButton';

//Components

//Cart Links
//GetView: http://127.0.0.1:8000/api/store/cart/{id}/
//Create:http://127.0.0.1:8000/api/store/+cart/{id}/
//Add:http://127.0.0.1:8000/api/store/add/{id}/cart/{id}/
//Remove:http://127.0.0.1:8000/api/store/remove/{id}/cart/{id}/
//Update:http://127.0.0.1:8000/api/store/1{id}/
//Delete:<-
//Product Links
//Create:http://127.0.0.1:8000/api/store/
//GetAll:http://127.0.0.1:8000/api/store/all/
//GetById:->
//Update:->
//Delete:->
//http://127.0.0.1:8000/api/store/{id}/




const Cart = () => {
    const [user, token] = useAuth();
    const [cart, setCart] = useState();
    const [cartId, setCartId] = useState();


    //Get Cart View
    const fetchCart=async () => {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/api/store/cart/${cartId}`,
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            setCart(response.data);
        } catch (error) {
            console.log(error.response.data);
        }

    };
    fetchCart(); 
    // //PATCH Add To Cart//
// async function addToCart() {
//   (cart?.is_active === true) 
//      try { let item = {cartItem};
//      const response = await axios.patch(
//        `http://127.0.0.1:8000/api/store/add/${itemId}/cart/${cartId}/`
//      );
//   } catch (error) {
//    createCart();
// }   

    return ( 
        <div>
            <h1>Shopping Cart:{cart.id}</h1>
            <p>{user.username}</p>
            <p>curent points:{user.points}</p>
            <p>cart total:"sum of product points"</p>
            <p>points remaining:"pointsRemaining"</p>
            <button>Submit</button>
            <div className="cart-container">
                <h1>Shopping Cart for {user.username}!</h1>
                <button onClick={()=>fetchCart()}></button>
                <CustomButton/>
            </div>
        </div>

     );
}
 
export default Cart;
                // <div className='cart-info'>
                //     {cart &&
                //     cart.map((cart) => (
                //     <p key={cart.id}>
                //         {cart.products} {cart.is_active}
                //     </p>
                //     ))}