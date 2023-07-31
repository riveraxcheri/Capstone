//Components Imports
import CommentForm from "../../components/CommentForm/CommentForm";
//General Imports
import useAuth from "../../hooks/useAuth";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TeacherHome.css"

const TeacherHome = () => {
  const [user, token] = useAuth();
  const [comment, setComment] = useState([]);

  useEffect(() => {
    console.log("Hello World");
  }, []);

  //Functions
  //GET All Comments
//   async function getAllComments() {
//     try {
//       const response = await axios.get(
//         "http://127.0.0.1:8000/api/comments/all/",
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       );
//       console.log(response.data);
//       setComment(response.data);
//     } catch (error) {
//       console.log(error.response.data);
//     }
//   };
  //GET Comments by User
  // async function getUserComments(){
  //     const response = await axios.get(`http://127.0.0.1:8000/api/comments/${user.user_id}/`,{
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //     console.log(response.data);
  //     setComment(response.data);
  // }
  //POST New Comment
  async function addComment(newComment) {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/comments/",
      newComment,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 204) {
      console.log("Comment Added!");
    //   getAllComments();
    }
  };
  return (
    <div className="teacher-home">
      <h1>Teacher Home Page</h1>
      <h2>Welcome {user.first_name}!</h2>
      <CommentForm
        comment={comment}
        addComment={addComment}
      />
    </div>
  );
};

export default TeacherHome;

  /* <button onClick={() => getAllComments()}>Get All Comments</button>
<button onClick={() => getUserComments(user.user_id)}>Get Comments By User</button> */


//Get All Users List
//http://127.0.0.1:8000/api/auth/users/
//Get All Teachers List
//http://127.0.0.1:8000/api/auth/teachers/
//Get Teacher By ID
//`http://127.0.0.1:8000/api/auth/teachers/${user.id}/`
//To use to customise the Teacher Page
