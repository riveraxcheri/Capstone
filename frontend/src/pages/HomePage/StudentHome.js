import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import CommentList from '../../components/CommentList/CommentList';
import PointsCounter from '../../components/PointsCounter/PointsCounter';



const StudentHome = () => {
    const [user, token] = useAuth();
    const [qrCode, setQrCode] = useState([]);
    const [student, setStudent] = useState("");
    const [userId, setUserId] = useState("");
    const [entries, setEntries] = useState([]);
    const [points, setPoints] = useState(0);

    const getUserId = () => {
        if (user?.is_student) {
            setUserId(user.student.user_id);
        }
        else {
            setUserId("input needed");
        }
        return (userId);
    };
    const getPoints = () => {
        if (user?.is_student) {
            setPoints(user.student.points);
        }
        else {
            setPoints(0);
        }
        return (points);
    };
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
      const getUser = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/auth/students/",{
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          
          console.log(response.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };
      getUser();
    }, [token]);

    return ( 
        <div>
            <h1>Student Home Page</h1>
            <h2>Welcome {user.username}!</h2>
            <p>Points Total: {getPoints}</p>
            <button>Get QR Code</button>
            <h3>Message Board</h3>
            <CommentList entries={entries}/>
        </div>
        );
    };
 
export default StudentHome;

/* <button onClick={qrCodesGenerator}>Get my QR Code</button>
const [user, token] = useAuth();
const [qrCodes, setQrCodes] = useState([]);

useEffect(() => {
  const qrCodesGenerator = async () => {
    try {
      let response = await axios.get(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user.id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      
      setQrCodes(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  qrCodesGenerator();
}, [token]); */