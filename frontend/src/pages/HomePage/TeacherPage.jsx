import useAuth from "../../hooks/useAuth";
import React, { useState } from 'react';


const TeacherPage = () => {
    const [user, token] = useAuth();


    return ( 
        <div>
            <h1>Teacher Home Page</h1>
            <h2>Welcome {user.username}!</h2>
            
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