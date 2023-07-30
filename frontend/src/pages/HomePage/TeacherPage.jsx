import CommentForm from "../../components/CommentForm/CommentForm";
import useAuth from "../../hooks/useAuth";
import React, { useState } from 'react';
import axios from "axios";


const TeacherPage = () => {
    const [user, token] = useAuth();
    const [comment, setComment] = useState();

    //GET All Comments
    async function getAllComments(){
        const response = await axios.get("http://127.0.0.1:8000/api/comments/all/");
        console.log(response.data);
        setComment(response.data);
    }
    //GET Comments by User
    async function getUserComments(){
        const response = await axios.get(`"http://127.0.0.1:8000/api/comments/${user.id}/"`);
        console.log(response.data);
        setComment(response.data);
    }
    //POST New Comment
    async function addComment(newComment) {
        const response = await axios.post("http://127.0.0.1:8000/api/comments/", newComment);
        if (response.status === 204) {
            console.log ("Comment Added!");
            getAllComments()
        }
    }
    return ( 
        <div>
            <h1>Teacher Home Page</h1>
            <h2>Welcome {user.first_name}!</h2>
            <CommentForm 
                comment={comment}
                addComment={addComment}
                getAllComments={getAllComments}
            />
            <button onClick={() => getAllComments()}>Get All Comments</button>
            <button onClick={() => getUserComments(user.id)}>Get Comments By User</button>
            
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