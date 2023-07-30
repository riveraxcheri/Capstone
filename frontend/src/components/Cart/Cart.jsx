
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
    //  const [user, token] = useAuth();
     //   const [cart, setCart] = useState([]);
     
     //   useEffect(() => {
     //     const fetchCart = async () => {
     //       try {
     //         let response = await axios.get("http://127.0.0.1:8000/api/store/cart/${cart_id}/", {
     //           headers: {
     //             Authorization: "Bearer " + token,
     //           },
     //         });
     //         setCart(response.data);
     //       } catch (error) {
     //         console.log(error.response.data);
     //       }
     //     };
     //     fetchCars();
     //   }, [token]);
     //   return (
     //     <div className="container">
     //       <h1>Shopping Cart for {user.username}!</h1>
     //       {cart &&
     //         cart.map((cart) => (
     //           <p key={cart.id}>
     //             {cart.products} {cart.is_active}
     //           </p>
     //         ))}
     //     </div>
     //   );
     // };
}
 
export default Cart;