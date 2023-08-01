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
import ProductForm from "../../components/ProductForm/ProductForm";

const TeacherHome = () => {
  const [user, token] = useAuth();
  const [entries, setEntries] = useState([""]);
  const [studentInfo, setStudentInfo] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [items, setItems] = useState([]);

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
  //GET All Products
    async function getAllItems() {
        const response = await axios.get("http://127.0.0.1:8000/api/store/all/");
        console.log(response.data);
        setItems(response.data);
    }
  //POST Add New Product
    async function addNewItem(newItem) {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/store/all/",
            newItem
        );
        if (response.status === 204) {
            console.log("New Item Added");
            getAllItems();
        }
    }

  // POST New Comment
  async function addNewComment(newComment) {
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
      getAllComments();
    }
  };
  // Instaniation
  return (
    <div className="teacher-home">
      <h1>Teacher Home Page</h1>
      <h2>Welcome {user.first_name}!</h2>
      <h3>Leave Comment Here</h3>
        <CommentForm
            entries={entries}
            addNewCommentProp={addNewComment}
            getAllComments={getAllComments}
        />
      <h3>* Request Student Cart Access *</h3>
        <p>input cart id & link to getCart function</p>
      <h3>* Request Student Page Access *</h3>
        <p>input student id & link to getStudentPage function</p>
      <h3>* Request Student Info Access *</h3>
        <p>input student id & link to getStudentInfo function</p>
        <button>Get All Students Info</button>
      <h3>* Request Product Inventory *</h3>
        <p>input product id & link to getProductInfo function</p>
      <h3>* Add New Product *</h3>
        <ProductForm items={items} addNewItemProp={addNewItem} getAllItems={getAllItems}/>
      <h3>* Edit/Delete Product *</h3>
        <p>input product id & link to editProductInfo function</p>
      <h3>* Register New Student *</h3>
        <Link to={"/register"}>
            <button>Add Student</button>
        </Link>
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
