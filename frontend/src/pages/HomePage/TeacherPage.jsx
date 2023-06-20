import useAuth from "../../hooks/useAuth";
import React, { useState } from 'react';

import ProductsForm from "../../components/ProductsForm/ProductsForm";

const TeacherPage = () => {
    const [user, token] = useAuth();


    return ( 
        <div>
            <h1>Teacher Home Page</h1>
            <h2>Welcome {user.username}!</h2>
            <p>Thank you for all you do!</p>
            <button>Get Student Cart</button>
            <button>Get Students Info</button>
            <button>Get Product Info</button>
            <ProductsForm/>
            {/* <button onClick=
            {<ProductsForm addProducts={addProducts} items={items}/>}> */}
                <button>Add New Product
            </button>
            
        </div> );
}
 
export default TeacherPage;

//Get All Users List
//http://127.0.0.1:8000/api/auth/users/
//Get All Teachers List
//http://127.0.0.1:8000/api/auth/teachers/
//Get Teacher By ID 
//`http://127.0.0.1:8000/api/auth/teachers/${user.id}/`
    //To use to customise the Teacher Page