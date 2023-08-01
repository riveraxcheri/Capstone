//Components Imports
import CommentForm from "../../components/CommentForm/CommentForm";
//General Imports
import useAuth from "../../hooks/useAuth";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TeacherHome.css"
import { Link } from "react-router-dom";
import PointsCounter from "../../components/PointsCounter/PointsCounter";
import StudentInfo from "../../components/StudentInfo/StudentInfo";

const TeacherHome = () => {
  const [user, token] = useAuth();
  const [comment, setComment] = useState([]);
  const [studentId, setStudentId] = useState();
  const [studentName, setStudentName] = useState("");
  const [studentInfo, setStudentInfo] = useState([]);
  
  const updatePoints = (studentInfo) => {
    let updatePoints = [...user.student.points, studentInfo];
    setStudentInfo(updatePoints);
  };

  useEffect(() => {
    console.log("Hello World");
  }, []);
  //Functions
  //GET Student Info
    async function getStudentInfo() {
        const response = await axios.get("http://127.0.0.1:8000/api/auth/students/");
        console.log(response.data);
        setStudentInfo(response.data);
    }
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
      <h3>Leave Comment Here</h3>
        <CommentForm
            comment={comment}
            addComment={addComment}
        />
      <h3>* Request Student Cart Access *</h3>
        <p>input cart id & link to getCart function</p>
      <h3>* Request Student Page Access *</h3>
        <p>input student id & link to getStudentPage function</p>
      <h3>* Request Student Info Access *</h3>
        <p>input student id & link to getStudentInfo function</p>
        <button onClick={getStudentInfo()}>Get All Students Info</button>
      <h3>* Request Product Inventory *</h3>
        <p>input product id & link to getProductInfo function</p>
      <h3>* Add New Product *</h3>
        <p>insert ProductForm</p>
      <h3>* Edit/Delete Product *</h3>
        <p>input product id & link to editProductInfo function</p>
      <h3>* Register New Student *</h3>
        <p>link to registration page</p>
      <h3>* Edit/Delete Student *</h3>
        <p>input student id & link to editStudentInfo function</p>
        <PointsCounter updatePoints = {updatePoints}/>

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
