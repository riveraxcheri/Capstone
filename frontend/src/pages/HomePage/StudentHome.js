import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./StudentHome.css";
import CommentList from "../../components/CommentList/CommentList";
import PointsCounter from "../../components/PointsCounter/PointsCounter";
import StudentInfo from "../../components/StudentInfo/StudentInfo";

const StudentHome = () => {
  const [user, token] = useAuth();
  const [userId, setUserId] = useState(`${user.id}`);
  const [points, setPoints] = useState();
  // const [qrCode, setQrCode] = useState([]);
  // const [student, setStudent] = useState("");
  // const [userId, setUserId] = useState("");
  // const [entries, setEntries] = useState([]);
  // const [points, setPoints] = useState(0);

  // const getUserId = () => {
  //     if (user?.is_student) {
  //         setUserId(user.student.user_id);
  //     }
  //     else {
  //         console.log("Error, Not Student");
  //     }
  //     return (userId);
  // };
  // const getPoints = () => {
  //     if (user?.is_student) {
  //         setPoints(user.student.points);
  //     }
  //     else {
  //         setPoints(0);
  //     }
  //     return (points);
  // };
  // const getQrCode = async () => {
  //     try {
  //         let response = await axios.get(
  //             "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example");

  //         setQrCode(response.data);
  //     } catch (error) {
  //         console.log(error.response.data);
  //     }
  // }
  //     qrCode();

  useEffect(() => {
    //   console.log("Hello World");
    // });
    //   const getUser = async () => {
    //     try {
    //       let response = await axios.get("http://127.0.0.1:8000/api/auth/students/",{
    //         headers: {
    //           Authorization: "Bearer " + token,
    //         },
    //       });

    //       console.log(response.data);
    //     } catch (error) {
    //       console.log(error.response.data);
    //     }
    //   };
    //   getUser();
    // }, [token]);

    const getPoints = async () => {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/auth/points/${userId}/`
      );
      console.log(response.data.points);
      setPoints(response.data.points);
    };
    getPoints();
  });

  return (
    <div className="student-home">
      <h1>Student Home Page</h1>
      <h2>Welcome {user.first_name}!</h2>
      <p>Total Points: {points}</p>
      <p>StudentId: {user.id}</p>
      <h2>{user.first_name}'s QR Code</h2>
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=AAC${userId}`}
        className="qr-code"
        alt="studnet qr code"
      />
  
    </div>
  );
};

export default StudentHome;
