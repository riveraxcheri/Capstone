import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';



const StudentHome = () => {
    const [user, token] = useAuth();
    const [qrCodes, setQrCodes] = useState([]);
    // const [userId, setUserId] = useState("");

    useEffect(() => {
      const qrCodesGenerator = async () => {
        try {
          let response = await axios.get(
            "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example", {
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
    }, [token]);
    return ( 
        <div>
            <h1>Student Home Page</h1>
            <h2>Welcome {user.username}!</h2>
            <p>Points Total: {user.points}</p>
            <button>Get QR Code</button>
        </div>
     );
}
 
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