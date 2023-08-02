//Components Imports
import ProductForm from "../../components/ProductForm/ProductForm";


//General Imports
import useAuth from "../../hooks/useAuth";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TeacherHome.css"
import { Link } from "react-router-dom";
import QrAccessPage from "../../components/QrAccessPage/QrAccessPage";


const TeacherHome = () => {
  const [user, token] = useAuth();
  const [student, setStudent] = useState([]);
  const [items, setItems] = useState([]);



  useEffect(() => {
    console.log("Hello World");
  }, []);
  //Functions
  //GET Student Info
    async function getStudentInfo() {
        const response = await axios.get("http://127.0.0.1:8000/api/auth/students/");
        console.log(response.data);
        setStudent(response.data);
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

    // Instaniation
    return (
      <div className="teacher-home">
      <h1>Teacher Home Page</h1>
      <h2>Welcome {user.first_name}!</h2>
      <div className="quick-section">
        <h3> Quick Access </h3>
          <QrAccessPage studentData={student}/>
      </div>
      <div className="products-section">
        
        <h3> Products </h3>
          <ProductForm items={items} addNewItem={addNewItem} getAllItems={getAllItems}/>
          <Link to={"/products"}>
            <button>View/Edit Products</button>
          </Link>
          <button onClick={getAllItems}>Get All Products</button>
      </div>
      <div className="students-section">

        <h3> Students </h3>
          <Link to={"/student"}>
            <button>Student Info</button>
          </Link>
          <button onClick={getStudentInfo}>Get All Students Info</button>
        <h4> Register New Student </h4>
          <Link to={"/register"}>
              <button>Add Student</button>
          </Link>
      </div>

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
