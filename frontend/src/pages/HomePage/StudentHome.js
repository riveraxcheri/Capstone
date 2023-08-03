//General Imports
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./StudentHome.css";
//Util Imports
import axios from "axios";
//Component Imports
import QrAccessPage from "../../components/QrAccessPage/QrAccessPage";


const StudentHome = () => {
  const [user, token] = useAuth();
  const [userId, setUserId] = useState(`${user.id}`);
  const [points, setPoints] = useState();
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState("");


  //GET Student by ID
  useEffect(() => {
    console.log("Hello World");
  });
  async function getStudentById() {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/auth/students/${userId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
        );
        console.log(response.data);
        setStudentData(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getStudentById();
  
//GET Student Points    
  const getPoints = async () => {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/auth/points/${userId}/`
      );
      console.log(response.data.points);
      setPoints(response.data.points);
    };
    getPoints();
      
return (
  <div>
    <div className="private-student-home">
    <button onClick={()=>navigate("/qrcode")}>Teachers</button>
    </div>  
    <div className="student-home">
      <h1>Student Home Page</h1>
      <h2>Welcome {user.first_name}!</h2>
      <p>Total Points: {points}</p>
      <p>StudentId: {user.id}</p>
      <h2>{user.first_name}'s QR Code</h2>
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=//127.0.0.1:8000/api/auth/students/${userId}/`}
        className="qr-code"
        alt="studnet qr code"
      />
    </div>
    <button onClick={()=>navigate("/transactions")}>Transaction History</button>
  </div>
);
};

export default StudentHome;
